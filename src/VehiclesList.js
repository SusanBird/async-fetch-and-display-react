import React from 'react';
import VehicleItem from './VehicleItem';

export default function VehiclesList({ vehicles }) {
  return (
    <div className='vehicles-list'>
      {vehicles.map((vehicle, i) => 
        <VehicleItem key={vehicle + i} vehicle={vehicle} />
      )}{''}
    </div>
  );
}

