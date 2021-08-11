import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import fotocapa from '../../../public/fotocapa.png';

const items = [
    {
      src: 'slide1.png',
      altText: 'Prato1',
      caption: 'Prato1'
    },
    {
      src: 'slide2.png',
      altText: 'Prato2',
      caption: 'Slide2'
    },
    {
      src: 'slide3.png',
      altText: 'Prato3',
      caption: 'Slide3'
    },
    {
      src: 'slide4.png',
      altText: 'Prato4',
      caption: 'Slide4'
    },
    {
      src: 'slide5.png',
      altText: 'Prato5',
      caption: 'Slide5'
    },
    {
      src: 'slide6.png',
      altText: 'Prato6',
      caption: 'Slide6'
    },
  ];
  
  const Carrossel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img width='800' height='400' src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="anterior" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="próximo" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default Carrossel;
 
;

