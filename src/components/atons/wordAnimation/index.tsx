import { useEffect } from 'react';
import styles from './styles.module.scss'

interface AnimatedTextInterface {
    words: string[]
}

export default function AnimatedText(props: AnimatedTextInterface) {

    const { words } = props

    useEffect(() => {
        const wordsElements = document.querySelectorAll<HTMLElement>(`.${styles.word}`);
    
        let currentWordIndex = 0;
    
        const animateWords = () => {
          wordsElements[currentWordIndex].style.display = 'none';
    
          currentWordIndex = (currentWordIndex + 1) % words.length;
    
          wordsElements[currentWordIndex].style.display = 'block';
        };
    
        const animationInterval = setInterval(animateWords, 2000); // Ajuste o intervalo conforme necessário
    
        return () => {
          clearInterval(animationInterval);
        };
      }, [words]);
    
      return (
        <div className={styles.wordContainer}>
          {words.map((word, index) => (
            <span key={index} className={styles.word}>
              {word}
            </span>
          ))}
        </div>
      );
};