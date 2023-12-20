import styles from './styles.module.scss';
import React from 'react';
import { useSwiper } from 'swiper/react';
import SliderNext from '@/public/assets/svgs/sliderNext.svg';
import SliderNextMobile from '@/public/assets/svgs/sliderNextMobile.svg';
import SliderPrev from '@/public/assets/svgs/sliderPrev.svg';
import SliderPrevMobile from '@/public/assets/svgs/sliderPrevMobile.svg';

export default function SwiperButtons() {

    const swiper = useSwiper();
    
    return (
            <div className={styles.sliderButtons}>
                <button aria-label="see previoues image" className='apearMobile' onClick={() => swiper.slidePrev()}>
                    <SliderPrev />
                </button>
                <button aria-label="see previoues image" className='apearDesktop' onClick={() => swiper.slidePrev()}>
                    <SliderPrevMobile />
                </button>
                <button aria-label="see next image" className='apearMobile' onClick={() => swiper.slideNext()}>
                    <SliderNext />
                </button>
                <button aria-label="see next image" className='apearDesktop' onClick={() => swiper.slideNext()}>
                    <SliderNextMobile />
                </button>
            </div> 
    )
}