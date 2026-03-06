import { useState } from 'react';
import { Product } from '@/types';
import './Products.css';

const Products = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'New Arrivals', 'Best Sellers', "Editor's Pick"];

  const products: Product[] = [
    {
      id: '1',
      name: 'Silk Blend Blazer',
      price: 890,
      primaryImage:
        '/assets/images/misc/pic (14).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (15).jpeg',
      colors: ['#0a0a0a', '#E8E3D8', '#8B7355'],
      tag: 'new',
    },
    {
      id: '2',
      name: 'Oversized Linen Shirt',
      price: 320,
      primaryImage:
        '/assets/images/misc/pic (16).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (17).jpeg',
      colors: ['#FFFFFF', '#D4CFC6'],
    },
    {
      id: '3',
      name: 'Cashmere Wrap Coat',
      price: 1155,
      originalPrice: 1650,
      primaryImage:
        '/assets/images/misc/pic (18).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (19).jpeg',
      colors: ['#2C2C2C', '#8B6914'],
      tag: 'sale',
    },
    {
      id: '4',
      name: 'Pleated Midi Dress',
      price: 580,
      primaryImage:
        '/assets/images/misc/pic (20).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (21).jpeg',
      colors: ['#0a0a0a', '#8B0000'],
    },
    {
      id: '5',
      name: 'Merino Wool Cardigan',
      price: 420,
      primaryImage:
        '/assets/images/misc/pic (22).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (23).jpeg',
      colors: ['#E8E3D8', '#4A4A4A'],
      tag: 'new',
    },
    {
      id: '6',
      name: 'High-Waist Trousers',
      price: 380,
      primaryImage:
        '/assets/images/misc/pic (24).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (25).jpeg',
      colors: ['#0a0a0a', '#2C2C2C', '#D4CFC6'],
    },
    {
      id: '7',
      name: 'Structured Wool Coat',
      price: 1280,
      primaryImage:
        '/assets/images/misc/pic (26).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (27).jpeg',
      colors: ['#8B6914', '#0a0a0a'],
    },
    {
      id: '8',
      name: 'Silk Camisole Top',
      price: 220,
      primaryImage:
        '/assets/images/misc/pic (28).jpeg',
      secondaryImage:
        '/assets/images/misc/pic (1).jpeg',
      colors: ['#FFFFFF', '#0a0a0a', '#8B0000'],
    },
  ];

  return (
    <section className="products">
      <div className="products-header">
        <h2 className="section-title serif">Curated Selection</h2>
        <p className="products-subtitle">
          Handpicked essentials that define modern luxury. Timeless designs meet
          exceptional quality.
        </p>
      </div>

      <div className="products-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              {product.tag && (
                <span className={`product-tag ${product.tag}`}>
                  {product.tag === 'new' ? 'New' : 'Sale'}
                </span>
              )}
              <img
                src={product.primaryImage}
                alt={product.name}
                className="product-image primary"
              />
              <img
                src={product.secondaryImage}
                alt={`${product.name} Hover`}
                className="product-image secondary"
              />
              <div className="product-actions">
                <button className="action-btn">Quick Add</button>
                <button className="action-btn">♡</button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                {product.originalPrice ? (
                  <>
                    <span className="original">€{product.originalPrice.toLocaleString()}</span>
                    <span className="sale">€{product.price.toLocaleString()}</span>
                  </>
                ) : (
                  <>€{product.price.toLocaleString()}</>
                )}
              </div>
              <div className="product-colors">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="color-dot"
                    style={{
                      background: color,
                      borderColor: color === '#FFFFFF' ? '#ccc' : undefined,
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
