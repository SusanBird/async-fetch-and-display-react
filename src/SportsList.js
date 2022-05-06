import React from 'react';
import SportItem from './SportItem';

export default function SportsList({ sports }) {
  return (
    <div className='sports-list'>
      {sports.map((sport, i) => 
        <SportItem key={sport + i} sport={sport} />
      )}
    </div>
  );
}

