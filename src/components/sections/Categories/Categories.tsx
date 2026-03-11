import { Category } from '@/types';
import { asset } from '@/utils/assets';
import './Categories.css';

const Categories = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Dresses',
      image: asset('/assets/images/misc/pic (9).jpeg'),
      count: 124,
    },
    {
      id: '2',
      name: 'Outerwear',
      image: asset('/assets/images/misc/pic (10).jpeg'),
      count: 86,
    },
    {
      id: '3',
      name: 'Knitwear',
      image: asset('/assets/images/misc/pic (11).jpeg'),
      count: 58,
    },
    {
      id: '4',
      name: 'Tailoring',
      image: asset('/assets/images/misc/pic (12).jpeg'),
      count: 92,
    },
    {
      id: '5',
      name: 'Accessories',
      image: asset('/assets/images/misc/pic (13).jpeg'),
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
