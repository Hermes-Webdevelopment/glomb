import Image from 'next/image';
import styles from './styles.module.scss';

import { ReactNode } from 'react';
import BlueButton from '../atons/blueButton';
import { getScreenSiteAndWidth } from '../../helpers/screenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

interface peopleSlider {
    title: ReactNode | string;
    subTitle: ReactNode | string ;
    carrouselImages: carrouselImages[];
    buttonLink: string;
    buttonText: ReactNode | string;
    whiteVersion?: boolean;
}

interface carrouselImages {
    imageUrl: string;
    imageTitle: string;
    imageAlt: string;
    imageSubTitle: string;
    text: string;
}[];

export default function CommentsSlider(props: peopleSlider) {

    const {title, subTitle, carrouselImages, buttonLink, buttonText, whiteVersion = false} = props

    const screenSize = getScreenSiteAndWidth()

  return (
    
    <section className={`${styles.peopleSliderSection} ${whiteVersion ? styles.whiteVersion : ''}`}>
        <div className={`container ${styles.peopleContainer}`}>

            <h2>
                {title}
            </h2>

            <p className={styles.subtitleParagraph}>
                {subTitle}
            </p>
        </div>
        <div
            className={`${styles.sliderContainer}`}
        >
        <Swiper
            spaceBetween={50}
            slidesPerView={screenSize.dynamicWidth <= 768 ? 1.5 : 1200 > screenSize.dynamicWidth && screenSize.dynamicWidth > 768 ? 3.5 : 4.5}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.swiperContainer}
        >
            {
                carrouselImages.map(image => {
                    return (
                        <SwiperSlide key={Math.random()} className={styles.slideContainer}>
                            <div className={styles.imgDiv}>
                                <Image 
                                    loading="lazy"
                                    height={420}
                                    width={320}
                                    quality={100}
                                    unoptimized={true}
                                    src={image.imageUrl}
                                    alt={image.imageTitle}
                                />
                            </div>
                            <div className={styles.descriptionDiv}>
                                <div>
                                    <h3>{image.imageTitle}</h3>
                                    <p>{image.imageSubTitle}</p>
                                    <p>{image.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div>
        {
            !whiteVersion &&
            <div className='apearMobile' style={{width: "100%", display:"flex", justifyContent:"center"}}>
                <BlueButton buttonLink={buttonLink} buttonText={buttonText} transparentMode={true}/>
            </div>
        }
    </section>
  );
}