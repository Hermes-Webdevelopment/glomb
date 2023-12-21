import styles from './styles.module.scss';

import { ReactNode } from 'react';
import Star from '@/public/assets/svgs/star.svg';
import { getScreenSiteAndWidth } from '../../helpers/screenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

interface ClientsCommentsSliderInterface {
    clientsComentCard: CardInterface[],
    title: string,
    subTitle: string
}

interface CardInterface {
    title: string,
    text:string | ReactNode,
    starNumber:number,
    clientName:string | ReactNode,
    firstLetter: string
}

export default function ClientsCommentsSlider(props: ClientsCommentsSliderInterface) {

    const { clientsComentCard, title, subTitle } = props

    const screenSize = getScreenSiteAndWidth()

  return (
    
    <section className={`${styles.peopleSliderSection}`}>
        <div className={`container ${styles.peopleContainer}`}>

            <h2>
                {title}
            </h2>
            <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <h3>
                {subTitle}
            </h3>
        </div>
        <Swiper
            spaceBetween={screenSize.dynamicWidth <= 768 ? 10 : 50}
            slidesPerView={screenSize.dynamicWidth <= 768 ? 1.1 : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? 2.5 : 3.5}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className={styles.sliderContainer}
        >
            {
                clientsComentCard.map((card: CardInterface) => {
                    return (
                        <SwiperSlide key={Math.random()} className={styles.slidesDiv}>
                            <div key={Math.random()} className={styles.slideContainer}>
                                <div>
                                    <p className={styles.text}>{card.text}</p>
                                </div>
                                <div className={styles.descriptionDiv}>
                                    <p className={styles.letterBox}>{card.firstLetter}</p>
                                    <p>{card.clientName}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  );
}