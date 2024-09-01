import React from 'react';

function Filters({ onChangeType, onFindPetsClick }) {
  return (
    <div>
      <label>Animal Type:</label>
      <select onChange={(event) => onChangeType(event.target.value)}>
        <option value="all">All</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="micropig">Micropig</option>
      </select>
      <button onClick={onFindPetsClick}>Find Pets</button>
    </div>
  );
}

export default Filters;