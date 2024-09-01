import React from 'react';

function Pet({ pet, onAdoptPet }) {
  const genderSymbol = pet.gender === 'male' ? '♂' : '♀';

  return (
    <div>
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age}</p>
      <p>Weight: {pet.weight} lbs</p>
      <p>Gender: {genderSymbol}</p>
      {pet.isAdopted ? (
        <button disabled>Adopted</button>
      ) : (
        <button onClick={() => onAdoptPet(pet.id)}>Adopt</button>
      )}
    </div>
  );
}

export default Pet;