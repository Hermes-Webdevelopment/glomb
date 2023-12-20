import Link from 'next/link';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface buttonProps {
    buttonLink: string; 
    buttonText: string | ReactNode; 
    isFloating?: boolean;
    cleanMode?: boolean;
    transparentMode?: boolean;
}

export default function BlueButton(props: buttonProps) {

    const {buttonLink, buttonText, isFloating = false, cleanMode = false, transparentMode = false} = props

    return (
        <div className={`${styles.mainMode} ${styles.forceChange} ${isFloating ? styles.floatingButton : ''} ${cleanMode ? styles.btnClean : ''} ${transparentMode ? styles.btnTransparent : ''}`}>
            <Link href={buttonLink} className={`${styles.buttonContainer}`} prefetch={false}>
                <p>{buttonText}</p>
            </Link>
        </div>
    )
}