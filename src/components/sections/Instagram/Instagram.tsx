import { InstagramPost } from '@/types';
import './Instagram.css';

const Instagram = () => {
  const posts: InstagramPost[] = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=400&fit=crop',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=400&fit=crop',
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="instagram">
      <div className="instagram-header">
        <div className="instagram-handle">
          <a href="#">@behna</a>
        </div>
        <p style={{ color: 'var(--taupe)', letterSpacing: '0.1em' }}>
          Follow our journey
        </p>
      </div>

      <div className="instagram-grid">
        {posts.map((post) => (
          <div key={post.id} className="instagram-item">
            <img src={post.image} alt="Instagram" />
            <div className="instagram-overlay">
              <span className="instagram-icon">❤</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
