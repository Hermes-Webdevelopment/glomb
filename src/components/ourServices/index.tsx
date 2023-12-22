import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface OurServicesInterface {
    title1: string 
    link1: string 
    text1: string | ReactNode
    title2: string 
    link2: string 
    text2: string | ReactNode 
    title3: string 
    link3: string 
    text3: string | ReactNode
    bgimg1: string
    bgimg2: string
    bgimg3: string
}

export default function OurServices(props: OurServicesInterface) {

    const {title1, link1, text1, bgimg1, title2, link2, text2, bgimg2, title3, link3, text3, bgimg3,} = props

    return (
        <section className={styles.sectionOurServices}>
            <div className='container'>
                <div className={styles.firstBox} style={{
                        backgroundImage: `url(${bgimg1})`,
                    }}>
                    <div className={styles.whiteBox}>
                        <h2>{title1}</h2>
                        <div>
                            <p>{text1}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.secondBox}>
                    <div style={{
                        backgroundImage: `url(${bgimg2})`,
                    }}>
                        <div style={{height:'24px'}}></div>
                        <div className={styles.whiteBox}>
                            <h3>{title2}</h3>
                            <div>
                                <p>{text2}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${bgimg3})`,
                    }}>
                        <div style={{height:'24px'}}></div>
                        <div className={styles.whiteBox}>
                            <h3>{title3}</h3>
                            <div>
                                <p>{text3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}