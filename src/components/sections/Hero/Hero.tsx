import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const floatingImg1Ref = useRef<HTMLDivElement>(null);
  const floatingImg2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !videoRef.current || !contentRef.current || !videoWrapperRef.current) return;

    const hero = heroRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    // Set initial state - ensure video is visible
    gsap.set(video, {
      scale: 1,
      opacity: 1,
    });

    // Main scroll animation timeline with PIN
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=200%', // Scroll distance for animation
        scrub: true, // Smooth scrubbing tied to scroll
        pin: true, // Pin the hero section
        pinSpacing: true,
      },
    });

    // Fade out content
    mainTl.to(
      content,
      {
        opacity: 0,
        y: 50,
        ease: 'power2.out',
      },
      0
    );

    // Fade out background text
    if (bgTextRef.current) {
      mainTl.to(
        bgTextRef.current,
        {
          opacity: 0,
          ease: 'power2.out',
        },
        0
      );
    }

    // Fade out floating images
    if (floatingImg1Ref.current) {
      mainTl.to(
        floatingImg1Ref.current,
        {
          opacity: 0,
          scale: 0.8,
          ease: 'power2.out',
        },
        0
      );
    }

    if (floatingImg2Ref.current) {
      mainTl.to(
        floatingImg2Ref.current,
        {
          opacity: 0,
          scale: 0.8,
          ease: 'power2.out',
        },
        0
      );
    }

    // Scale video smoothly from 1 to 2.5
    mainTl.to(
      video,
      {
        scale: 2.5,
        ease: 'power2.out',
      },
      0
    );

    // Separate ScrollTrigger for fullscreen transition
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=200%',
      scrub: true,
      onUpdate: (self: ScrollTrigger) => {
        const progress = self.progress;

        if (progress > 0.6) {
          // Transition to fullscreen - unpin at this point
          const fullscreenProgress = (progress - 0.6) / 0.4; // 0 to 1 from 60% to 100%
          
          gsap.set(video, {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999,
            objectFit: 'cover',
          });

          // Continue scaling in fullscreen - keep opacity at 1
          const finalScale = 2.5 + fullscreenProgress * 0.5;
          gsap.set(video, {
            scale: finalScale,
            opacity: 1, // Keep video fully visible
          });
        } else {
          // Keep video in container - maintain full opacity
          gsap.set(video, {
            position: 'relative',
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 1, // Always keep video visible
          });
        }
      },
    });

    return () => {
      // Clean up all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg-text" ref={bgTextRef}>Élégance</div>

      <div className="hero-content" ref={contentRef}>
        <div className="hero-left">
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

      <div className="scroll-hint">
        <span className="scroll-line"></span>
        <span>Scroll to discover</span>
      </div>
    </section>
  );
};

export default Hero;
