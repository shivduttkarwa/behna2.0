import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroLeftRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const floatingImg1Ref = useRef<HTMLDivElement>(null);
  const floatingImg2Ref = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !videoRef.current ||
      !contentRef.current ||
      !heroLeftRef.current ||
      !videoWrapperRef.current ||
      !bgTextRef.current ||
      !floatingImg1Ref.current ||
      !floatingImg2Ref.current ||
      !scrollHintRef.current
    ) {
      return;
    }

    const hero = heroRef.current;
    const video = videoRef.current;
    const heroLeft = heroLeftRef.current;
    const videoWrapper = videoWrapperRef.current;
    const bgText = bgTextRef.current;
    const floatingImg1 = floatingImg1Ref.current;
    const floatingImg2 = floatingImg2Ref.current;
    const scrollHint = scrollHintRef.current;

    const ctx = gsap.context(() => {
      gsap.set([heroLeft, bgText, floatingImg1, floatingImg2, scrollHint], {
        opacity: 1,
        y: 0,
      });
      gsap.set(video, { opacity: 1 });

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
          pinSpacing: true,
          // invalidateOnRefresh recalculates all functional tween values on every
          // ScrollTrigger.refresh() (which GSAP fires automatically on window resize).
          invalidateOnRefresh: true,
        },
      });

      heroTl.to(floatingImg1, { opacity: 0, y: -30, scale: 0.85, ease: 'power2.out' }, 0);
      heroTl.to(floatingImg2, { opacity: 0, y: 30, scale: 0.85, ease: 'power2.out' }, 0);
      heroTl.to(scrollHint, { opacity: 0, y: 20, ease: 'power2.out' }, 0);

      // fromTo with arrow-function values: both start and end are re-read on every resize.
      heroTl.fromTo(
        videoWrapper,
        {
          // Start: natural CSS width of the wrapper (right grid column, 100% of hero-center).
          width: () => videoWrapper.offsetWidth,
        },
        {
          // End: 62% of current viewport width — consistent expansion ratio on every screen.
          width: () => window.innerWidth * 0.62,
          ease: 'power2.inOut',
        },
        0
      );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg-text" ref={bgTextRef}>Élégance</div>

      <div className="hero-content" ref={contentRef}>
        <div className="hero-left" ref={heroLeftRef}>
          <div className="hero-tag">Rajasthan's Finest</div>
          <h1 className="hero-title">
            <span>Traditional</span>
            <span>Elegance</span>
            <span className="hero-title-accent">Redefined</span>
          </h1>
          <div className="hero-right-content">
            <p className="hero-desc">
              Premium women's clothing in Rajasthan. From elegant suits and co-ord sets to 
              beautiful kurtis, stunning lehengas, and bespoke boutique creations. 
              Plus sizes available. Crafted with love for the modern Indian woman.
            </p>
            <a href="#collections" className="hero-cta">
              <span>Explore Collection</span>
              <span className="hero-cta-line"></span>
            </a>
          </div>
        </div>

        <div className="hero-center">
          <div className="hero-video-wrapper" ref={videoWrapperRef}>
            <div className="hero-video-overlay"></div>
            <video
              ref={videoRef}
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/assets/images/misc/pic (1).jpeg"
            >
              <source
                src="/assets/videos/hero.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="hero-floating-img hero-floating-1" ref={floatingImg1Ref}>
        <img
          src="/assets/images/hero/poster-1.jpeg"
          alt="Indian woman wearing saree"
        />
      </div>
      <div className="hero-floating-img hero-floating-2" ref={floatingImg2Ref}>
        <img
          src="/assets/images/hero/poster-2.jpeg"
          alt="Indian woman wearing traditional lehenga"
        />
      </div>

      <div className="scroll-hint" ref={scrollHintRef}>
        <span className="scroll-line"></span>
        <span>Scroll to discover</span>
      </div>
    </section>
  );
};

export default Hero;
