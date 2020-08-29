import React from 'react'
import css from './SecondSlide.module.css'
import image from './image/BG_1.png'

const SecondSlide = (props) => {
    return (
        <div className={css.main}>
            <div className={css.boxForImage}>
                <img className={css.image} alt='#' src={image}/>
            </div>
            <div className={css.text}>
                <div className={css.boxText}>
                    Основа терапии -
                    <br/>
                    патогенез СД2
                </div>
            </div>
        </div>
    )
}

export default SecondSlide