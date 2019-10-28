import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

import { useState, useEffect } from 'react';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [peopleState, setPeopleState] = useState([]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(()=> {
  axios
    .get('http://swapi.co.api/people/1')
      .then(res => setPeopleState(res))
      .catch(err => console.error(err))
  ;
}, [peopleState]);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
