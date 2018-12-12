import React, { Fragment } from 'react'

import './UserView.css';
import MenuLeft from '../../core/modules/MenuLeft/MenuLeft'

const UserView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
                    <h2>Bienvenue User</h2>
                    <hr />
                
                    <p>Voici la vue user</p>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default UserView