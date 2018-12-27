import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../../../config/config.json'

import './CardBoard.css'

class CardBoard extends Component{

    state = {
        countReport: 0,
        countTask: 0,
        countBug: 0
    }

    componentDidMount(){
        //Count Report
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/report/count/all') 
        .then((response) => this.setState({countReport: response.data.response}))
        .catch((error) => this.setState({countReport: 0}))

        //Count Bug
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/task/count/all') 
        .then((response) => this.setState({countTask: response.data.response}))
        .catch((error) => this.setState({countTask: 0}))

        //Count Task
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/bugtracker/count/all') 
        .then((response) => this.setState({countBug: response.data.response}))
        .catch((error) => this.setState({countBug: 0}))
    }

    render(){
        return(
            <Fragment>
            <div className="row">
                    <div className="col-lg-4">
                        <div className="borderCardTop reportCardTop">
                            <p><i className="fas fa-newspaper"></i> <span>{this.state.countReport} Reports</span></p>
                        </div>
                        <div className="borderCardBot reportCardBot">
                            <p><Link to='/report/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="borderCardTop bugCardTop">
                            <p><i className="fas fa-bug"></i> <span>{this.state.countBug} Bugs</span></p>
                        </div>
                        <div className="borderCardBot bugCardBot">
                            <p><Link to='/bugtracker/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="borderCardTop taskCardTop">
                            <p><i className="fas fa-tasks"></i> <span>{this.state.countTask} Tasks</span></p>
                        </div>
                        <div className="borderCardBot taskCardBot">
                            <p><Link to='/task/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
                        </div>
                    </div>
                </div>
        </Fragment>
        )
    }
}

export default CardBoard;