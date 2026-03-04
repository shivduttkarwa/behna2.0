import './Editorial.css';

const Editorial = () => {
  return (
    <section className="editorial">
      <div className="editorial-wrapper">
        <div className="editorial-left">
          <span className="editorial-tag">The New Collection</span>
          <h2 className="editorial-title">
            Where Art Meets
            <em>Fashion</em>
          </h2>
          <p className="editorial-text">
            Our Spring/Summer collection draws inspiration from contemporary art
            galleries and Mediterranean architecture. Each piece tells a story
            of minimalist beauty and refined craftsmanship.
          </p>
          <a href="#" className="btn-outline">
            Discover the Story
            <span>→</span>
          </a>
        </div>
        <div className="editorial-right">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop"
            alt="Editorial"
            className="editorial-image"
          />
          <div className="editorial-badge">
            <span>New</span>
            <strong>SS24</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
