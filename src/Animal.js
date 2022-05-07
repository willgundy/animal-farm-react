import React from 'react';

export default function Animal(props) {
  return (
    <div className='flex-row container'>
      {props.animals.map((animal, i) => 
        <div key={i} className='animal' style={{ paddingTop:animal.topMargin }}>
          <img src={`animals/${animal.type}.svg`}/>
          <h3>{animal.name}</h3>
          <p>{animal.says}</p>
        </div>
      )}
    </div>
  );
}
