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
        <span className="nav-icon">Search</span>
        <span className="nav-icon">Account</span>
        <span className="nav-icon">
          Bag<span className="cart-count">2</span>
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
