import Link from 'next/link';
import styles from './styles.module.scss';
import WhiteArrow from '@/public/assets/svgs/arrowButtonWhite.svg';
import BlueArrow from '@/public/assets/svgs/arrowButtonBlue.svg';
import { ReactNode } from 'react';

interface buttonProps {
    buttonLink: string; 
    buttonText: string | ReactNode; 
    blueVariable?: boolean;
}

export default function WhiteButton(props: buttonProps) {

    const {buttonLink, buttonText, blueVariable = false} = props

    return (
        <div className={`${styles.whiteButton} ${styles.forceChange}`}>
            <Link href={buttonLink} className={`${styles.buttonContainer}`} prefetch={false}>
                <u><p className={`${blueVariable ? styles.changeToBlue : ''}`}>{buttonText}</p></u> {blueVariable ? <BlueArrow /> : <WhiteArrow />}
            </Link>
        </div>
    )
}