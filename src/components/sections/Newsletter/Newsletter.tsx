import { FormEvent, useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter-bg">M</div>
      <div className="newsletter-wrapper">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join the Maison</h2>
          <p className="newsletter-text">
            Be the first to discover new collections, exclusive events, and
            curated style inspiration.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
