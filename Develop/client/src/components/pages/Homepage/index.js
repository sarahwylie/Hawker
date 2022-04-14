import React from 'react';

import imagesData from './imagesData.js';

function Homepage() {
  return (
    <div>
      {imagesData.map((image, i) => (
        <a href="http://localhost:3000" key={i}>
          <div className="imageGrid">
            <img {...imagesData[i]} alt={imagesData[i].alt} width="25%" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Homepage;
