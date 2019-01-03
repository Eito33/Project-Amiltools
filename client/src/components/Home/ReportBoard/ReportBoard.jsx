import React, { Component, Fragment } from 'react'
import axios from 'axios'
import config from '../../../config/config.json'
import marked from 'marked'
import {Link} from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { getLastReportActions } from '../../../actions/index'
import { bindActionCreators } from 'redux'

import './ReportBoard.css'

class ReportBoard extends Component {

    state = {
        err: ""
    }

    constructor() {
        super()
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/report/find/lastreport')
            .then((response) => this.props.getLastReportActions(response.data.response[0]))
            .catch((err) => {
                console.error(err)
                document.getElementById("alertReport").style.display = 'block'
            })
    }

    renderReportMarked = () => {
        if(this.props.lastReportReducer.content){
            const __html = marked(this.props.lastReportReducer.content.substring(0, 500))
            return __html
        }
    }

    convertDate(date){
        if(date){
            return date.substring(0, 10).split('-').reverse().join('-')
        }
     }

    render() {
        return (
            <Fragment>
                <hr />
                <section className="report">
                    <div className="titleReport">
                        <h2>Report</h2>
                    </div>
                    <div className="contentReport">
                        <div id="alertReport" className="alert alert-danger ade show" role="alert">
                            <strong>Error:</strong> There are no reports to display.
                        </div>

                        <div className="titleReportContent">
                            {this.props.lastReportReducer.title} <span className="dateReport">: {this.convertDate(this.props.lastReportReducer.create_at)}</span>
                        </div>
                        <div className="cardReportContent">
                            <div className="contentReport" dangerouslySetInnerHTML={{__html: this.renderReportMarked()}}></div>
                            <div><Link to="/report">Read More</Link>... </div>
                            <div>by <span className='author'>{this.props.lastReportReducer.author}</span></div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { lastReportReducer: state.lastReportReducer }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getLastReportActions: getLastReportActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBoard)