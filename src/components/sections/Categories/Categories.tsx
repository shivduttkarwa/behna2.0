import { Category } from '@/types';
import './Categories.css';

const Categories = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Dresses',
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=900&fit=crop',
      count: 124,
    },
    {
      id: '2',
      name: 'Outerwear',
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=400&fit=crop',
      count: 86,
    },
    {
      id: '3',
      name: 'Knitwear',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop',
      count: 58,
    },
    {
      id: '4',
      name: 'Tailoring',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=400&fit=crop',
      count: 92,
    },
    {
      id: '5',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=400&fit=crop',
      count: 156,
    },
  ];

  return (
    <section className="categories">
      <div className="section-header">
        <h2 className="section-title">
          Shop by
          <span>Category</span>
        </h2>
        <a href="#" className="section-link">
          View All Categories
          <span>→</span>
        </a>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count} PIECES</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
