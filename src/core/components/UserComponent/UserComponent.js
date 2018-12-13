import React, { Component, Fragment } from 'react'

import UserView from '../../../view/UserView/UserView';

class UserComponent extends Component {

    state = {
        nom: 'Rimbault',
        prenom: 'Gabin',
        mail: 'rimbault33gabin@gmail.com',
        bio: 'Bienvenue a vous sur mon profil! Je suis Gabin Rimbault developpeur de cette application !',
        role: 'developper'
    }

    render() {
        return(
            <Fragment>
                <UserView 
                    nom={this.state.nom}
                    prenom={this.state.prenom}
                    mail={this.state.mail}
                    bio={this.state.bio}
                    role={this.state.role}
                />
            </Fragment>
        )
    }
}

export default UserComponent