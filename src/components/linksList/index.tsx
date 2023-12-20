import SocialMediaLink from '../atons/socialMediaLink';
import styles from './styles.module.scss';
import Image from 'next/image'

import InstagramIcon from '@/public/assets/images/links/svgs/instagramdesk.svg';
import InstagramIconMobile from '@/public/assets/images/links/svgs/instagrammobile.svg';
import FacebookIcon from '@/public/assets/images/links/svgs/facebookdesk.svg';
import FacebookMobile from '@/public/assets/images/links/svgs/facebookmobile.svg';
import YoutubeIcon from '@/public/assets/images/links/svgs/youtubedesk.svg';
import YoutubeMobile from '@/public/assets/images/links/svgs/youtubemobile.svg';
import Logo from '@/public/assets/images/links/svgs/logo.svg';
import { getScreenSiteAndWidth } from '../../helpers/screenSize';
import Link from 'next/link';

interface linksListInterface {
    imageTop: string; 
    altImageTop: string; 
    imageBottom: string; 
    altImageBottom: string; 
    linkArray: {
        imageButton:string
        imageButtonAlt:string
        buttonTextTitle:string
        buttonText:string
        buttonLink:string
    }[]
    socialMediaArray: {
        icon: string;
        link: string;
    }[]
}

export default function LinksList(props: linksListInterface) {

    const { socialMediaArray, linkArray, imageTop, altImageTop, imageBottom, altImageBottom } = props
    
    const screenSize = getScreenSiteAndWidth()

    function brinRightIcon(icon: string) {
        
        if( icon === 'instagram') {
            if(screenSize.dynamicWidth >= 769) {
                return <InstagramIcon />
            }
            return <InstagramIconMobile />
        } else if( icon === 'facebook') {
            if(screenSize.dynamicWidth >= 769) {
                return <FacebookIcon />
            }
            return <FacebookMobile />
        } else if( icon === 'youtube') {
            if(screenSize.dynamicWidth >= 769) {
                return <YoutubeIcon />
            }
            return <YoutubeMobile />
        }
    }

    return (

        <section>
            <div className='container'>
                <div className={styles.linksSection}>
                    <Image
                        height={352}
                        width={767}
                        src={imageTop}
                        alt={altImageTop}
                    />

                    {
                        linkArray.map((link) => {
                            return(
                                <SocialMediaLink
                                    key={link.imageButtonAlt}
                                    imageButton={link.imageButton} 
                                    imageButtonAlt={link.imageButtonAlt} 
                                    buttonTextTitle={link.buttonTextTitle} 
                                    buttonText={link.buttonText}
                                    buttonLink={link.buttonLink}
                                />
                            )
                        })
                    }
                    
                    <Link href={'https://www.glomb.com.br'} prefetch={false} style={{marginTop:'20px'}}>
                        <Image
                            height={352}
                            width={767}
                            src={imageBottom}
                            alt={altImageBottom}
                        />
                    </Link>
                </div>
                <div>
                    <div className={styles.socialMediaContainer}>
                        {
                            socialMediaArray.map(socialMedia => {
                                return (
                                    <a href={socialMedia.link} key={socialMedia.icon}>
                                        <div className={styles.svgBoxContainer}>
                                            { 
                                                brinRightIcon(socialMedia.icon)
                                            }
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                </div>
            </div>
        </section>
    )
}