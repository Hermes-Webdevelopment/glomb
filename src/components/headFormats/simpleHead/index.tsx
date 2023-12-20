import styles from './styles.module.scss';
import Glomb from '@/public/assets/images/svgs/glomb_web.svg';
import GlombMobile from '@/public/assets/images/svgs/glomb_mobile.svg';
import BlueButton from '../../atons/blueButton';

interface simpleHeadInterface {
    logo: string, 
    btnTxt: string, 
    btnLink: string
}

export default function SimpleHead(props: simpleHeadInterface) {

    const { logo, btnTxt, btnLink } = props

    return (

        <section>
            <div className={`container ${styles.simpleHeadContainer}`}>
                <div className={styles.logoContainer}>
                    {
                        logo === 'glomb' ?
                        <>
                            <Glomb className='apearMobile' />
                            <GlombMobile className='apearDesktop' />
                        </>
                        :
                        ''
                    }
                </div>
                <BlueButton 
                    buttonLink={btnLink}
                    buttonText={btnTxt}
                    transparentMode={true}
                />
            </div>
        </section>
    )
}