import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import data from './db.json';

function App() {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState(data.pets);

  const onChangeType = (newType) => {
    setFilters({ ...filters, type: newType });
  };

  const onFindPetsClick = () => {
    const filteredPets = filters.type === 'all' ? pets : pets.filter((pet) => pet.type === filters.type);
    setPets(filteredPets);
  };

  const onAdoptPet = (petId) => {
    const updatedPets = pets.map((pet) =>
      pet.id === petId ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  return (
    <div>
      <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
      <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
    </div>
  );
}

export default App;