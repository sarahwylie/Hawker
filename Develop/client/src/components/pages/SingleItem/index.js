import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import Hawker from '../../../assets/images/icons/Hawker.svg';
import '../../../assets/css/Singleitem.css';

function SingleItem() {
  

  return (
    <body>
        <div>
          <h2>Single Item</h2>
        </div>
      <div>
        <img src='../../../assets/images/tech/keyboard_mouse.jpg'></img>
        <p>lorem itsum </p>
      </div>
      <button>Back to Items</button>
      <button>Buy Me</button>
    </body>
  );

}

export default SingleItem;
