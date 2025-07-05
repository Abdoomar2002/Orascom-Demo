"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register GSAP (if needed for animation)
if (typeof window !== "undefined") {
  gsap.registerPlugin();
}
import "swiper/css";
import "swiper/css/navigation";

const carouselData = [
  {
    id: 1,
    image: "/projects/project1.jpg",
    title: "Project Wave",
    link: "/projects/project-wave",
  },
  {
    id: 2,
    image: "/projects/project2.jpg",
    title: "Bahr El Baqr Wastewater Treatment Plant",
    link: "/projects/bahr-el-baqr",
  },
  {
    id: 3,
    image: "/projects/project3.jpg",
    title: "High-Speed Rail",
    link: "/projects/high-speed-rail",
  },
  {
    id: 4,
    image: "/projects/project4.jpg",
    title: "Grand Egyptian Museum",
    link: "/projects/grand-egyptian-museum",
  },
];

export default function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselData.length;

  useGSAP(() => {
    gsap.fromTo(
      ".slide-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out" }
    );
  });

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <section className="featured-projects-section py-5">
      <div className="container text-center mb-4">
        <h6 className="text-uppercase small text-muted">Featured Projects</h6>
        <h2 className="display-5 font-weight-bold">Our Work</h2>
      </div>

      <div className="position-relative px-md-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".projects-next",
            prevEl: ".projects-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={2}
          spaceBetween={40}
          onSlideChange={handleSlideChange}
          className="projects-swiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <a
                href={item.link}
                className="slide-item text-white text-decoration-none"
              >
                <div
                  className="bg-cover position-relative d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <h4 className="p-3 mb-0 font-weight-bold">{item.title}</h4>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex justify-content-between align-items-center mt-4 px-md-5">
          <div className="projects-prev cursor-pointer">
            <span>Prev.</span>
          </div>
          <a
            href="/projects"
            className="btn btn-outline-light text-uppercase px-4"
          >
            View All Projects
          </a>
          <div className="projects-next cursor-pointer">
            <span>Next</span>
          </div>
        </div>
      </div>
    </section>
  );
}
