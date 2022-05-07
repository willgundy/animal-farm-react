import React from 'react';
import AnimalList from './AnimalList';

export default function Main(props) {
  return (
    <div className='main' style={{ backgroundImage: 'url("farm-background.png")' }}>
      <AnimalList 
        animals={props.animals}
      />
    </div>
  );
}
