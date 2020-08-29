import React from 'react'
import css from './ThirdSlide.module.css'
import image1 from './image/background.png'
import circle from './image/circle.png'
import arrow1 from './image/arrow1.png'
import arrow2 from './image/arrow2.png'
import arrow3 from './image/arrow3.png'
import arrow4 from './image/arrow4.png'
import arrow5 from './image/arrow5.png'
import muscle from './image/muscle.png'
import pecen from './image/pecen\'.png'
import ice1 from './image/ice_1.png'
import ice2 from './image/ice_2.png'
import ice3 from './image/ice_3.png'


const ThirdSlide = (props) => {


    return (
        <div className={css.main}>
            <div className={css.firstSlide}>
                <img className={css.image1} src={image1} alt='#'/>
                <img className={css.ice1} src={ice1} alt='#'/>
                <div className={css.textHeading}>Звенья патогенеза СД2</div>
                <div className={css.textBottom}>Гипергликемия</div>
                <img className={css.circle} src={circle} alt='#'/>
                <img className={css.circle1} src={circle} alt='#'/>
                <img className={css.circle2} src={circle} alt='#'/>
                <div>
                    <img className={css.arrow1} alt='#' src={arrow1}/>
                    <img className={css.arrow2} alt='#' src={arrow2}/>
                    <img className={css.arrow3} alt='#' src={arrow3}/>
                    <img className={css.arrow4} alt='#' src={arrow4}/>
                    <img className={css.arrow5} alt='#' src={arrow5}/>
                </div>
                <div className={css.text1}>
                    <span className={css.one}>1</span>
                    <div className={css.boxText1}>β-клетки</div>
                </div>
                <div className={css.text2}>
                    <span className={css.one}>2</span>
                    <div className={css.boxText1}>Мышцы</div>
                </div>
                <div className={css.text3}>
                    <span className={css.one}>3</span>
                    <div className={css.boxText1}>Печень</div>
                </div>
                <img className={css.muscle} alt='#' src={muscle}/>
                <img className={css.pecen} alt='#' src={pecen}/>
                <div className={css.b}>β</div>
            </div>
          <div className={css.firstSlide}>
                <img className={css.image1} src={image1} alt='#'/>
                <img className={css.ice1} src={ice2} alt='#'/>
            </div>
            <div className={css.firstSlide}>
                <img className={css.image1} src={image1} alt='#'/>
                <img className={css.ice1} src={ice3} alt='#'/>
            </div>
        </div>
    )
}

export default ThirdSlide