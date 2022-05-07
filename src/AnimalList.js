import React from 'react';
import Animal from './Animal';

export default function AnimalList(props) {
  return (
    <div className='flex-row'>
      <Animal 
        animals={props.animals}
      />
    </div>
  );
}
