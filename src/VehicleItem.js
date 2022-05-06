import React from 'react';

export default function VehicleItem({ vehicle }) {
  return (
    <div className='vehicle-item'>
      <p>{vehicle.name}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <p>Wheels: {vehicle.wheels}</p>
      <p>Purpose: {vehicle.purpose}</p>
    </div>
  );
}
