
import Link from 'next/link';
import styles from './styles.module.scss';

import WhatsBtnIcon from '@/public/assets/svgs/whats.svg';

interface WhatsBtnInterface {
    link: string
}

export default function WhatsBtn(props: WhatsBtnInterface) {

    const { link } = props

    return (

        <div id='whatsFloatingBtn' className={styles.whatsBtn}>
            <Link href={link}>
                <WhatsBtnIcon/>
            </Link>
        </div>
    )
}