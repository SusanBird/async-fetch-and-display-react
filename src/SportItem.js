import React from 'react';

export default function SportItem({ sport }) {
  return (
    <div className='sport-item'>
      <p>{sport.name}</p>
      <p>Players: {sport.players}</p>
      <p>Equipment: {sport.equipment}</p>
      <p>Location: {sport.location}</p>
    </div>
  );
}

