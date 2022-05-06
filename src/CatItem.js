import React from 'react';

export default function CatItem({ cat }) {

  return (
    <div className='cat-item'>
      <p>{cat.name}</p>
      <p>Color: {cat.color}</p>
      <p>Age: {cat.age}</p>
      <p>Legs: {cat.legs}</p>
    </div>
  );
}

