import React, { Fragment } from 'react'

import './NotFound.css';
import MenuLeft from '../MenuLeft/MenuLeft'

const NotFound = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
                    <h2>NotFound</h2>
                    <hr />
                
                    <p>il n'y a rien ici !</p>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound