import React, { useState, useEffect } from 'react';

const Laskuri = ()  => {
  const [ pet, setPets ] = useState(1);

  useEffect(() => {
    console.log(pet);
  });

  const increment = () => setPets(pet + 1);

  return <p onClick={increment}>{ pet }</p>;
}

export default Laskuri;