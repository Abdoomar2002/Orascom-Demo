"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Carousel from "../components/Carousel";
import AnimatedSection from "../components/AnimatedSection";
import useHorizontalScroll from "../hooks/useHorizontalScroll";

const featuredProjects = [
  {
    title: "Bahr El Baqr Wastewater Treatment Plant",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=918&h=512&fit=crop",
    href: "/projects/bahr-el-baqr",
  },
  {
    title: "High-Speed Rail",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&w=918&h=512&fit=crop",
    href: "/projects/high-speed-rail",
  },
  {
    title: "Grand Egyptian Museum",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&w=918&h=512&fit=crop",
    href: "/projects/grand-egyptian-museum",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const scrollRef = useHorizontalScroll();
  const newsSectionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home wp-singular page-template-default page page-id-8 wp-theme-orascom">
      {/* Preloader */}
      {isLoading && (
        <div
          className="done d-flex justify-content-center align-items-center"
          data-hover="Loading"
          id="preloader"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
            zIndex: 9999,
          }}
        >
          <svg viewBox="0 0 185 38">
            <path
              d="M174.293626,32.3530357 L174.440372,32.47 L174.440372,32.48 C174.693166,32.869948 174.779218,33.3422078 174.684424,33.7924114 L174.640372,33.96 L174.340372,35.36 C173.970372,37.12 172.740372,37.36 171.470372,37.36 C170.789045,37.4552648 170.099827,37.2510519 169.580372,36.8 C169.322632,36.4118997 169.235752,35.9377863 169.334578,35.4875182 L169.380372,35.32 L169.680372,33.91 C170.050372,32.14 171.270372,31.91 172.540372,31.91 C173.162572,31.8231049 173.791373,31.9838648 174.293626,32.3530357 Z M96.6146267,32.3531454 L96.7603718,32.47 L96.7603718,32.48 C97.0220005,32.8666258 97.1095364,33.3422323 97.0075364,33.7925426 L96.9603718,33.96 L96.6603718,35.36 C96.2903718,37.12 95.0703718,37.36 93.8003718,37.36 C93.1161492,37.4529487 92.4248076,37.2491849 91.9003718,36.8 C91.6468901,36.4100027 91.5634737,35.9362877 91.6640176,35.4870889 L91.7103718,35.32 L92.0003718,33.91 C92.3703718,32.14 93.6003718,31.91 94.8703718,31.91 C95.4897595,31.8233956 96.1156697,31.9842935 96.6146267,32.3531454 Z M86.5270558,31.910816 C87.1126461,31.9168924 87.6583058,31.9628993 87.9730628,32.239809 L88.0603718,32.33 L88.0203718,32.33 C88.2539949,32.7087283 88.3235504,33.1635311 88.2181284,33.5911281 L88.1703718,33.75 L88.1003718,34.09 L86.3703718,34.09 L86.4603718,33.7 L86.4603718,33.5 C86.3903718,33.42 86.1203718,33.42 85.9603718,33.42 C85.3723718,33.42 85.2634829,33.5332444 85.1296222,34.0930785 L85.1003718,34.22 L84.9403718,35 C84.8903718,35.34 84.8303718,35.61 84.8903718,35.71 C84.9503718,35.81 85.1103718,35.81 85.3803718,35.81 C85.8788333,35.81 86.0364665,35.7759172 86.1364209,35.4246017 L86.1603718,35.33 L86.2203718,35.04 L87.9903718,35.04 L87.9203718,35.4 C87.8666375,35.999897 87.5659928,36.5504753 87.0903718,36.92 C86.563652,37.2432418 85.9450625,37.3838304 85.3303718,37.32 C84.4003718,37.32 83.7003718,37.29 83.3303718,36.83 C83.0550822,36.3910317 82.976706,35.8595997 83.1086007,35.3637789 L83.1603718,35.2 L83.4403718,33.91 C83.8159273,32.1285185 84.951867,31.9234431 86.2052643,31.910696 L86.5270558,31.910816 Z M149.226865,31.910816 C149.869677,31.9175 150.457872,31.9725 150.760372,32.33 C150.97675,32.7155295 151.03537,33.1675386 150.928304,33.592212 L150.880372,33.75 L150.810372,34.09 L149.080372,34.09 L149.160372,33.7 L149.160372,33.5 C149.090372,33.42 148.820372,33.42 148.660372,33.42 C148.063038,33.42 147.953527,33.5332444 147.827755,34.0930785 L147.800372,34.22 L147.630372,35 C147.630372,35.34 147.580372,35.61 147.630372,35.71 C147.680372,35.81 147.850372,35.81 148.110372,35.81 C148.618064,35.81 148.776407,35.7759172 148.868551,35.4246017 L148.890372,35.33 L148.950372,35.04 L150.680372,35.04 L150.600372,35.4 C150.550239,36.0009837 150.248854,36.5529177 149.770372,36.92 C149.243939,37.2439445 148.625108,37.3845879 148.010372,37.32 C147.140372,37.32 146.440372,37.29 146.060372,36.83 C145.781229,36.3935199 145.693738,35.86432 145.812956,35.3651204 L145.860372,35.2 L146.130372,33.91 C146.515557,32.1285185 147.651853,31.9234431 148.905264,31.910696 L149.226865,31.910816 Z M139.500372,31.95 L138.750372,35.45 C138.716791,35.5437504 138.716791,35.6462496 138.750372,35.74 C138.810372,35.81 139.080372,35.81 139.330372,35.81 C139.801141,35.81 139.931082,35.8014793 140.02694,35.4226354 L140.050372,35.32 L140.760372,31.95 L142.460372,31.95 L141.710372,35.48 C141.380372,37.01 140.470372,37.32 139.090372,37.32 C138.020372,37.32 137.430372,37.15 137.170372,36.83 C136.936372,36.542 136.937272,36.1487 137.034562,35.59907 L137.070372,35.41 L137.810372,31.95 L139.500372,31.95 Z M181.650372,31.95 C181.650372,31.95 181.971813,33.9061979 182.139421,34.9493504 L182.16,35.077 L182.18637,34.9470544 C182.384026,33.9338831 182.728731,32.1168461 182.758332,31.9607581 L182.760372,31.95 L184.450372,31.95 L183.320372,37.28 L180.760372,37.28 C180.760372,37.28 180.620013,36.3782987 180.477989,35.4736385 L180.42142,35.113747 C180.365419,34.7579584 180.312111,34.4208696 180.270372,34.16 C180.088288,35.1375 179.713341,37.106875 179.682411,37.2692925 L179.680372,37.28 L177.980372,37.28 L179.120372,31.95 L181.650372,31.95 Z"
              id="logo-navy"
              fill="#003E7E"
            ></path>
            <path
              d="M164.900372,-1.0658141e-14 L168.190372,4.24 L163.760372,7.69 L165.870372,10.32 L166.210372,9.41 L172.320372,9.41 L172.320372,8.82 L166.440372,8.82 L166.660372,8.22 L172.320372,8.22 L172.320372,7.62 L166.890372,7.62 L166.960372,7.44 C167.294347,6.61634749 167.826818,5.88806433 168.510372,5.32 L168.510372,5.32 L169.760372,5.32 C169.760372,5.32 169.940372,4.74 170.060372,4.42 L170.060372,4.42 L170.160372,4.42 C171.190372,4.62 173.820372,5.39 174.430372,8 C174.510446,7.96826952 174.594619,7.94806795 174.680372,7.94 C174.277779,6.36271618 173.28661,4.99941058 171.910372,4.13 C172.370372,4.14 172.810372,4.22 173.220372,4.22 C173.870372,4.76 175.400372,6.19 175.480372,7.76 C175.563377,7.74954232 175.647367,7.74954232 175.730372,7.76 C175.730372,7.76 175.930372,6.51 173.930372,4.36 C174.400372,4.45 174.820372,4.56 175.200372,4.67 C175.899675,5.52351989 176.321814,6.57014613 176.410372,7.67 L176.410372,7.67 L176.690372,7.67 C176.607688,6.64631387 176.240545,5.66611061 175.630372,4.84 C175.970372,4.97 176.280372,5.1 176.540372,5.23 C177.062024,5.93467374 177.333062,6.79354623 177.310372,7.67 L177.310372,7.67 L177.560372,7.67 C177.602233,6.89673694 177.406845,6.12914165 177.000372,5.47 C177.277776,5.62346287 177.539084,5.80436871 177.780372,6.01 C178.470372,6.74 178.050372,8.12 178.050372,8.12 L178.050372,8.12 L178.650372,9.54 L178.470372,9.77 L179.790372,12.52 L179.380372,12.84 C179.240372,12.98 179.240372,13.34 179.240372,13.34 L179.240372,13.34 L180.110372,17.1 L178.010372,16.83 L178.110372,18.47 L181.280372,17.32 L182.470372,20.74 L184.760372,27.27 L159.530372,27.27 L161.970372,20.73 L172.210372,20.73 L171.790372,20.18 L162.170372,20.18 L162.370372,19.63 L171.370372,19.63 L170.910372,19.03 L162.610372,19.03 L162.870372,18.34 L163.330372,17.09 L169.470372,17.09 L169.010372,16.5 L163.560372,16.5 L163.760372,15.95 L168.610372,15.95 L168.150372,15.35 L164.020372,15.35 L164.560372,13.9 L164.760372,13.38 L166.640372,13.38 L166.180372,12.78 L165.000372,12.78 L165.210372,12.23 L165.760372,12.23 L162.760372,8.45 L158.340372,11.9 L155.050372,7.65 L164.900372,-1.0658141e-14 Z"
              id="logo-gray"
              fill="#919195"
            ></path>
          </svg>
          <div className="decorative-pattern to-right top-140">
            {/* <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home1.svg"/> */}
          </div>
          <div className="decorative-pattern bottom-140">
            {/* <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home2.svg"/> */}
          </div>
        </div>
      )}
      {/* Main Content */}
      <main>
        {/* Home Carousel Section - Interactive Swiper */}
        <Carousel />

        {/* Who We Are Section - Animated */}
        <AnimatedSection className="home-who" id="home-who">
          <div
            className="decorative-pattern to-right top-140"
            id="home-pattern-one"
          >
            {/* <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home1.svg"/> */}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 pt-5 pb-4 pb-lg-5 mt-3 mt-lg-5 mb-3 mb-lg-5">
                <div className="section-data" id="who-we-are-data">
                  <h1>
                    <span>WHO WE ARE</span>
                  </h1>
                  <h2 className="break-title mb-lg-5">At a Glance</h2>
                  <p>
                    Orascom Construction PLC is a leading global engineering and
                    construction contractor primarily focused on infrastructure,
                    industrial and high-end commercial projects in the Middle
                    East, Africa, and the United States.
                  </p>
                  <p>
                    Orascom Construction also develops and invests in
                    concessions, owns 50% of BESIX Group, and holds a building
                    materials, facility management and equipment services
                    portfolio. The Group has consistently ranked among the
                    world's top contractors and is dual listed in the UAE and
                    Egypt.
                  </p>
                  <div className="mt-4 mt-lg-5">
                    <a className="cta secondary" href="/about">
                      <span>Explore</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-who-images col-12 ml-0 mr-0 col-lg-8 mb-5 mb-lg-0 d-flex justify-content-between justify-content-lg-end">
                <div className="mr-3 mr-md-5">
                  <img
                    alt="WHO WE ARE"
                    id="home-who-img-one"
                    src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&w=310&h=540&fit=crop"
                  />
                </div>
                <div className="mt-lg-5 pt-lg-5 align-self-end">
                  <div className="mt-5 pt-5">
                    <img
                      alt="WHO WE ARE"
                      id="home-who-img-two"
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=310&h=540&fit=crop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* News Section */}
        <section
          className={`${styles.homeNews} home-news`}
          id="home-news"
          ref={newsSectionRef}
          style={{ cursor: "none", position: "relative" }}
        >
          <div className={styles.decorativePattern} id="home-pattern-two">
            {/* <img alt="" src="/wp-content/themes/orascom/assets/svg/patterns/home2.svg"/> */}
          </div>
          <div
            className={`${styles.grayArea} gray-area`}
            id="home-news-gray"
          ></div>
          <div
            className={`${styles.articlesSlider} swiper-container articles-slider units-slider`}
          >
            <div className={styles.centerDiv}>
              <div
                className={`${styles.sectionData} section-data no-pointers`}
                id="newsroom-data"
              >
                <h1>
                  <span>newsroom</span>
                </h1>
                <h2>Our Latest Updates</h2>
              </div>
            </div>
            <div
              className="swiper-wrapper gap-5"
              role="navigation"
              ref={isClient ? scrollRef : null}
            >
              <Link
                className={`${styles.articleUnit} swiper-slide article-unit`}
                href="/about"
                data-hover="Read"
                data-mode="light"
              >
                <figure>
                  <div
                    className={`${styles.unitsUnitImage} units-unit-image`}
                    data-hover="Read"
                    data-mode="light"
                  >
                    <img
                      alt="Orascom Construction Reports Backlog of USD 8.7 Billion"
                      src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&w=310&h=400&fit=crop"
                    />
                  </div>
                  <figcaption
                    className={`${styles.articleUnitData} article-unit-data`}
                    data-hover="Read"
                  >
                    <p>28 May, 2025</p>
                    <h1>
                      Orascom Construction Reports Backlog of USD 8.7 Billion
                      and Revenue of USD 847.6 Million in Q1 2025
                    </h1>
                  </figcaption>
                </figure>
              </Link>
              <Link
                className={`${styles.articleUnit} swiper-slide article-unit`}
                href="/about"
                data-hover="Read"
                data-mode="light"
              >
                <figure>
                  <div
                    className={`${styles.unitsUnitImage} units-unit-image`}
                    data-hover="Read"
                    data-mode="light"
                  >
                    <img
                      alt="Red Sea Wind Farm"
                      src="https://images.unsplash.com/photo-1497436072909-f5e4be375bc6?ixlib=rb-4.0.3&w=310&h=400&fit=crop"
                    />
                  </div>
                  <figcaption
                    className={`${styles.articleUnitData} article-unit-data`}
                    data-hover="Read"
                  >
                    <p>15 April, 2025</p>
                    <h1>
                      Orascom Construction-ENGIE-TTC-Eurus Consortium Begins
                      Commercial Operations of 500 MW at Red Sea Wind Farm in
                      Egypt 6 Months Ahead of Schedule
                    </h1>
                  </figcaption>
                </figure>
              </Link>
              <Link
                className={`${styles.articleUnit} swiper-slide article-unit`}
                href="/about"
                data-hover="Read"
                data-mode="light"
              >
                <figure>
                  <div
                    className={`${styles.unitsUnitImage} units-unit-image`}
                    data-hover="Read"
                    data-mode="light"
                  >
                    <img
                      alt="FY 2024 Results"
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&w=310&h=400&fit=crop"
                    />
                  </div>
                  <figcaption
                    className={`${styles.articleUnitData} article-unit-data`}
                    data-hover="Read"
                  >
                    <p>26 March, 2025</p>
                    <h1>
                      Orascom Construction Reports Backlog of USD 7.6 Billion
                      and Revenue of USD 3.3 Billion in FY 2024
                    </h1>
                  </figcaption>
                </figure>
              </Link>
              <Link
                className={`${styles.articleUnit} swiper-slide article-unit`}
                href="/about"
                data-hover="Read"
                data-mode="light"
              >
                <figure>
                  <div
                    className={`${styles.unitsUnitImage} units-unit-image`}
                    data-hover="Read"
                    data-mode="light"
                  >
                    <img
                      alt="Orascom Construction and Técnicas Reunidas"
                      src="https://images.unsplash.com/photo-1497436072909-f5e4be375bc6?ixlib=rb-4.0.3&w=310&h=400&fit=crop"
                    />
                  </div>
                  <figcaption
                    className={`${styles.articleUnitData} article-unit-data`}
                    data-hover="Read"
                  >
                    <p>24 March, 2025</p>
                    <h1>
                      Orascom Construction and Técnicas Reunidas to Build 1.4 GW
                      Qurayyah IPP Extension in Saudi Arabia
                    </h1>
                  </figcaption>
                </figure>
              </Link>
              <Link
                className={`${styles.articleUnit} swiper-slide article-unit`}
                href="/about"
                data-hover="Read"
                data-mode="light"
              >
                <figure>
                  <div
                    className={`${styles.unitsUnitImage} units-unit-image`}
                    data-hover="Read"
                    data-mode="light"
                  >
                    <img
                      alt="American University in Cairo Campus"
                      src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&w=310&h=400&fit=crop"
                    />
                  </div>
                  <figcaption
                    className={`${styles.articleUnitData} article-unit-data`}
                    data-hover="Read"
                  >
                    <p>24 February, 2025</p>
                    <h1>
                      Orascom Construction to Build the New American University
                      in Cairo Campus
                    </h1>
                  </figcaption>
                </figure>
              </Link>
              <Link
                className={`${styles.articleUnit} swiper-slide article-unit`}
                href="/about"
                data-hover="Read"
                data-mode="light"
              >
                <figure>
                  <div
                    className={`${styles.unitsUnitImage} units-unit-image`}
                    data-hover="Read"
                    data-mode="light"
                  >
                    <img
                      alt="New Alamein City"
                      src="https://images.unsplash.com/photo-1497436072909-f5e4be375bc6?ixlib=rb-4.0.3&w=310&h=400&fit=crop"
                    />
                  </div>
                  <figcaption
                    className={`${styles.articleUnitData} article-unit-data`}
                    data-hover="Read"
                  >
                    <p>09 January, 2025</p>
                    <h1>
                      Orascom Construction Consortium Begins First Phase of New
                      Alamein City Development
                    </h1>
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className={styles.centerDiv}>
              <div className="row no-gutters align-items-md-start mt-5 mb-5 pb-5">
                <div className="col-8 col-xlg-10 offset-0 offset-lg-2 offset-lg-1 d-flex justify-content-left justify-content-lg-center">
                  <Link className={`${styles.cta} cta secondary`} href="/about">
                    <span>Explore Newsroom</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className={`${styles.homeServices} home-services`}
          id="home-services"
        >
          <div className={styles.centerDiv}>
            <div
              className={`${styles.sectionData} section-data`}
              id="services-data"
            >
              <h1>
                <span>what we do</span>
              </h1>
              <h2>Our Services</h2>
            </div>
            <div className={styles.homeServicesContent}>
              <div className={styles.homeServicesContentImage}>
                <img
                  alt="Services Background"
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&w=1400&h=520&fit=crop"
                />
              </div>
              <ul className={styles.homeServicesUnits}>
                <li>
                  <h1>Infrastructure</h1>
                  <Link href="/services" />
                </li>
                <li>
                  <h1>Power & Energy</h1>
                  <Link href="/services" />
                </li>
                <li>
                  <h1>Industrial</h1>
                  <Link href="/services" />
                </li>
                <li>
                  <h1>Commercial</h1>
                  <Link href="/services" />
                </li>
                <li>
                  <h1>Residential</h1>
                  <Link href="/services" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section
          className={`${styles.featuredProjects} featured-projects dark`}
          id="featured-projects"
        >
          <div className={styles.centerDiv}>
            <div
              className={`${styles.sectionData} section-data`}
              id="featured-projects-data"
            >
              <h1>
                <span>featured projects</span>
              </h1>
              <h2>Our Work</h2>
            </div>
          </div>
          <div className={styles.projectsSlider}>
            <div className="swiper-wrapper">
              {featuredProjects.map((project) => (
                <Link
                  className={styles.projectUnit}
                  href={project.href}
                  key={project.title}
                >
                  <img alt={project.title} src={project.image} />
                  <div className={styles.projectUnitDataHolder}>
                    <h1>{project.title}</h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.centerDiv}>
            <div className="row no-gutters align-items-md-start mt-5 mb-5 pb-5">
              <div className="col-8 col-xlg-10 offset-0 offset-lg-2 offset-lg-1 d-flex justify-content-left justify-content-lg-center">
                <Link className={`${styles.cta} cta white`} href="/projects">
                  <span>View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
