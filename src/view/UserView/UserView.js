import React, { Fragment } from 'react'

import './UserView.css';
import MenuLeft from '../../core/modules/MenuLeft/MenuLeft'

<<<<<<< HEAD
const UserView = ({nom, prenom, mail, bio, role}) => {
=======
const UserView = () => {
>>>>>>> master

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
<<<<<<< HEAD
                    <h2>User Profile</h2> <p><button className="btn btn-outline-info my-2 my-sm-0" type="submit">Modifier</button></p>
                    <span className="userBadge badge badge-info">Developpeur Web</span>
                    <hr className="hrMargin" />
                    <div className="row">
                        <div className="cadreInformationsPrincipal col-lg-12">
                            <div className="avatar">
                                <img src="http://image.noelshack.com/fichiers/2018/50/4/1544699046-avatar-commun.png" alt=""/>
                            </div>
                            <div className="informationsPrincipal">
                                <p><span>{prenom} {nom}</span></p>
                            </div>
                            <div className="informationsConnexion">
                                <p>Vous etes connecter depuis X minutes</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="borderBio col-lg-12">
                            <div className="titleBio">
                                <p>Biographie</p>
                            </div>
                            <div className="contentBio">
                                {bio}
                            </div>
                        </div>
                    </div>
=======
                    <h2>Bienvenue User</h2>
                    <hr />
                
                    <p>Voici la vue user</p>
>>>>>>> master
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default UserView