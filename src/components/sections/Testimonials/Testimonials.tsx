import { useState } from 'react';
import { Testimonial } from '@/types';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      text: 'Behna understands that true luxury lies in the details. Every piece I own from them has become a cherished part of my wardrobe.',
      author: {
        name: 'ALEXANDRA WEBB',
        title: 'Fashion Director, Vogue Paris',
        image:
          '/assets/images/misc/pic (12).jpeg',
      },
    },
  ];

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonial-content">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">{currentTestimonial.text}</p>
          <div className="testimonial-author">
            <img
              src={currentTestimonial.author.image}
              alt={currentTestimonial.author.name}
              className="author-image"
            />
            <div>
              <div className="author-name">{currentTestimonial.author.name}</div>
              <div className="author-title">
                {currentTestimonial.author.title}
              </div>
            </div>
          </div>
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`nav-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="testimonial-image">
          <img
            src="/assets/images/misc/pic (2).jpeg"
            alt="Testimonial"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
