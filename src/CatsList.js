import React from 'react';
import CatItem from './CatItem';

export default function CatsList({ cats }) {
  return (
    <div className='cats-list'>
      {cats.map((cat, i) =>
        <CatItem key={cat + i} cat={cat} />   
      )}{''}
    </div>
  );
}

