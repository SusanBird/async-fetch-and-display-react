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
      <p>
        {JSON.stringify(candies)}
      </p>
    </div>
  );
}

export default App;
