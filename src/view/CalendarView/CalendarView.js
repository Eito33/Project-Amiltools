import React, { Fragment } from 'react'

import './CalendarView.css';
import MenuLeft from '../../core/modules/MenuLeft/MenuLeft'

const CalendarView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
                    <div className="row">
                        <div className="col-lg-12">
                           <h2>Mois de Décembre</h2>
                                <p className="menuReportButton">
                                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">New RDV</button> 
                                </p>
                           <hr />
                        </div>
                    </div>
                    {
                        /* SEMAINE */
                    }
                    <div className="calendarAlign row">
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Lun</p>
                        </div>
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Mar</p>
                        </div>
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Mer</p>
                        </div>
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Jeu</p>
                        </div>
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Ven</p>
                        </div>
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Sam</p>
                        </div>
                        <div className="borderCaseSemaine col-lg-1">
                            <p>Dim</p>
                        </div>
                    </div>

                    {
                        /* JOUR 1 */
                    }

                    <div className="calendarAlign row">
                        <div className="borderCaseJour col-lg-1">
                            <p>1</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>2</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>3</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>4</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>5</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>6</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>7</p>
                        </div>
                    </div>

                    {
                        /* JOUR 2 */
                    }

                    <div className="calendarAlign row">
                        <div className="borderCaseJour col-lg-1">
                            <p>8</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>9</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>10</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>11</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>12</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>13</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>14</p>
                        </div>
                    </div>

                    {
                        /* JOUR 3 */
                    }

                    <div className="calendarAlign row">
                        <div className="borderCaseJour col-lg-1">
                            <p>15</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>16</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>17</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>18</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>19</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>20</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>21</p>
                        </div>
                    </div>

                    {
                        /* JOUR 4 */
                    }

                    <div className="calendarAlign row">
                        <div className="borderCaseJour col-lg-1">
                            <p>22</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>23</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>24</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>25</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>26</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>27</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>28</p>
                        </div>
                    </div>

                    {
                        /* JOUR 5 */
                    }

                    <div className="calendarAlign row">
                        <div className="borderCaseJour col-lg-1">
                            <p>29</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>30</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p>31</p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p></p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p></p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p></p>
                        </div>
                        <div className="borderCaseJour col-lg-1">
                            <p></p>
                        </div>
                    </div>

                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default CalendarView