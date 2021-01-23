import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Person from "./Person";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// Exercies 2.6-2.10
// https://fullstackopen.com/zh/part2/%E8%A1%A8%E5%8D%95
const App = () => {
  const [persons, setPersons] = useState([{ name: 'hello too' }])
  const [newName, setNewName] = useState('')

  const handleNewName =(event) =>{
    event.preventDefault()
    console.log(event.target.value);
    setPersons(persons.concat(event.target.value))
    setNewName('')
  }

  const handleClick=() =>{

  }

  return (
    <div>
      <h2>PhoneBook</h2>
      <form>
        <div>
          name: <input type="text" value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=><Person key={person} person={person}></Person>)}
      </ul>
    </div>
  )
}

export default App;
