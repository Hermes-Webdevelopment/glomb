import styles from './styles.module.scss';
import Image from 'next/image';
import { ReactNode } from 'react';

import InstagramIcon from '@/public/assets/images/svgs/instagram.svg';
import InstagramIconMobile from '@/public/assets/images/svgs/instagrammobile.svg';
import BlogIcon from '@/public/assets/images/svgs/blog.svg';
import BlogIconMobile from '@/public/assets/images/svgs/blogmobile.svg';
import SiteIcon from '@/public/assets/images/svgs/site.svg';
import SiteIconMobile from '@/public/assets/images/svgs/sitemobile.svg';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';

interface singleText {
    image: string; 
    imageMobile: string; 
    imageAlt: string;
    title: ReactNode | string; 
    text: ReactNode | string; 
    socialMediaArray: {
        icon: string;
        name: string;
        link: string;
    }[]
}

export default function LinksBanner(props: singleText) {

    const {text, image, imageMobile, imageAlt, title, socialMediaArray} = props
    
    const screenSize = getScreenSiteAndWidth()

    function brinRightIcon(icon: string) {
        
        if( icon === 'instagram') {
            if(screenSize.dynamicWidth >= 769) {
                return <InstagramIcon />
            }
            return <InstagramIconMobile />
        } else if( icon === 'blog') {
            if(screenSize.dynamicWidth >= 769) {
                return <BlogIcon />
            }
            return <BlogIconMobile />
        } else if( icon === 'site') {
            if(screenSize.dynamicWidth >= 769) {
                return <SiteIcon style={{"marginLeft":"2px"}}/>
            }
            return <SiteIconMobile />
        }
    }

    return (
        <section>
            <div className={`${styles.linksContainer}`}>
                <div className={styles.textBox}>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {text}
                    </p>
                    <div>
                        {
                            socialMediaArray.map(socialMedia => {
                                return (
                                    <a href={socialMedia.link} key={socialMedia.name}>
                                        <div className={styles.svgBoxContainer}>
                                            { 
                                                brinRightIcon(socialMedia.icon)
                                            }
                                        </div>
                                        <p>
                                            {socialMedia.name}
                                        </p>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <Image
                        className={'apearMobile'}
                        height={1090}
                        width={943.5}
                        src={image}
                        quality={100}
                        alt={imageAlt}
                    />

                    <Image
                        className={'apearDesktop'}
                        height={965}
                        width={503}
                        quality={100}
                        src={imageMobile}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </section>
    )
}