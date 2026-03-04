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
      // Controls for video expansion behavior.
      // Tune these values to adjust how the video grows.
      const expandConfig = {
        targetWidthVw: 62, // final container width in vw
        verticalScale: 1.1, // subtle top/bottom growth, centered
        rightPadding: 16, // px padding from viewport right edge
        contentGap: 16, // min gap from content
        clampToContent: false, // allow stronger growth; content remains visible above video
        scrollDistance: '+=150%',
      };

      const wrapperRect = videoWrapper.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const contentRect = heroLeft.getBoundingClientRect();

      // Grow inside a right-anchored wrapper (no horizontal translation).
      const preferredTargetWidth = viewportWidth * (expandConfig.targetWidthVw / 100);
      const currentRight = wrapperRect.left + wrapperRect.width;
      const minLeft = contentRect.right + expandConfig.contentGap;
      const maxAllowedWidthFromContent = currentRight - minLeft;
      const targetWidth = expandConfig.clampToContent
        ? Math.max(wrapperRect.width, Math.min(preferredTargetWidth, maxAllowedWidthFromContent))
        : preferredTargetWidth;
      const targetHeight = wrapperRect.height * expandConfig.verticalScale;
      const targetY = -((targetHeight - wrapperRect.height) / 2);

      // Initial states
      gsap.set([heroLeft, bgText, floatingImg1, floatingImg2, scrollHint], {
        opacity: 1,
        y: 0,
      });
      gsap.set(videoWrapper, {
        width: wrapperRect.width,
        height: wrapperRect.height,
        y: 0,
        transformOrigin: 'left center',
      });
      gsap.set(video, { opacity: 1 });

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: expandConfig.scrollDistance,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      heroTl.to(
        bgText,
        {
          opacity: 0,
          ease: 'power2.out',
        },
        0
      );

      heroTl.to(
        floatingImg1,
        {
          opacity: 0,
          y: -30,
          scale: 0.85,
          ease: 'power2.out',
        },
        0
      );

      heroTl.to(
        floatingImg2,
        {
          opacity: 0,
          y: 30,
          scale: 0.85,
          ease: 'power2.out',
        },
        0
      );

      heroTl.to(
        scrollHint,
        {
          opacity: 0,
          y: 20,
          ease: 'power2.out',
        },
        0
      );

      // Keep video visible and scale its wrapper for the expansion effect.
      heroTl.to(
        videoWrapper,
        {
          y: targetY,
          width: targetWidth,
          height: targetHeight,
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
          <div className="hero-tag">Spring / Summer 2024</div>
          <h1 className="hero-title">
            <span>
              <em>Effortless</em>
            </span>
            <span>
              <em>Modern</em>
            </span>
            <span>
              <em>Elegance</em>
            </span>
          </h1>
          <div className="hero-right-content">
            <p className="hero-desc">
              Discover a curated collection of timeless pieces designed for the
              modern woman who values both style and substance.
            </p>
            <a href="#" className="hero-cta">
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
              poster="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop"
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
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop"
          alt="Fashion"
        />
      </div>
      <div className="hero-floating-img hero-floating-2" ref={floatingImg2Ref}>
        <img
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop"
          alt="Fashion"
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
