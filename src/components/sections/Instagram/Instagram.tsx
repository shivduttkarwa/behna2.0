import { InstagramPost } from '@/types';
import { asset } from '@/utils/assets';
import './Instagram.css';

const Instagram = () => {
  const posts: InstagramPost[] = [
    {
      id: '1',
      image:
        asset('/assets/images/misc/pic (2).jpeg'),
    },
    {
      id: '2',
      image:
        asset('/assets/images/misc/pic (5).jpeg'),
    },
    {
      id: '3',
      image:
        asset('/assets/images/misc/pic (6).jpeg'),
    },
    {
      id: '4',
      image:
        asset('/assets/images/misc/pic (7).jpeg'),
    },
    {
      id: '5',
      image:
        asset('/assets/images/misc/pic (8).jpeg'),
    },
    {
      id: '6',
      image:
        asset('/assets/images/misc/pic (9).jpeg'),
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
