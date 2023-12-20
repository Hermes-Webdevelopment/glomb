import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface singleText {
    text: ReactNode | string; 
}

export default function SingleText(props: singleText) {

    const {text} = props

    return (
        <section className={styles.textSection}>
            <div >
                {text}
            </div>
        </section>
    )
}