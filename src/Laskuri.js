import React, { useState, useEffect } from 'react';

const Laskuri = ()  => {
  const [ count, setCount ] = useState(1);

  useEffect(() => {
    console.log(count);
  });

  const increment = () => setCount(count + 1);

  return <p onClick={increment}>{ count }</p>;
}

export default Laskuri;


            
       
        
    


