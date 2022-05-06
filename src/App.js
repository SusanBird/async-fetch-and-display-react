// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getCandies } from './services/fetch-utils';
import { useState } from 'react';


// import your arrays here

// console.log(process.env);

function App() {

  const [candies, setCandies] = useState([]);
 
  useEffect(async () => {
    const candiesResponse = await getCandies();

    setCandies(candiesResponse);
  }, []);

  return (
    <div className="App">
      <div className='candies-list'>
        {candies.map(candy =>
          <div className='candies' key={candy.name + candy.pieces + candy.texture + candy.color}>
            <p>{candy.name}</p>
            <p>{candy.pieces}</p>
            <p>{candy.texture}</p>
            <p>{candy.color}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
