import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';

interface testSliderInterface {
    title: string | ReactNode,
    subText: string | ReactNode,
    textArray: TextArray[]
}

interface TextArray {
    text: string | ReactNode,
    hasLogos: boolean
}

export default function TextSlider(props: testSliderInterface) {

    const {title, subText, textArray} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <>
        <section>
            <div className={`container ${styles.textSliderContainer}`}>
                <h2>{title}</h2>
                <h3>{subText}</h3>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={screenSize.dynamicWidth <= 768 ? 1 : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? 2 : 3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    className={styles.swiperContainer}
                >
                    <SwiperButtons />
                    {
                        textArray.map(text => {
                            return (
                                <SwiperSlide style={{padding: '4px'}}>
                                    <div className={styles.postContainer}>
                                        <p>{text.text}</p>
                                    </div>
                                    {
                                        text.hasLogos &&
                                        <div className={styles.logosContainer}>
                                            <Image 
                                                src={'/assets/images/home/pacto-global.webp'} 
                                                alt={'pactop global logo'}             
                                                width={170}
                                                height={60}                                                 
                                            />
                                            <Image 
                                                src={'/assets/images/home/hospital-pequeno-principe.webp'} 
                                                alt={'Hospital pequeno principe logo'}      
                                                width={64}
                                                height={64}                                          
                                            />
                                        </div>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
        </>
    )
}