import styles from './styles.module.scss';

import { ReactNode, useEffect, useRef, useState} from 'react';
import Star from '@/public/assets/svgs/star.svg';

interface ClientsCommentsSliderInterface {
    clientsComentCard: CardInterface[],
    title: string,
    subTitle: string
}

interface CardInterface {
    title: string,
    text:string | ReactNode,
    starNumber:number,
    clientName:string | ReactNode,
    firstLetter: string
}

export default function ClientsCommentsSlider(props: ClientsCommentsSliderInterface) {

    const { clientsComentCard, title, subTitle } = props

    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [numVisibleImages, setNumVisibleImages] = useState(0);
    const [initialMousePosition, setInitialMousePosition] = useState(0);
    const [supportsTouch, setSupportsTouch] = useState(false)

    const slidesRef = useRef<HTMLDivElement | null>(null);

    const imageWidth = 254; // Largura de cada imagem em pixels
    const margin = 26; // Margem entre as imagens

    // inicio eventos do mouse
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartPosition(e.clientX);
        setInitialMousePosition(e.clientX);
        setPrevTranslate(currentTranslate);
    };

    useEffect(() => {
      setSupportsTouch('ontouchstart' in window);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;

        if (Math.abs(e.clientX - initialMousePosition) >= 5) { // Define a sensibilidade do movimento inicial
            const currentPosition = e.clientX;
            setCurrentTranslate(prevTranslate + (currentPosition - startPosition) * 2); // Aumenta a sensibilidade
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // final eventos do mouse

    useEffect(() => {
        const handleResize = () => {
          const availableWidth = window.innerWidth;
          const numImages = Math.floor((availableWidth - margin) / (imageWidth + margin));
          setNumVisibleImages(numImages);
        };
    
        handleResize();
    
        const updatePosition = () => {
          if (slidesRef.current) {
            const maxTranslate = 0;
            const minTranslate = -(slidesRef.current.scrollWidth - (numVisibleImages * (imageWidth + margin)) + margin);
            const translateValue = Math.min(maxTranslate, Math.max(minTranslate, currentTranslate));
            slidesRef.current.style.transform = `translateX(${translateValue}px)`;
          }
          requestAnimationFrame(updatePosition);
        };
    
        updatePosition();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [currentTranslate, numVisibleImages]);

  return (
    
    <section className={`${styles.peopleSliderSection}`}>
        <div className={`container ${styles.peopleContainer}`}>

            <h2>
                {title}
            </h2>
            <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <h3>
                {subTitle}
            </h3>
        </div>
        <div
            className={`${styles.sliderContainer} ${supportsTouch ? styles.changeToTouchMode : ''}`}
        >
            <div 
                className={styles.slidesDiv}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                ref={slidesRef}
            >
                {
                    clientsComentCard.map((card: CardInterface) => {
                        return (
                            <div key={Math.random()} className={styles.slideContainer}>
                                <div>
                                    <p className={styles.text}>{card.text}</p>
                                </div>
                                <div className={styles.descriptionDiv}>
                                    <p className={styles.letterBox}>{card.firstLetter}</p>
                                    <p>{card.clientName}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  );
}