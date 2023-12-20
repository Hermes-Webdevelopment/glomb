import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import BlueButton from '../../atons/blueButton';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';
import AnimatedText from '../../atons/wordAnimation';

interface WordsBannerInterface {
    title: string | ReactNode,
    text: string | ReactNode,
    img: string,
    imgMobile: string,
    imgAlt: string,
    buttonText: string,
    buttonLink: string
}

export default function WordsBanner(props: WordsBannerInterface) {

    const {title, text, img, imgMobile, imgAlt, buttonText, buttonLink} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section>
            <div className={`${styles.wordsContainer}`}>
                <div className={styles.imageContainer}>
                
                    <Image
                        className={'apearMobile'}
                        height={706}
                        width={726}
                        src={img}
                        alt={imgAlt}
                        quality={100}
                        unoptimized={true}
                        loading={screenSize.dynamicWidth >= 992 ? 'eager' : 'lazy'}
                    />

                    <Image
                        className={'apearDesktop'}
                        height={300}
                        width={375}
                        src={imgMobile}
                        alt={imgAlt}
                        quality={100}
                        unoptimized={true}
                        loading={screenSize.dynamicWidth >= 992 ? 'lazy' : 'eager'}
                    />
                </div>
                <article className={`container ${styles.textContainer}`}>
                    <h1>{title}</h1>
                    <div className={styles.animationContainer}>
                        <AnimatedText words={['missão', 'vocação', 'meta', 'especialidade']} />
                    </div>
                    {text}
                    <BlueButton 
                        buttonLink={buttonLink} 
                        buttonText={buttonText}            
                    />
                </article>
            </div>
        </section>
    )
}