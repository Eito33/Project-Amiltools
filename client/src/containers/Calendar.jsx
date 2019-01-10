import React, { Component, Fragment } from 'react';

import VerifUserRole from '../services/verif_role_user';

import axios from 'axios';
import config from '../config/config.json';

import { connect } from "react-redux";

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import PopupCalendar from "./Popup/PopupCalendar";

import '../styles/Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            openPopup: false,
            selectedDate: {
                start: "",
                end: ""
            },
            eventTitle: "",
            error: "",
            popup: "add",
            idEvent: "",
            addToAllCB: false

        }
    }

    togglePopup = (title) => {
        this.setState({
            openPopup: !this.state.openPopup,
            error: "",
            eventTitle: title,
            addToAllCB: false
        })
    }

    getCalendarEvents = () => {
        if (this.props.userId) {
            axios.post(config.URL_SERV_BEGGIN + config.URL_API_REST + 'calendar/getEvents', {
                idUser: this.props.userId
            })
                .then((response) => {
                    if (response.data.response.length === 0) {
                        this.setState({ events: [] });
                    } else {
                        let events = [];
                        for (var event of response.data.response) {
                            event.end = new Date(event.end);
                            event.start = new Date(event.start);
                            events.push(event);
                        }
                        this.setState({ events });
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    componentDidMount() {
        this.getCalendarEvents();
    }

    addEvent = () => {
        if (this.state.eventTitle.trim() === "") {
            this.setState({ error: "You must type a real title... Not only spaces.." })
        } else {
            axios.post(config.URL_SERV_BEGGIN + config.URL_API_REST + 'calendar/setEvent', {
                event: {
                    idUser: this.props.userId,
                    start: this.state.selectedDate.start.toString().substr(4, 20),
                    end: this.state.selectedDate.end.toString().substr(4, 20).replace("00:00:00", "23:59:59"),
                    title: this.state.eventTitle,
                    forAll: this.state.addToAllCB
                }

            })
                .then((response) => {
                    this.togglePopup("");
                    this.getCalendarEvents();
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    removeEvent = () => {
        axios.delete(config.URL_SERV_BEGGIN + config.URL_API_REST + 'calendar/delete', {
            data: { id: this.state.idEvent }
        })
            .then((response) => {
                this.togglePopup("");
                this.getCalendarEvents();
            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleSelectDate = ({ start, end }) => {
        this.setState({
            popup: "add",
            selectedDate: {
                start: start,
                end: end
            }
        });
        this.togglePopup("");
    }

    handleSelectEvent = (title, id) => {
        this.setState({
            popup: "remove",
            idEvent: id
        }, () => this.togglePopup(title));

    }

    renderContentPopup = () => {
        if (this.state.popup === "remove") {
            return (
                <div className="form-group">
                    Remove {this.state.eventTitle}
                </div>
            )
        } else {
            return (
                <div className="form-group">
                    <label htmlFor="author" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            value={this.state.eventTitle}
                            onChange={this.handleChange}
                            name="eventTitle"
                            placeholder="Type your event title.."
                            className="form-control d-block"
                        />
                    </div>
                    <div className="col-sm-10">
                        {this.renderCheckBox()}
                    </div>
                </div>
            )
        }
    }

    toggleCB = () => {
        this.setState({ addToAllCB: !this.state.addToAllCB })
    }

    renderCheckBox = () => {
        var verifRole = new VerifUserRole();
        if (verifRole.get50Value()) { //Uniqement disponible pour les roles a 50 ou +
            return (
                <Fragment>
                    <label className="custom-cb-container" >Add event to all users.
                        <input type="checkbox" onClick={this.toggleCB} />
                        <span className="checkmark"></span>
                    </label>
                </Fragment>
            )
        }
    }

    renderPopup = () => {
        if (this.state.popup === "remove") {
            return (
                <PopupCalendar
                    title="Are you sure you want to delete this event ?"
                    textSuccessBtn="Yes"
                    textCancelBtn="Cancel"
                    onClose={() => this.togglePopup("")}
                    onSuccess={this.removeEvent}
                    content={this.renderContentPopup()}
                    disabled={false}
                />
            )
        } else {
            return (
                <PopupCalendar
                    title="Type your event title :"
                    textSuccessBtn="Save"
                    textCancelBtn="Cancel"
                    onClose={() => this.togglePopup("")}
                    onSuccess={this.addEvent}
                    content={this.renderContentPopup()}
                    error={this.state.error}
                    disabled={this.state.eventTitle === ""}
                />
            )
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <BigCalendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectSlot={this.handleSelectDate}
                    onSelectEvent={event => this.handleSelectEvent(event.title, event.id)}
                    views={['month', "day"]}
                />
                {
                    this.state.openPopup &&
                    this.renderPopup()
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.saveUserReducer.id
    }
}

export default connect(mapStateToProps)(Calendar);