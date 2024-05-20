// pages/blog/csr.js
import axios from 'axios';
import { useState, useEffect } from 'react';

const CSR = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_URL);
      setCharacters(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CSR;
