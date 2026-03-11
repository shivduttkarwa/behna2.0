import { useEffect, useRef } from 'react';
import { asset } from '@/utils/assets';
import './Story.css';

const Story = () => {
  const storyImg1Ref = useRef<HTMLDivElement>(null);
  const storyImg2Ref = useRef<HTMLDivElement>(null);
  const storySectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!storySectionRef.current || !storyImg1Ref.current || !storyImg2Ref.current) return;

      const rect = storySectionRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;

      if (scrolled > 0 && rect.bottom > 0) {
        storyImg1Ref.current.style.transform = `translateY(${scrolled * 0.05}px)`;
        storyImg2Ref.current.style.transform = `translateY(${-scrolled * 0.03}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="story" ref={storySectionRef}>
      <div className="story-bg-text">Story</div>
      <div className="story-wrapper">
        <div className="story-images">
          <div className="story-img story-img-1" ref={storyImg1Ref}>
            <img
              src={asset('/assets/images/misc/pic (10).jpeg')}
              alt="Our Story"
            />
          </div>
          <div className="story-img story-img-2" ref={storyImg2Ref}>
            <img
              src={asset('/assets/images/misc/pic (11).jpeg')}
              alt="Craftsmanship"
            />
          </div>
        </div>

        <div className="story-content">
          <span className="story-tag">Our Heritage</span>
          <h2 className="story-title">Crafting Timeless Elegance Since 1987</h2>
          <p className="story-text">
            Founded in the heart of Paris, Behna has been redefining
            contemporary luxury for over three decades. Our commitment to
            exceptional craftsmanship and sustainable practices has made us a
            destination for women who appreciate quality and understated
            elegance.
          </p>
          <p className="story-text">
            Each piece is thoughtfully designed and meticulously crafted in our
            Italian ateliers, using only the finest ethically-sourced materials.
          </p>

          <div className="story-stats">
            <div className="stat">
              <div className="stat-number">37+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Global Boutiques</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Sustainable Materials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
