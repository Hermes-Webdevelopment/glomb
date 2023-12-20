import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';
import BlueButton from '../../atons/blueButton';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';

interface BlogSliderInterface {
    title: string | ReactNode,
    btnText: string,
    btnLink: string,
    blogPosts: BlogPosts[]
}

interface BlogPosts{
    img: string,
    imgaAlt: string,
    postTitle: string,
    postText: string,
    actionBtn:string
}

export default function News(props: BlogSliderInterface) {

    const {title, btnText, btnLink, blogPosts} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.blogSliderSection}>
            <div className={`container ${styles.blogSliderContainer}`}>
                <h2>{title}</h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={screenSize.dynamicWidth <= 768 ? 1 : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? 2 : 3}
                    loop
                    autoplay={true}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    className={styles.swiperContainer}
                >
                    <SwiperButtons />
                    {
                        blogPosts.map(post => {
                            return (
                                <SwiperSlide style={{padding: '4px'}}>
                                    <div className={styles.postContainer}>
                                        <div>
                                            <Image
                                                height={250}
                                                width={392}
                                                src={post.img}
                                                alt={post.imgaAlt}
                                            />
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
                <BlueButton 
                    buttonLink={btnLink}
                    buttonText={btnText}
                    transparentMode={true}
                />
            </div>
        </section>
    )
}