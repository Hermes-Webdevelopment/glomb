import styles from './styles.module.scss';

import BlueButton from '../atons/blueButton';
import Image from 'next/image';
import { ReactNode } from 'react';
import WhiteButton from '../atons/whiteButton';
import { getScreenSiteAndWidth } from '../../helpers/screenSize';

interface insideTopicsInterface {
    title: ReactNode | string, 
    text: ReactNode, 
    buttonText: string | ReactNode, 
    buttonLink: string, 
    image: string, 
    imageDescription: string,
    listText?: string[] | ReactNode[], 
    grayBoxText?: ReactNode | string, 
    invertImagePosition?: boolean,
    cleanMode?: boolean,
    cleanModeText?: string,
    imageClean?: string,
    getCircle?: [boolean, number]
}

export default function InsideTopics(props: insideTopicsInterface) {

    const {title, text, buttonText, buttonLink, listText, grayBoxText, image, imageDescription, invertImagePosition = false, cleanMode = false, cleanModeText, imageClean, getCircle = [false, 0]} = props
    
    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={`${styles.insideContainer} ${cleanMode && styles.containerClean}`}>
            <div className={`container ${styles.insideTopicsMainBox} ${invertImagePosition ? styles.invertImagePosition : '' }`}>
                <div className={`${styles.imageContainer} ${cleanMode && styles.imageContainerClean}`}>
                    {
                        screenSize.dynamicWidth >= 992 && cleanMode && imageClean ?
                            <Image 
                                width={ 323 }
                                height={ 500 }
                                src={imageClean} 
                                alt={imageDescription} 
                                loading="lazy"
                            />
                            :
                            <Image 
                                loading="lazy"
                                width={ 327 }
                                height={ 219 }
                                src={image} 
                                alt={imageDescription} 
                            />
                    }
                </div>
                <div className={`${styles.textBoxContainer} ${cleanMode && styles.textBoxContainerClean}`}>
                    <h2>{title}</h2>
                    <div>{text}</div>
                    {
                        listText &&
                            <ul className={`${listText.length > 7 && styles.divideSection}`}>
                                {
                                    listText.map((text: string | ReactNode) => {
                                        return <li key={Math.random()}><p className={styles.removeMarginBotton}>{text}</p></li>
                                    })
                                }
                            </ul>
                    }
                    {
                        grayBoxText &&
                        <div className={styles.grayBox}>
                            <p>{grayBoxText}</p>
                        </div>
                    }

                    {
                        cleanMode && screenSize.dynamicWidth <= 992?
                            <WhiteButton buttonLink={buttonLink} buttonText={buttonText} blueVariable={true}/>
                        :
                            <BlueButton buttonLink={buttonLink} buttonText={buttonText} cleanMode={cleanMode}/>
                    }
                </div>
            </div>
                {
                    cleanModeText &&
                    <div className={`container ${styles.cleanModeExtraText}`}>
                        <p>{cleanModeText}</p>
                    </div>
                }
                {
                    getCircle[0] &&
                    <div className={` ${getCircle[1] === 3 ? styles.circleEffect_3 : ''}  ${getCircle[1] === 2 ? styles.circleEffect_2 : ''}`}></div>
                }
        </section>
    )
}