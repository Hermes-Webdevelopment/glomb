import styles from './styles.module.scss';
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Star from '@/public/assets/svgs/star.svg';
import Image from 'next/image';

import SwiperButtons from './swiperButtons';

interface imageGalerySliderInterface {
    sectionTitle: string | ReactNode,
    clientCardsTitle: string,
    imageUrl: string,
    imageDescription: string,
    cleanLayout?: boolean,
    clientsComentCard: {
        title: string;
        text: string;
        starNumber: number;
        clientName: string;
    }[];
}

export default function PeopleComents(props: imageGalerySliderInterface) {

    const {sectionTitle, clientsComentCard, imageUrl, imageDescription, clientCardsTitle, cleanLayout = false} = props

    const starscounter = (stars: number) => {

        const starsSvg = [];
        for (let i = 0; i < stars ; i++) {
            starsSvg.push(<Star key={Math.random()} />);
        }
    
        return starsSvg
    }
    
    return (
            <section className={`${styles.peopleComentsSection} ${cleanLayout ? styles.cleanPeopleComents : ''}`}>
                <div className={`container ${styles.PeopleComentsContainer}`}>
                    <h2>{sectionTitle}</h2>
                    <div>
                        <div className={styles.imageContainer}>
                            <Image 
                                loading="lazy"
                                src={imageUrl}
                                alt={imageDescription}
                                width={404}
                                height={445}
                            />
                        </div>
                        <div className={styles.sliderComentsContainer}>
                            <h2>{clientCardsTitle}</h2>
                            <Swiper
                                slidesPerView={1} 
                                className="mySwiper"
                                centeredSlides={true}
                                spaceBetween={30}
                            >
                                <SwiperButtons />
                                
                                {
                                    clientsComentCard.map((coment) => {
                                        return (
                                            <SwiperSlide key={coment.title}>
                                                <div className={styles.comentBox}>
                                                    {
                                                        !cleanLayout &&
                                                        <h3>{coment.title}</h3>
                                                    }
                                                    <div>
                                                        {
                                                            starscounter(coment.starNumber).map((star) => {
                                                                return star
                                                            })
                                                        }
                                                    </div>
                                                    <p>{coment.text}</p>
                                                    <p className={styles.personName}>{coment.clientName}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </section>
    )
}