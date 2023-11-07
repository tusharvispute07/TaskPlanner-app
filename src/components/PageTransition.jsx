import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      style={{
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;