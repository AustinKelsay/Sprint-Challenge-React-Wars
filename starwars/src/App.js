import React, {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import Person from './components/Person';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [state, setState] = useState();

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then((res) => {
        console.log(res);
        setState(res);
    })
    .catch((err) => {
        console.log("ERROR" + err);
    })
}, []);
if (!state) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Person props={state}/> 
    </div>
  );
}

export default App;
