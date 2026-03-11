import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top 90%',
  scrollEnd = 'bottom 60%',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: false,
        },
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd]);

  return (
    <div ref={containerRef} className={`scroll-float ${containerClassName}`}>
      {children}
    </div>
  );
};

export default ScrollFloat;
