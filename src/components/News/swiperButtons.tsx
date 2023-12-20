import styles from './styles.module.scss';
import React from 'react';
import { useSwiper } from 'swiper/react';
import SliderNext from '@/public/assets/svgs/sliderNextArrow.svg';
import SliderPrev from '@/public/assets/svgs/sliderPrevArrow.svg';


export default function SwiperButtons() {

    const swiper = useSwiper();
    
    return (
            <div className={styles.sliderButtons}>
                <button aria-label="see previoues image" onClick={() => swiper.slidePrev()}>
                    <SliderPrev />
                </button>
                <button aria-label="next previoues image" onClick={() => swiper.slideNext()}>
                    <SliderNext />
                </button>
            </div> 
    )
}