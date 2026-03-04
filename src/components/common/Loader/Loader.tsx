import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isHidden ? 'hidden' : ''}`}>
      <div className="loader-text">
        {['M', 'A', 'I', 'S', 'O', 'N'].map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
