import React, { useEffect, useState } from 'react';

interface AnimatedValueProps {
  id: string;
  years?:number;
  clients?:number;
}

const AnimatedValue: React.FC<AnimatedValueProps> = ({ id, years, clients = 0 }) => {
  const [value, setValue] = useState<number>(100);

  useEffect(() => {
    const obj = document.getElementById(id);

    const handleScroll = () => {
      const element = obj as HTMLElement;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Defina a posição em que deseja iniciar a animação (por exemplo, 100 pixels do topo da janela)
      const triggerPosition = 100;

      if (elementPosition < windowHeight - triggerPosition) {
        // Inicia a animação quando o elemento estiver na posição desejada
        animateValue(0, years ? years : clients, 4000);
        // Remove o listener de scroll após iniciar a animação (opcional)
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const animateValue = (start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    // Adiciona um listener de scroll para verificar a posição do elemento
    window.addEventListener('scroll', handleScroll);

    // Limpar o listener de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]); // Adiciona "id" como dependência para o useEffect

  return (
    <span id={id}>
      {value}
    </span>
  );
};

export default AnimatedValue;