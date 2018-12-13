import React, { Fragment } from 'react'

import './ReportBoard.css'

const ReportBoard = () => {

    return(
        <Fragment>
            <hr />
            <section className="report">
                    <div className="titleReport">
                        <h2>Report</h2>
                    </div>
                    <div className="contentReport">
                        <div className="titleReportContent">
                            Report N°23 <span className="dateReport">: 12/12/2018</span>
                        </div>
                         <div className="cardReportContent">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis tristique velit vitae iaculis. Nulla quis posuere sapien, id rhoncus sapien. Maecenas euismod lectus a consequat luctus. Donec tincidunt ex sit amet tristique efficitur. Pellentesque hendrerit imperdiet mi, ut aliquam quam lobortis eu. Integer nec lectus sit amet tellus porttitor faucibus. Nam mattis vestibulum lacus ut elementum. Etiam vitae interdum tortor, sit amet consectetur ipsum. Nam metus diam, porttitor eu tellus id, consectetur sollicitudin quam. Fusce lobortis arcu ac dolor cursus tincidunt. Proin sollicitudin dolor quis lorem pharetra vulputate.</p>
                             <br />
                                 <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Donec malesuada ipsum vitae lectus accumsan lacinia.</li>
                                    <li>Nulla at leo vel magna rhoncus posuere et eu ante.</li>
                                    <li>Sed semper neque et enim condimentum, sed ultricies dui vestibulum.</li>
                                    <li> Cras elementum nunc vel tempor mollis.</li>
                                </ul>
                            <p>In pharetra est id orci maximus, id mollis ipsum accumsan. Proin ut pulvinar nisi. In non pharetra elit. Donec faucibus dapibus hendrerit. Nulla ipsum nunc, tempus eget tortor vel, laoreet sodales ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tempor lacus diam, nec ultrices velit eleifend non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla faucibus molestie purus. Fusce malesuada nec tellus feugiat varius. Aenean sed tincidunt dui, id consequat eros. Pellentesque eu turpis nec lectus pretium pellentesque non id dolor. Praesent orci risus, luctus ac neque id, varius dignissim mauris.<br /> Vivamus ut libero vel enim malesuada facilisis. Maecenas odio odio, dignissim eget purus ut, accumsan aliquet augue.</p>
                            <p><br /><a href="lienachanger.html">Read More ...</a></p>
                         </div>
                    </div>
                </section>
        </Fragment>
    )
}

export default ReportBoard