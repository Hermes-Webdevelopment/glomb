import styles from './styles.module.scss';
import Image from 'next/image'

import BlueCheck from '@/public/assets/svgs/blueCheck.svg';
import BlueButton from '../../atons/blueButton';
import { ReactNode } from 'react';
import WhiteButton from '../../atons/whiteButton';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';

interface staticBannerInterface {
    title: ReactNode | string; 
    subTitle: ReactNode | string; 
    buttonText: ReactNode | string; 
    buttonLink: string; 
    advantages?: string[]; 
    headerDesktop: string;
    headerMobile: string;
    headerDesktopDescription: string;
    headerMobileDescription: string;
}

export default function StaticBanner(props: staticBannerInterface) {

    const {title, subTitle, buttonText, buttonLink, advantages, headerDesktop, headerDesktopDescription, headerMobile, headerMobileDescription} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.staticbannerSection}>
            <div className={`${styles.bannerContainer}`}>
                <div className={styles.textBox}>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                    <div className={`apearDesktop`}>
                        <WhiteButton 
                            buttonLink={buttonLink}
                            buttonText={buttonText}
                        />
                    </div>
                    <div className={`apearMobile ${styles.width100}`}>
                        <BlueButton 
                            buttonLink={buttonLink}
                            buttonText={buttonText}
                            cleanMode={true}
                        />
                    </div>
                    <div className={styles.checkedContainer}>
                        {
                            advantages &&
                            advantages.map((advantage: string) => {
                                return <p key={advantage}><BlueCheck />{advantage}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.imageBox}>
                
                <Image
                    className={'apearMobile'}
                    height={706}
                    width={726}
                    src={headerDesktop}
                    alt={headerDesktopDescription}
                    quality={100}
                    loading={screenSize.dynamicWidth >= 992 ? 'eager' : 'lazy'}
                />

                <Image
                    className={'apearDesktop'}
                    height={679}
                    width={376}
                    src={headerMobile}
                    alt={headerMobileDescription}
                    quality={100}
                    unoptimized={true}
                    loading={screenSize.dynamicWidth >= 992 ? 'lazy' : 'eager'}
                />

            </div>
            <div className={`apearMobile ${styles.starsImage}`}>
                <Image 
                    height={138}
                    width={232}
                    src={'/assets/images/clients_stars.webp'}
                    alt={'Avaliação de 4.9 estrelas'}
                />
            </div>
        </section>
    )
}