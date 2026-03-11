import { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'New In', href: '#new' },
    { label: 'Collections', href: '#collections' },
    { label: 'Clothing', href: '#clothing' },
    { label: 'Accessories', href: '#accessories' },
    { label: 'Editorial', href: '#editorial' },
  ];

  return (
    <nav className={isScrolled ? 'scrolled' : ''} id="navbar">
      <a href="#" className="logo">
        BEHNA
      </a>
      <ul className="nav-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <span className="nav-icon" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <div className="menu-btn">
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
