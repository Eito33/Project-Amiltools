import React, {Component, Fragment} from 'react'
import axios from 'axios'
import config from '../../../config/config.json'

//Redux
import { connect } from 'react-redux'
import { getLastReportActions } from '../../../actions/index'
import { bindActionCreators } from 'redux'

import './ReportBoard.css'

class ReportBoard extends Component{

    componentDidMount(){
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/report/find/lastreport') 
        .then((response) => this.props.getLastReportActions(response.data.response[0]))
        .catch((error) => console.log('NO REPORT'))
    }

    render(){
        return(
            <Fragment>
                <hr />
                <section className="report">
                        <div className="titleReport">
                            <h2>Report</h2>
                        </div>
                        <div className="contentReport">
                            <div className="titleReportContent">
                                {this.props.lastReportReducer.title} <span className="dateReport">: {this.props.lastReportReducer.create_at}</span>
                            </div>
                            <div className="cardReportContent">
                                <p>{this.props.lastReportReducer.content}</p>
                                <div>by <span className='author'>{this.props.lastReportReducer.author}</span></div>   
                            </div>
                        </div>
                    </section>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {lastReportReducer: state.lastReportReducer}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getLastReportActions:getLastReportActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBoard)