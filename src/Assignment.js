import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Assignment() {
  const [results, setResults] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [second, setSecond] = useState();
  
  let tCount = 0;
  const count = (array) => {
      for (let i in array) {
          if (Array.isArray(array[i])) {
              count(array[i]);
          } else {
            tCount++;
          }
      }
  };


  function secondF() {
    let mf = 1;
    let m = 0;
    let item;
    for (let i=0; i<results.length; i++)
    {
       for (let j=i; j<results.length; j++)
          {
                  if (results[i] === results[j])
                  m++;
                  if (mf<m)
                  {
                  mf=m; 
                  item = results[i];
                  }
          }
          m=0;
    }
    return item;
  };

  useEffect(() => {
    axios.get('https://nodes-on-nodes-challenge.herokuapp.com/nodes/089ef556-dfff-4ff2-9733-654645be56fe')
    .then(function (response) {
      setResults([...response.data]);
      setIsMounted(true);
      count(results)
      setSecond(secondF());
    });
  }, []);
  


  return (
   isMounted && (
        <>
        {/* What is the total number of unique nodes? */}
        <div>COUNT</div>{tCount}
        {/* Which node ID is shared the most among all other nodes */}
        <div>NODE</div>{second}
        </>
    )
  );
}
