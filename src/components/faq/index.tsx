import { ReactNode } from 'react';
import styles from './styles.module.scss';
import ArrowFaq from '@/public/assets/svgs/arrowFaq.svg';

interface faqInterface {
    title: ReactNode | string;
    questionWithAnswer: questionWithAnswer[];
}

interface questionWithAnswer {
    question: string;
    answer: string;
}[];

export default function Faq(props: faqInterface) {

    const {title, questionWithAnswer} = props

    return (
        <section className={styles.sectionFaq}>
            <div className={`container ${styles.containerFaq}`}>
                <h3>{title}</h3>
                {
                    questionWithAnswer.map(({question, answer}) => {
                        return (
                            <details key={question}>
                                <summary>
                                    <p>{question}</p>
                                    <ArrowFaq />
                                </summary>
                                <div>
                                    <p>
                                        {answer}
                                    </p>
                                </div>
                            </details>
                        )
                    })
                }
                
            </div>
        </section>
    );
}