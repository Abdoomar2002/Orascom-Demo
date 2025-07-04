'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin();
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const carouselData = [
  {
    id: 1,
    backgroundImage: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'We help you Build Your dreams',
    subtitle: 'Our professional team is always at your service. We practice individual approach to every client, whether it us a large or a small project. Learn more about our services!'
  },
  {
    id: 2,
    backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    title: 'Reliable Service for Safe Homes & Offices',
    subtitle: 'Our professional team is always at your service. We practice individual approach to every client, whether it us a large or a small project. Learn more about our services!'
  },
  {
    id: 3,
    backgroundImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Precise Design in Every Construction Detail',
    subtitle: 'Our professional team is always at your service. We practice individual approach to every client, whether it us a large or a small project. Learn more about our services!'
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselData.length;

  useGSAP(() => {
    // Add GSAP animations for slide content
    gsap.set('.slide-content', { y: 50, opacity: 0 });
    
    const tl = gsap.timeline({ paused: true });
    tl.to('.slide-content', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2
    });
    
    // Play animation when swiper is ready
    setTimeout(() => tl.play(), 500);
  });

  // Progress bar is now handled with inline styles in the JSX

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const handleSwiperInit = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <section className="home-carousel" id="home-carousel">
      <div className="swiper-container main-slider main-intro-slider  overflow-hidden-slides dark">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{
            nextEl: '.main-slider-next',
            prevEl: '.main-slider-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiperInit}
          className="swiper-wrapper"
        >
          {carouselData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <figure 
                className="slide-bgimg d-flex flex-column justify-content-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                
                <div className="center-div full">
                  <div className="row no-gutters">
                    <div className="content col-12 col-md-6 col-lg-4 offset-md-2">
                     <div>

                      <h1 className='title slide-content'>{slide.title}</h1>
                      <p className="caption slide-content">{slide.subtitle}</p>
                     </div>
                    </div>
                  </div>
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Main Slider Controls - Original Style */}
        <div className="main-slider-controls mt-10">
          <div className="center-div full h-100">
            <div className="row no-gutters h-100 align-items-md-start">
              <div className="main-slider-heading col-12 col-md-8 col-xlg-6 order-1 order-md-2 offset-md-2">
               
              </div>
              <div className="global-slider-nav-and-progress main-slider-nav-and-progress col-2 col-md-1 ml-auto d-flex flex-column order-3 align-self-end align-self-md-start mb-5 mb-md-0 pb-2 pb-md-0 mt-auto mt-md-0">
                <div className="global-slider-prev main-slider-prev"><span>Prev.</span></div>
                <div className="global-slider-progress main-slider-progress">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      height: `${((currentSlide + 1) / totalSlides) * 100}%`,
                      transition: 'height 0.3s ease'
                    }}
                  ></div>
                </div>
                <div className="global-slider-next main-slider-next"><span>Next</span></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="main-slider-fraction col-6 col-md-2 order-2 order-md-1 align-self-end align-self-md-start mb-5 mb-md-0 mt-auto mt-md-0">
          <div className="swiper-pagination"></div>
        </div>
        
        <span id="scroll-indicator"></span>
      </div>
    </section>
  );
} 