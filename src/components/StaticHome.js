import React from 'react';
import './StaticHome.module.css';

export default function StaticHome() {
  return (
    <>
      {/* Preloader */}
      <div className="done d-flex justify-content-center align-items-center" data-hover="Loading" id="preloader">
        <svg viewBox="0 0 185 38">
          {/* ...SVG paths omitted for brevity... */}
        </svg>
        <div className="decorative-pattern to-right top-140">
          <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home1.svg" />
        </div>
        <div className="decorative-pattern bottom-140">
          <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home2.svg" />
        </div>
      </div>
      {/* Cursor */}
      <div className="cursor" data-cursor="" id="cursor">
        <div className="inner">
          <div className="hexagon">
            <svg fill="none" id="hexagon" strokeWidth="1" version="1.1" viewBox="0 0 115 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <polygon points="0 49.8966942 28.5616533 0 86.4128929 0 114.974546 49.8966942 86.4128929 99.84371 28.5616533 100"></polygon>
            </svg>
            <span className="icon-right-chevron"></span>
            <span className="icon-left-chevron"></span>
            <span className="icon-mini-hex"></span>
            <span className="cursor_text"></span>
          </div>
        </div>
      </div>
      <div id="overlay"></div>
      {/* Header */}
      <header id="header">
        <div className="center-div relate-to-center d-md-flex d-lg-block h-100 flex-1 flex-lg-0">
          <div className="header-core row no-gutters flex-column flex-lg-row flex-grow-1">
            <div className="logo col-auto col-lg-3 col-xlg-4 d-flex align-items-center align-items-lg-baseline">
              <a href="https://orascom.com">
                <svg viewBox="0 0 185 38">
                  {/* ...SVG paths omitted for brevity... */}
                </svg>
              </a>
              <span className="d-block d-lg-none ml-auto" id="burger-menu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className="navigation-and-stocks col-auto col-lg-9 col-xlg-8">
              <div className="stocks d-flex justify-content-lg-end order-2 order-lg-1">
                <p>EGP 315.00<span className="icon-arrow-up"></span></p>
                <p>USD 5.99<span className="icon-arrow-up"></span></p>
              </div>
              <nav className="d-flex justify-content-end order-1 order-lg-2 flex-grow-1 flex-lg-grow-0" id="desktop-nav">
                <p id="mega-menu-title">About Us</p>
                <ul className="row no-gutters align-self-start">
                  {/* ...navigation items omitted for brevity... */}
                </ul>
                <div className="pattern-holder" id="nav-pattern"></div>
              </nav>
              <nav className="d-flex justify-content-end order-1 order-lg-2 flex-grow-1 flex-lg-grow-0" id="mobile-nav">
                <p id="mega-menu-title">About Us</p>
                <ul className="row no-gutters align-self-start">
                  {/* ...mobile navigation items omitted for brevity... */}
                </ul>
                <div className="pattern-holder" id="nav-pattern"></div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Carousel Section */}
      <section className="home-carousel" id="home-carousel">
        <div className="swiper-container main-slider main-intro-slider overflow-hidden-slides dark">
          <div className="swiper-wrapper">
            {/* ...slides omitted for brevity... */}
          </div>
          <div className="main-slider-controls">
            <div className="center-div full h-100">
              <div className="row no-gutters h-100 align-items-md-start">
                <div className="main-slider-heading col-12 col-md-8 col-xlg-6 order-1 order-md-2 offset-md-2">
                  <h1>Our story goes beyond construction</h1>
                </div>
                <div className="global-slider-nav-and-progress main-slider-nav-and-progress col-2 col-md-1 ml-auto d-flex flex-column order-3 align-self-end align-self-md-start mb-5 mb-md-0 pb-2 pb-md-0 mt-auto mt-md-0">
                  <div className="global-slider-prev main-slider-prev"><span>Prev.</span></div>
                  <div className="global-slider-progress main-slider-progress"></div>
                  <div className="global-slider-next main-slider-next"><span>Next</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-slider-fraction col-6 col-md-2 order-2 order-md-1 align-self-end align-self-md-start mb-5 mb-md-0 mt-auto mt-md-0">
            <div className="swiper-pagination"></div>
          </div>
          <span id="scroll-indicator"></span>
        </div>
        <div className="swiper-container nav-slider" data-drag="" data-hover="Drag">
          <div className="swiper-wrapper" role="navigation">
            {/* ...nav slides omitted for brevity... */}
          </div>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="home-who" id="home-who">
        <div className="decorative-pattern to-right top-140" id="home-pattern-one">
          <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home1.svg" />
          <div className="decorative-pattern-light">
            <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home1-light.svg" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 pt-5 pb-4 pb-lg-5 mt-3 mt-lg-5 mb-3 mb-lg-5">
              <div className="section-data" id="who-we-are-data">
                <h1><span>WHO WE ARE</span></h1>
                <h2 className="break-title mb-lg-5">At a Glance</h2>
                <p>Orascom Construction PLC is a leading global engineering and construction contractor primarily focused on infrastructure, industrial and high-end commercial projects in the Middle East, Africa, and the United States. Orascom Construction also develops and invests in concessions, owns 50% of BESIX Group, and holds a building materials, facility management and equipment services portfolio. The Group has consistently ranked among the world's top contractors and is dual listed in the UAE and Egypt.</p>
                <div className="mt-4 mt-lg-5">
                  <a className="cta secondary" href="https://orascom.com/about"><span>Explore</span></a>
                </div>
              </div>
            </div>
            <div className="home-who-images col-12 ml-0 mr-0 col-lg-8 mb-5 mb-lg-0 d-flex justify-content-between justify-content-lg-end">
              <div className="mr-3 mr-md-5">
                <img alt="WHO WE ARE" id="home-who-img-one" src="/wp-content/uploads/EG-FNC-00099-310x540.jpg" />
              </div>
              <div className="mt-lg-5 pt-lg-5 align-self-end">
                <div className="mt-5 pt-5">
                  <img alt="WHO WE ARE" id="home-who-img-two" src="/wp-content/uploads/EG-MOE-00107-310x540.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section className="home-news" id="home-news">
        <div className="decorative-pattern to-right top-90" id="home-pattern-two">
          <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home2.svg" />
        </div>
        <div className="gray-area" id="home-news-gray"></div>
        <div className="swiper-container articles-slider units-slider">
          <div className="drag-area" data-drag="" data-hover="Drag"></div>
          <div className="center-div">
            <div className="section-data no-pointers mb-lg-5" id="newsroom-data">
              <h1><span>newsroom</span></h1>
              <h2>Our Latest Updates</h2>
            </div>
          </div>
          <div className="swiper-wrapper" role="navigation">
            {/* ...news articles omitted for brevity... */}
          </div>
        </div>
        <div className="center-div">
          <div className="row no-gutters align-items-md-start mt-5 mb-5 pb-5">
            <div className="col-8 col-xlg-10 offset-0 offset-lg-2 offset-lg-1 d-flex justify-content-left justify-content-lg-center">
              <a className="cta secondary" href="https://orascom.com/updates/"><span>Explore Newsroom</span></a>
            </div>
            <div className="global-slider-nav-and-progress news-slider-nav-and-progress dark col-2 col-md-1 ml-auto d-flex flex-column align-self-end align-self-lg-start">
              <div className="global-slider-prev news-slider-prev"><span>Prev.</span></div>
              <div className="global-slider-progress news-slider-progress"></div>
              <div className="global-slider-next news-slider-next"><span>Next</span></div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="home-services" id="home-services">
        <div className="decorative-pattern to-right" id="home-pattern-three">
          <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home3.svg" />
        </div>
        <div className="gray-area bottom" id="home-services-gray"></div>
        <div className="center-div">
          <div className="section-data mb-lg-5" id="services-data">
            <h1><span>what we do</span></h1>
            <h2>Our Services</h2>
          </div>
          <div className="home-services-content">
            <div className="home-services-content-image" id="home-services-images">
              {/* ...service images omitted for brevity... */}
            </div>
            <ul className="row no-gutters" id="home-services-units">
              {/* ...service units omitted for brevity... */}
            </ul>
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="featured-projects dark d-flex flex-column justify-content-center align-items-center pt-5 pb-5" id="featured-projects">
        <div className="decorative-pattern top-0" id="home-pattern-four">
          <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home4.svg" />
        </div>
        <div className="swiper-container projects-background-slider">
          <div className="swiper-wrapper">
            {/* ...project slides omitted for brevity... */}
          </div>
        </div>
        <div className="center-div no-pointers projects-higher-level mb-3 mb-lg-0">
          <div className="section-data mb-lg-5" id="featured-projects-data">
            <h1><span>featured projects</span></h1>
            <h2>Our Work</h2>
          </div>
        </div>
        <div className="swiper-container projects-slider overflow-hidden-slides">
          <div className="drag-area" data-drag="" data-hover="Drag" data-mode="light"></div>
          <div className="swiper-wrapper" role="navigation">
            {/* ...project units omitted for brevity... */}
          </div>
        </div>
        <div className="projects-higher-level container">
          <div className="row no-gutters align-items-md-start mt-5">
            <div className="col-8 col-xlg-10 offset-0 offset-lg-2 offset-lg-1 d-flex justify-content-left justify-content-lg-center">
              <a className="cta white" data-mode="light" href="https://orascom.com/projects/"><span>View All Projects</span></a>
            </div>
            <div className="global-slider-nav-and-progress projects-slider-nav-and-progress col-2 col-md-1 ml-auto d-flex flex-column align-self-end align-self-lg-start">
              <div className="global-slider-prev projects-slider-prev" data-mode="light"><span>Prev.</span></div>
              <div className="global-slider-progress projects-slider-progress"></div>
              <div className="global-slider-next projects-slider-next" data-mode="light"><span>Next</span></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="pb-5 mb-2">
        <div className="center-div pt-5">
          <div className="row no-gutters flex-column flex-lg-row">
            <div className="footer-unit col-12 col-lg-4 d-flex align-items-left align-items-lg-center flex-lg-row order-1">
              <a className="mr-lg-5" href="https://careers.orascom.com/">Careers</a>
              <a href="https://orascom.com/contact/">Contact Us</a>
            </div>
            <div className="footer-unit social-links-unit col-12 col-lg-4 d-flex align-items-left align-items-lg-center flex-column order-3 order-lg-2">
              <div className="social-links d-flex flex-1">
                <a href="https://www.linkedin.com/company/orascom-construction-ltd/"><span className="icon-linkedin"></span></a>
                <a href="https://www.facebook.com/OrascomConstructionLtd/"><span className="icon-facebook"></span></a>
                <a href="https://www.instagram.com/orascomconstruction/"><span className="icon-instagram"></span></a>
              </div>
            </div>
            <div className="footer-unit col-12 col-lg-4 d-flex align-items-left align-items-lg-center flex-lg-row justify-content-start justify-content-lg-end order-2 order-lg-3">
              <a href="https://orascom.com/privacy/">Privacy Policy</a>
              <a className="ml-0 ml-lg-5" href="https://orascom.com/terms/">Terms &amp; Conditions</a>
            </div>
          </div>
          <p>All rights reserved © Orascom Construction PLC 2021</p>
        </div>
      </footer>
    </>
  );
} 