import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { asset } from "@/utils/assets";
import "./NewArrivals.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Anarkali Suit",
    price: 3499,
    image:
      asset("/assets/images/misc/pic (1).jpeg"),
  },
  {
    id: 2,
    name: "Palazzo Co-ord Set",
    price: 2899,
    image:
      asset("/assets/images/misc/pic (2).jpeg"),
  },
  {
    id: 3,
    name: "Patiala Suit",
    price: 2199,
    image:
      asset("/assets/images/misc/pic (5).jpeg"),
  },
  {
    id: 4,
    name: "Kurti with Sharara",
    price: 3199,
    image:
      asset("/assets/images/misc/pic (6).jpeg"),
  },
  {
    id: 5,
    name: "Straight Cut Suit",
    price: 2599,
    image:
      asset("/assets/images/misc/pic (7).jpeg"),
  },
  {
    id: 6,
    name: "Printed Co-ord Set",
    price: 2799,
    image:
      asset("/assets/images/misc/pic (8).jpeg"),
  },
];

const NewArrivals: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section
      ref={sectionRef}
      className={`new-arrivals ${isVisible ? "is-visible" : ""}`}
    >
      {/* Header */}
      <header className="new-arrivals__header">
        <div className="new-arrivals__header-content">
          <span className="new-arrivals__label">New Collection</span>
          <h2 className="new-arrivals__title serif">New Arrivals</h2>
        </div>

        <div className="new-arrivals__nav">
          <button
            className="new-arrivals__arrow"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="new-arrivals__arrow"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Swiper */}
      <Swiper
        modules={[FreeMode, Mousewheel, Scrollbar]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.5,
          momentumBounce: false,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        scrollbar={{
          el: ".new-arrivals__scrollbar",
          draggable: true,
          hide: false,
        }}
        grabCursor={true}
        className="new-arrivals__swiper"
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={product.id}
            className="new-arrivals__slide"
            style={{ "--i": index } as React.CSSProperties}
          >
            <a href="#" className="new-arrivals__card">
              <div className="new-arrivals__card-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="new-arrivals__card-info">
                <h3 className="new-arrivals__card-name serif">
                  {product.name}
                </h3>
                <span className="new-arrivals__card-price">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scrollbar */}
      <div className="new-arrivals__scrollbar-wrap">
        <div className="new-arrivals__scrollbar"></div>
      </div>

      {/* Footer */}
      <div className="new-arrivals__footer">
        <a href="#" className="new-arrivals__link">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default NewArrivals;
