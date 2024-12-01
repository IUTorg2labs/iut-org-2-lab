import React from 'react';
import { Link } from 'react-router-dom';

//const compounds= await fetch("./compounds.json").then(r => r.json())
import compounds from '../compounds.json';
const Home = () => (
  
  <div style={{ textAlign: 'center' }}>
    <h1>Binguls and dinguls</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {compounds.map((compound) => (
        <li key={compound.id} style={{ margin: '10px 0' }}>
          <Link to={`/compound/${compound.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            {compound.id}- {compound.name}
          </Link>
        </li>
      ))}
    </ul>
    <p>Snatcher and Am Ghadre &#169;</p>
  </div>
);

export default Home;
