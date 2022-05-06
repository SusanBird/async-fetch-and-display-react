import React from 'react';

export default function CandyItem({ candy }) {
  return (
    <div className='candy-item'>
      <p>{candy.name}</p>
      <p>Pieces: {candy.pieces}</p>
      <p>Texture: {candy.texture}</p>
      <p>Color: {candy.color}</p>
    </div>
  );
}

