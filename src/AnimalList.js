import React from 'react';
import Animal from './Animal';

export default function AnimalList({ animals }) {
  return (
    <div className='flex-row container'>
      {animals.map((animal, i) => 
        <Animal key={i} animal={animal} />
      )}
    </div>
  );
}
