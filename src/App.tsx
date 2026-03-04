import { useEffect } from 'react';
import CustomCursor from './components/common/CustomCursor/CustomCursor';
import Navigation from './components/common/Navigation/Navigation';
import Hero from './components/sections/Hero/Hero';
import Marquee from './components/sections/Marquee/Marquee';
import Categories from './components/sections/Categories/Categories';
import Editorial from './components/sections/Editorial/Editorial';
import Products from './components/sections/Products/Products';
import Story from './components/sections/Story/Story';
import Testimonials from './components/sections/Testimonials/Testimonials';
import Instagram from './components/sections/Instagram/Instagram';
import Newsletter from './components/sections/Newsletter/Newsletter';
import Footer from './components/sections/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const fadeElements = document.querySelectorAll(
      '.category-card, .product-card, .story-img, .testimonial-content'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    fadeElements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
      element.style.transition = `all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) ${index * 0.1}s`;
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee />
      <Categories />
      <Editorial />
      <Products />
      <Story />
      <Testimonials />
      <Instagram />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
