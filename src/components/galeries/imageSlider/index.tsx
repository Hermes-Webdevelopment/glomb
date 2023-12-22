import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';

interface ImageSliderInterface {
    title: string | ReactNode,
    text: string | ReactNode,
    images: {
        img: string,
        altImg:string
    }[],
}

export default function ImageSlider(props: ImageSliderInterface) {

    const {title, text, images} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.imagesliderSection}>
            <div className={`${styles.wordsContainer}`}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    className={styles.swiperContainer}
                >
                    <SwiperButtons />
                    {
                        images.map(singleImage => {
                            return (
                                <SwiperSlide>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            height={screenSize.dynamicWidth >= 992 ? 706 : 300}
                                            width={screenSize.dynamicWidth >= 992 ? 726 : 375}
                                            src={singleImage.img}
                                            alt={singleImage.altImg}
                                            quality={100}
                                            loading={screenSize.dynamicWidth >= 992 ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <article className={`container ${styles.textContainer}`}>
                    <h2>{title}</h2>
                    {text}
                </article>
            </div>
        </section>
    )
}