import styles from './styles.module.scss';
import React from 'react';
import { useSwiper } from 'swiper/react';
import SliderNext from '@/public/assets/svgs/sliderNext.svg';
import SliderPrev from '@/public/assets/svgs/sliderPrev.svg';


export default function SwiperButtons() {

    const swiper = useSwiper();
    
    return (
            <div className={`${styles.sliderButtons} apearMobile`}>
                <button aria-label="see previoues image" onClick={() => swiper.slidePrev()}>
                    <SliderPrev />
                </button>
                {/* <button aria-label="see previoues image" className='apearDesktop' onClick={() => swiper.slidePrev()}>
                    <SliderPrevMobile />
                </button> */}
                <button aria-label="next previoues image" onClick={() => swiper.slideNext()}>
                    <SliderNext />
                </button>
                {/* <button aria-label="nexy previoues image" className='apearDesktop' onClick={() => swiper.slideNext()}>
                    <SliderNextMobile />
                </button> */}
            </div> 
    )
}