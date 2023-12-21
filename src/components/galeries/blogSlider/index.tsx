import { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';
import BlueButton from '../../atons/blueButton';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';
import Link from 'next/link';

interface BlogSliderInterface {
    title: string | ReactNode,
    btnText: string,
    btnLink: string,
    blogWPApi: string,
    blogPosts: BlogPosts[]
}

interface BlogPosts{
    img: string,
    imgaAlt: string,
    postTitle: string,
    postText: string,
    actionBtn:string
}

export default function BlogSlider(props: BlogSliderInterface) {

    const {title, btnText, btnLink, blogPosts, blogWPApi} = props

    const screenSize = getScreenSiteAndWidth()

    const [data, setData] = useState<any[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(blogWPApi)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
              setLoading(false);
          });
          
    }, [])

    console.log(data)
    console.log(loading)


    return (
        <>
            {
                !loading && data !== undefined ?
                <section className={styles.blogSliderSection}>
                    <div className={`container ${styles.blogSliderContainer}`}>
                        <h2>{title}</h2>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={screenSize.dynamicWidth <= 768 ? 1 : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? 2 : 3}
                            loop
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                            className={styles.swiperContainer}
                        >
                            <SwiperButtons />
                            {
                                data.slice(0, 6).map(post => {
                                    return (
                                        <SwiperSlide style={{padding: '4px'}}>
                                            <div className={styles.postContainer}>
                                                <div>
                                                    <img
                                                        src={post.yoast_head_json.og_image[0].url}
                                                        alt={post.yoast_head_json.og_title}
                                                    />
                                                    <div className={styles.postTitle}>
                                                        <h3>
                                                            {post.yoast_head_json.title}
                                                        </h3>
                                                    </div>
                                                    <div className={styles.postText}>
                                                        <span>
                                                            {post.yoast_head_json.description}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Link href={post.link} className={styles.saibaMais}>
                                                    <u>Saiba mais</u>
                                                </Link>
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
                :
                <section className={styles.blogSliderSection}>
                    <div className={`container ${styles.blogSliderContainer}`}>
                        <h2>{title}</h2>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={screenSize.dynamicWidth <= 768 ? 1 : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? 2 : 3}
                            loop
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                            className={styles.swiperContainer}
                        >
                            <SwiperButtons />
                            {
                                (screenSize.dynamicWidth <= 768 ? [1] : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? [1,2] : [1,2,3]).map(number => {
                                    return (
                                        <SwiperSlide style={{padding: '4px'}}>
                                            <div className={`${styles.postContainer} ${styles.postContainerSkeleton}`}>
                                                <div className={styles.ldsDualRing}></div>
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
            }
        </>
    )
}