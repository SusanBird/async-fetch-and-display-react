import React from 'react';

export default function CandiesList({ candies }) {
  return <div className='candies-list'>
    {
      candies.map(candy =>
        <div className="candies" key={candy.name + candy.pieces + candy.texture + candy.color}>
          <p>{candy.name}</p>
          <p>{candy.pieces}</p>
          <p>{candy.texture}</p>
          <p>{candy.color}</p>
        </div>
      )
    }
  </div>;
}

