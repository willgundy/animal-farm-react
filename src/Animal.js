import React from 'react';

export default function Animal({ animal }) {
  return (
    <div className='animal flex-row' style={{ paddingTop:animal.topMargin }}>
      <img src={`animals/${animal.type}.svg`}/>
      <h3>{animal.name}</h3>
      <p>{animal.says}</p>
    </div>
  );
}
