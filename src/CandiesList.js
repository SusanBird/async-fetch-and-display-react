import React from 'react';
import CandyItem from './CandyItem.js';

export default function CandiesList({ candies }) {
  return (
    <div className='candies-list'>
      {candies.map((candy, i) => (
        <CandyItem key={candy + i} candy={candy} />
      ))}{''}
    </div>
  );
}