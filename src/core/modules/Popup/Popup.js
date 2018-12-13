import React, { Component, Fragment } from 'react'


class Popup extends Component {

    state = {
        name: ''
    }

    componentDidMount(){
        const {nom} = this.props
        this.setState({name: nom})
    }

    render() {
        return(
            <Fragment>
                Voici mon nom : {this.state.name} 
            </Fragment>
        )
    }
}

export default Popup