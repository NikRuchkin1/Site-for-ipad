import React, {Component} from 'react'
import css from './Slider.module.css'
import image1 from '../thirdSlide/image/background.png'
import circle from '../thirdSlide/image/circle.png'
import arrow1 from '../thirdSlide/image/arrow1.png'
import arrow2 from '../thirdSlide/image/arrow2.png'
import arrow3 from '../thirdSlide/image/arrow3.png'
import arrow4 from '../thirdSlide/image/arrow4.png'
import arrow5 from '../thirdSlide/image/arrow5.png'
import muscle from '../thirdSlide/image/muscle.png'
import pecen from '../thirdSlide/image/pecen\'.png'
import ice1 from '../thirdSlide/image/ice_1.png'
import ice2 from '../thirdSlide/image/ice_2.png'
import ice3 from '../thirdSlide/image/ice_3.png'
import toggle from '../thirdSlide/image/toggle.png'

class Slider extends Component {

    constructor() {
        super();

        this.state= {
            slider:['firstSlider','secondSlide', 'thirdSlide'],
            currentImageIndex: 0,
            isCycleMode: false
        };

        this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    nextSlideHandler(e) {
        let firstSlide = document.getElementById("1");
        let secondSlide = document.getElementById("2");
        let thirdSlide = document.getElementById("3");
        let newIndex = this.state.currentImageIndex;
        if (this.currentImageIndex === 0) {
            firstSlide.style.display = "block";
            secondSlide.style.display = "none";
            thirdSlide.style.display = "none";
        }
        if (newIndex === 1) {
            firstSlide.style.display = "none";
            secondSlide.style.display = "block";
            thirdSlide.style.display = "none";
        }
        if (newIndex === 2) {
            firstSlide.style.display = "none";
            secondSlide.style.display = "none";
            thirdSlide.style.display = "block";
        }
        if (e.currentTarget.dataset.direction === 'next') {
            newIndex = this.state.currentImageIndex + 1;
        } else {
            newIndex = this.state.currentImageIndex - 1;
        }
        this.setState({currentImageIndex: newIndex})
    };

    render(){
        return (
            <div className={css.Slider}>
                <div>
                <div id='1' className={css.firstSlide}>
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
                <div id='2' className={css.secondSlide}>
                        <img className={css.image1} src={image1} alt='#'/>
                        <img className={css.ice1} src={ice2} alt='#'/>
                    </div>
                <div id='3' className={css.thirdSlide}>
                        <img className={css.image1} src={image1} alt='#'/>
                        <img className={css.ice1} src={ice3} alt='#'/>
                </div>
                </div>

                <div className={css.toggleBox}>
                    
                    <div className={css.swipe}></div>
                </div>
            </div>
        )
    }
};
    export default Slider;