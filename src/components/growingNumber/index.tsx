import { ReactNode } from 'react';
import styles from './styles.module.scss';
import AnimatedValue from './numberAnimation';

interface GrowuingNumberInterface {
    title: string 
    text: string | ReactNode
    years: string 
    yearsText: string 
    clients: string 
    clientsText: string
}

export default function GrowingNumber(props: GrowuingNumberInterface) {

    const { title, text, years, yearsText, clients, clientsText } = props

    return (
        <section className={styles.sectionGrowingNumber}>
            <div className='container'>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className={styles.numberAnimation}>
                <div>
                    <AnimatedValue id="years" years={Number(years)}/>
                    <span>{yearsText}</span>
                </div>
                <div>
                    <AnimatedValue id="clients" clients={Number(clients)} />
                    <span>{clientsText}</span>
                </div>
                </div>
            </div>
        </section>
    );
}