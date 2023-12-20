import styles from './styles.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactNode } from 'react';
import SwiperButtons from './swiperButtons';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';

interface imageGalerySliderInterface {
    title: ReactNode | string;
    subTitle: string[] ;
    carrouselImages: {
        imageUrl: string;
        imageDescription: string;
    }[];
    initialSlideNumber: number;
    cleanCode?: boolean;
}

interface imageInterface {
        imageUrl: string;
        imageDescription: string;
    }[]

export default function ImageGalerySlider(props: imageGalerySliderInterface) {

    const {title, subTitle, carrouselImages, initialSlideNumber, cleanCode = false} = props

    const screenSize = getScreenSiteAndWidth()
    
    return (
        <section className={`${styles.imageGalerySliderSection} ${cleanCode && styles.addMarginOnClean}`}>
            <div className={` ${styles.sliderContainer}`}>
                <h2>{title}</h2>
                <div className={styles.subText}>
                    {
                        subTitle.map((eachTitle: ReactNode | string) => {
                            return <h3 key={Math.random()}>{eachTitle}</h3>
                        })
                    }
                </div>
                <div className={styles.swiperContainerMobile}>

                    <Swiper
                        slidesPerView={screenSize.dynamicWidth >= 768 ? 5 : 1} 
                        className="mySwiper"
                        centeredSlides={true}
                        loop={screenSize.dynamicWidth <= 768}
                        spaceBetween={screenSize.dynamicWidth >= 768 ? 30 : 10}
                        initialSlide={initialSlideNumber}
                        cssMode={screenSize.dynamicWidth >= 769}
                        navigation={screenSize.dynamicWidth <= 768}
                        pagination={screenSize.dynamicWidth <= 768}
                        keyboard={screenSize.dynamicWidth <= 768}
                        modules={[Navigation, Pagination, Keyboard]}
                    >
                        <SwiperButtons />
                        
                        {
                            carrouselImages.map((image: imageInterface) => {
                                return (
                                <SwiperSlide key={image.imageUrl} className={`${styles.changeActiveSlider} ${styles.nextOrPrevSlider}`}>
                                    <Image 
                                        quality={100}
                                        loading="lazy"
                                        src={image.imageUrl}
                                        alt={image.imageDescription}
                                        width={478}
                                        height={503}
                                    />
                                </SwiperSlide>
                                )
                            })
                        }
                        
                    </Swiper>
                </div>
            </div>
        </section>
    )
}