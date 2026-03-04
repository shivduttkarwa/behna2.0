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
    if (!floatingImg1Ref.current || !floatingImg2Ref.current || !bgTextRef.current) return;

    const hero = heroRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    const floatingImg1 = floatingImg1Ref.current;
    const floatingImg2 = floatingImg2Ref.current;
    const bgText = bgTextRef.current;

    // Kill any existing animations first
    gsap.killTweensOf([video, content, bgText, floatingImg1, floatingImg2]);

    // Set initial states - CRITICAL: Content must start visible
    gsap.set(video, { scale: 1, opacity: 1 });
    gsap.set(content, { opacity: 1, y: 0 });
    gsap.set(bgText, { opacity: 1 });
    gsap.set(floatingImg1, { opacity: 1 });
    gsap.set(floatingImg2, { opacity: 1 });

    // Lock video opacity permanently via inline style
    video.style.opacity = '1';
    video.style.setProperty('opacity', '1', 'important');

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=200%',
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: (self: ScrollTrigger) => {
        const progress = self.progress;
        
        // ALWAYS force video opacity to 1 - multiple methods to ensure it sticks
        video.style.opacity = '1';
        video.style.setProperty('opacity', '1', 'important');
        
        // Handle fullscreen transition at 60% progress
        if (progress > 0.6) {
          const fullscreenProgress = (progress - 0.6) / 0.4;
          
          // Transition video to fixed fullscreen
          video.style.position = 'fixed';
          video.style.top = '0';
          video.style.left = '0';
          video.style.width = '100vw';
          video.style.height = '100vh';
          video.style.zIndex = '999';
          video.style.objectFit = 'cover';
          video.style.opacity = '1';
          video.style.setProperty('opacity', '1', 'important');

          // Continue scaling in fullscreen
          const finalScale = 2.5 + fullscreenProgress * 0.5;
          gsap.set(video, { scale: finalScale });
        } else {
          // Keep video in container
          video.style.position = 'relative';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.zIndex = '1';
          video.style.opacity = '1';
          video.style.setProperty('opacity', '1', 'important');
        }
      },
    });

    // Create unified timeline
    const heroTl = gsap.timeline({
      scrollTrigger: scrollTrigger,
    });

    // Fade out content - explicitly set from and to states
    heroTl.fromTo(content, {
      opacity: 1,
      y: 0,
    }, {
      opacity: 0,
      y: 50,
      ease: 'power2.out',
    }, 0);

    // Fade out background text
    heroTl.fromTo(bgText, {
      opacity: 1,
    }, {
      opacity: 0,
      ease: 'power2.out',
    }, 0);

    // Fade out floating images completely
    heroTl.fromTo(floatingImg1, {
      opacity: 1,
      scale: 1,
      y: 0,
    }, {
      opacity: 0,
      scale: 0.8,
      y: -30,
      ease: 'power2.out',
    }, 0);

    heroTl.fromTo(floatingImg2, {
      opacity: 1,
      scale: 1,
      y: 0,
    }, {
      opacity: 0,
      scale: 0.8,
      y: 30,
      ease: 'power2.out',
    }, 0);

    // Scale video - opacity handled separately via inline styles
    heroTl.fromTo(video, {
      scale: 1,
    }, {
      scale: 2.5,
      ease: 'power2.out',
      onUpdate: () => {
        // Continuously force opacity to 1 during animation
        video.style.opacity = '1';
        video.style.setProperty('opacity', '1', 'important');
      },
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
      gsap.killTweensOf([video, content, bgText, floatingImg1, floatingImg2]);
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
