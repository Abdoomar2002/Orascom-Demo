'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedSection({ children, className = "", id = "" }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section data elements
    const sectionData = section.querySelector('.section-data');
    const headings = section.querySelectorAll('h1, h2, h3');
    const paragraphs = section.querySelectorAll('p');
    const images = section.querySelectorAll('img');
    const cards = section.querySelectorAll('.article-unit, .project-unit');

    // Set initial states
    gsap.set([headings, paragraphs], { 
      y: 30, 
      opacity: 0 
    });
    
    gsap.set(images, { 
      scale: 0.8, 
      opacity: 0 
    });
    
    gsap.set(cards, { 
      y: 50, 
      opacity: 0 
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        markers: false, // Set to true for debugging
        refreshPriority: -1
      }
    });

    // Animate elements
    tl.to(headings, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    })
    .to(paragraphs, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4")
    .to(images, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.4");

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={className} id={id}>
      {children}
    </section>
  );
} 