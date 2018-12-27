import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { isAuthActions } from '../actions/index'
import { bindActionCreators } from 'redux'


export default function(ChildComponent){

    class RequireisAuth extends Component{

        render(){

            if (!this.props.isAuth) {
                return <Redirect push to='/connexion' />
              }

            return <ChildComponent />
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(RequireisAuth)
}

const mapStateToProps = (state) => {
    return {isAuth: state.isAuthReducer}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({isAuthActions:isAuthActions}, dispatch)
}
