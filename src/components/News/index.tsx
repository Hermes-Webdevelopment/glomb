import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';
import BlueButton from '../atons/blueButton';
import { getScreenSiteAndWidth } from '../../helpers/screenSize';

interface BlogSliderInterface {
    title: string | ReactNode,
    subText: string | ReactNode,
    news: NewsPosts[]
}

interface NewsPosts{
    postTitle: string,
    postText: string,
    actionBtn:string
}

export default function BlogSlider(props: BlogSliderInterface) {

    const {title, news} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.blogSliderSection}>
            <div className={`container ${styles.blogSliderContainer}`}>
                <h2>{title}</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={screenSize.dynamicWidth <= 768 ? 1 : 2}
                    loop
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    className={styles.swiperContainer}
                >
                    <SwiperButtons />
                    {
                        news.map(post => {
                            return (
                                <SwiperSlide style={{padding: '4px'}}>
                                    <div className={styles.postContainer}>
                                        <div>
                                            <div className={styles.postTitle}>
                                                <h3>
                                                    {post.postTitle}
                                                </h3>
                                            </div>
                                            <div className={styles.postText}>
                                                <span>
                                                    {post.postText}
                                                </span>
                                            </div>
                                        </div>
                                        <span>
                                            <u>{post.actionBtn}</u>
                                        </span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}