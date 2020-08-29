import React from 'react'
import css from './firstSlide.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundMountains from './image/backgroundMountains.png'
import {Container} from 'react-bootstrap';
import Ellipse1 from './image/bottomEllipse1.png'
import Ellipse2 from './image/bottomEllipse2.png'
import arrow from './image/bottomArrow.png'


const firstSlide = () => {

    return (
        <div className={css.main}>
            <Container fluid>
                        <div className={css.box}>
                            <div>
                                <img className={css.imageBackground} alt='#' src={backgroundMountains}/>
                            </div>
                            <div className={css.test}>
                                <div className={css.mainText}>
                                    Всегда ли цели терапии СД2
                                    <br/>
                                    на поверхности
                                </div>
                                <div className={css.circle}></div>
                                <div className={css.circle1}></div>
                                <div className={css.circle2}></div>
                                <div className={css.circle3}></div>
                                <div className={css.circle4}></div>
                                <div className={css.circle5}></div>
                                <div className={css.circle6}></div>
                                <div className={css.circle7}></div>
                                <div className={css.circle8}></div>
                                <div className={css.circle9}></div>
                                <div className={css.circle10}></div>
                                <div className={css.circle11}></div>
                                <div className={css.fourthText}>СС риски</div>
                                <div className={css.thirdText}>Осложнения СД</div>
                                <div className={css.secondText}>Гипогликемия</div>
                                <div className={css.firstText}>Цель по Hb1Ac</div>
                                <div className={css.imageBot1}><img className={css.ellipse1} alt='#' src={Ellipse1}/></div>
                                <div className={css.imageBot1}><img className={css.ellipse2} alt='#' src={Ellipse2}/></div>
                                <div className={css.imageBot1}>
                                    <div className={css.textArrow}>Листайте вниз</div>
                                    <img id={arrow} className={css.arrow} alt='#' src={arrow}/>
                                </div>
                            </div>
                        </div>
            </Container>
        </div>
    )
}

export default firstSlide