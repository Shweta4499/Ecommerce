import React from 'react';
import './BredCrums.css';
import arrow_icon from '../../assets/arrow_icon.png';

const Bredcrums = ({ product }) => {
  return (
    <div className='bredcrums'>
      <span>Home</span>
      <img src={arrow_icon} alt="arrow" height="10px" />
      <span>Shop</span>
      <img src={arrow_icon} alt="arrow" height="10px" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="arrow" height="10px" />
      <span>{product.name}</span>
    </div>
  );
};

export default Bredcrums;
