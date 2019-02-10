import React, {Component, Fragment} from 'react'
import config from '../config/config.json'
import axios from 'axios'

//Redux
import { connect } from 'react-redux'

import '../styles/Footer.css'

class Footer extends Component{

    state = {
        rumbleAstuce: {},
        displayAstuce: ''
    }

    componentDidMount(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
                'astuce/all')
        .then((response) => {
            this.setState({rumbleAstuce: response.data.response})
            this.initAstuce()
            setInterval(() => {
                const nbCitation = this.randomCitation()
                this.setState({displayAstuce: this.state.rumbleAstuce[nbCitation].astuce})
            }, 600000)
        })
    }

    randomCitation = () => {
        return Math.floor(Math.random() * Math.floor(this.state.rumbleAstuce.length))
    }

    initAstuce = () => {
        const nbCitation = this.randomCitation()
        this.setState({displayAstuce: this.state.rumbleAstuce[nbCitation].astuce})
    }


    render(){
        return(
            <Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="footerContent">
                            <div className="copyright">
                                <span className="text-copyright">Amiltool's © 2019</span>
                            </div>
                            <div className="astuce">
                                <span className="text-astuce"><span className="QUOTE"><i className="fas fa-quote-left"></i></span>{this.state.displayAstuce}<span className="QUOTE"><i className="fas fa-quote-right"></i></span></span>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}

export default connect(mapStateToProps)(Footer)