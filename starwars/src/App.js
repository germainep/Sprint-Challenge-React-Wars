import React from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [peopleState, setPeopleState] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  axios
    .get("https://swapi.co/api/people")
    .then(res => setPeopleState(res.data.results))
    .catch(err => console.log(err));
}, []);

const peopleList = peopleState.map((person, index) => {
  return (
    <CharacterCard
      key={index}
      name={person.name}
      mass={person.mass}
      height={person.height}
    />
  );
});

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
