import styles from './styles.module.scss';

import OrangeForm from '@/public/assets/svgs/firstForm.svg';
import GreenForm from '@/public/assets/svgs/secondForm.svg';
import BlueForm from '@/public/assets/svgs/thirdForm.svg';

import FormOne from '@/public/assets/svgs/formone.svg';
import FormTwo from '@/public/assets/svgs/formtwo.svg';
import FormThree from '@/public/assets/svgs/formthree.svg';

import FormOneMobile from '@/public/assets/svgs/formonemobile.svg';
import FormTwoMobile from '@/public/assets/svgs/formtwomobile.svg';
import FormThreeMobile from '@/public/assets/svgs/formthreemobile.svg';

import { ReactNode } from 'react';

interface formsTitleInterface {
    firstTitle: string, 
    firstSubTitle: ReactNode | string, 
    secondTitle: string, 
    secondSubTitle: ReactNode | string, 
    thirdTitle: string, 
    thirdSubTitle: ReactNode | string,
    cleanModel?: boolean
}

export default function FormsTopics(props: formsTitleInterface) {

    const {firstTitle, firstSubTitle, secondTitle, secondSubTitle, thirdTitle, thirdSubTitle, cleanModel = false} = props

    return (
        <section className={`${styles.formsTopicsSection} ${cleanModel ? styles.changeBG : ''}`}>
            <div className={`container ${styles.formsTopics}`}>
                <div className={`${styles.singleFormBox} ${styles.flexStart}`}>
                    {
                        cleanModel ?
                            <>
                                <FormOne className={`apearMobile ${styles.newPosition}`} />
                                <FormOneMobile className={`apearDesktop ${styles.newPosition}`} />
                            </>
                        :
                            <OrangeForm />
                    }
                    <div>
                        <p className={styles.titleTopics}>{firstTitle}</p>
                        <p>{firstSubTitle}</p>
                    </div>
                </div>
                <div className={`${styles.singleFormBox} ${styles.center}`}>
                    {
                        cleanModel ?
                            <>
                                <FormTwo className={`apearMobile ${styles.newPosition}`} />
                                <FormTwoMobile className={`apearDesktop ${styles.newPosition}`} />
                            </>
                        :
                            <GreenForm />
                    }
                    <div>
                        <p className={styles.titleTopics}>{secondTitle}</p>
                        <p>{secondSubTitle}</p>
                    </div>
                </div>
                <div className={`${styles.singleFormBox} ${styles.flexEnd}`}>
                    {
                        cleanModel ?
                            <>
                                <FormThree className={`apearMobile ${styles.newPosition}`} />
                                <FormThreeMobile className={`apearDesktop ${styles.newPosition}`} />
                            </>
                        :
                            <BlueForm />
                    }
                    <div>
                        <p className={styles.titleTopics}>{thirdTitle}</p>
                        <p>{thirdSubTitle}</p>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundPlay}></div>
        </section>
    )
}