// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getCandies, getCats } from './services/fetch-utils';
import { useState } from 'react';
import CandiesList from './CandiesList';
import CatsList from './CatsList';


// import your arrays here

// console.log(process.env);

function App() {

  const [candies, setCandies] = useState([]);
  const [cats, setCats] = useState([]);
 
  useEffect(async () => {
    const candiesResponse = await getCandies();
    const catsResponse = await getCats();

    setCandies(candiesResponse);
    setCats(catsResponse);
  }, []);

  return (
    <div className="App">
      {
        <CandiesList candies={candies} />
      }
      {
        <CatsList cats={cats} />
      }
    
    </div>
  );
}

export default App;
