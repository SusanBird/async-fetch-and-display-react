// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getCandies, getCats, getVehicles, getSports } from './services/fetch-utils';
import { useState } from 'react';
import CandiesList from './CandiesList';
import CatsList from './CatsList';
import VehiclesList from './VehiclesList';
import SportsList from './SportsList';


// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [cats, setCats] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [sports, setSports] = useState([]);
 
  useEffect(async () => {
    const candiesResponse = await getCandies();
    const catsResponse = await getCats();
    const vehiclesResponse = await getVehicles();
    const sportsResponse = await getSports();

    setCandies(candiesResponse);
    setCats(catsResponse);
    setVehicles(vehiclesResponse);
    setSports(sportsResponse);
  }, []);

  return (
    <div className="App">
      {
        <CandiesList candies={candies} />
      }
      {
        <CatsList cats={cats} />
      }
      {
        <VehiclesList vehicles={vehicles} />
      }
      {
        <SportsList sports={sports} />
      }
    
    </div>
  );
}

export default App;
