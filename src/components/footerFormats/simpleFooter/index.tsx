import styles from './styles.module.scss';

import { ReactNode } from 'react';

import Glomb from '@/public/assets/images/svgs/glombfull_web.svg';
import GlombMobile from '@/public/assets/images/svgs/glombfull_mobile.svg';
import Instagram from '@/public/assets/images/svgs/instagram_white.svg';
import Facebook from '@/public/assets/images/svgs/facebook_white.svg';
import Youtube from '@/public/assets/images/svgs/youtube_white.svg';
import Whats from '@/public/assets/images/svgs/whats_white.svg';
import BlueButton from '../../atons/blueButton';

interface simpleFooterInterface {
    logo: string, 
    sloganTxt: ReactNode | string;
    subTxt: string,
    callToAction?: Boolean,
    callTitle?: string,
    callText?: string,
    callBtnLink?: string,
    callBtnText?: string
}

export default function SimpleFooter(props: simpleFooterInterface) {

    const { logo, sloganTxt, subTxt, callToAction = false, callTitle, callText, callBtnLink = '/', callBtnText } = props

    return (

        <section id='footerContainer' className={styles.footerSection}>
            {
                callToAction &&
                <div className={styles.extraAction}>
                <div className={`container ${styles.extraActiontxt}`}>
                    <h2>{callTitle}</h2>
                    <h3>{callText}</h3>
                    <BlueButton 
                        buttonLink={callBtnLink} 
                        buttonText={callBtnText}                    
                    />
                </div>

            </div>
            }
            <div className={`container ${styles.simpleFooterContainer}`}>
                <div className={styles.firstLine}>
                    {
                        logo === 'glomb' ?
                        <>
                            <Glomb className='apearMobile' />
                            <GlombMobile className='apearDesktop' />
                        </>
                        :
                        ''
                    }
                    <p className={`apearMobile ${styles.sloganText}`}>{sloganTxt}</p>
                </div>
                <div className={styles.secondLine}>
                    <p>{subTxt}</p>
                    <div className='apearMobile'>
                        <a href="https://www.instagram.com/glombadvogados/">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/glombadvogados">
                            <Facebook />
                        </a>
                        <a href="">
                            <Youtube />
                        </a>
                        <a href="https://wa.me/554132239132">
                            <Whats />
                        </a>
                    </div>
                </div>
                <div className={`apearDesktop ${styles.thirdline}`}>
                    <div>
                        <a href="https://www.instagram.com/glombadvogados/">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/glombadvogados">
                            <Facebook />
                        </a>
                        <a href="">
                            <Youtube />
                        </a>
                        <a href="https://wa.me/554132239132">
                            <Whats />
                        </a>
                    </div>
                </div>
                <div className={`apearDesktop ${styles.fourthline}`}>
                    <p className={`${styles.sloganText}`}>{sloganTxt}</p>
                </div>
                <div className={styles.bottonLine}>
                    <div>
                        <p>
                            Política de privacidade
                        </p>
                        <p>
                            Glomb 2023. Todos direitos reservados.
                        </p>
                    </div>
                    <p>
                        Desenvolvido por <strong>HERMES T.I</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}