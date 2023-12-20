import styles from './styles.module.scss';
import React from 'react';
import { useSwiper } from 'swiper/react';
import SliderNextDesk from '@/public/assets/svgs/sliderNextArrowDesk.svg';
import SliderPrevDesk from '@/public/assets/svgs/sliderPrevArrowDesk.svg';
import SliderNextMobile from '@/public/assets/svgs/sliderNextArrowMobile.svg';
import SliderPrevMobile from '@/public/assets/svgs/sliderPrevArrowMobile.svg';


export default function SwiperButtons() {

    const swiper = useSwiper();
    
    return (
            <div className={`${styles.sliderButtons}`}>
                <button aria-label="see previoues image" className='apearMobile' onClick={() => swiper.slidePrev()}>
                    <SliderPrevDesk />
                </button>
                <button aria-label="see previoues image" className='apearDesktop' onClick={() => swiper.slidePrev()}>
                    <SliderPrevMobile />
                </button>
                <button aria-label="next previoues image" className='apearMobile' onClick={() => swiper.slideNext()}>
                    <SliderNextDesk />
                </button>
                <button aria-label="nexy previoues image" className='apearDesktop' onClick={() => swiper.slideNext()}>
                    <SliderNextMobile />
                </button>
            </div> 
    )
}