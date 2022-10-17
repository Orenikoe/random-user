
import './App.css';
import User from './components/User/User';
import axios from 'axios';
import { useState } from 'react';
import EditBtn from './components/EditDialouge/EditBtn';

 function App() {
  
  const [randomUser, setRandomUser] = useState(null)

 const getRandomUser = () => {
axios
 .get('https://randomuser.me/api?nat=en')
.then((res) => res.data)
.then((data) => {
  setRandomUser(data.results[0])})
  }

  function setRandomUserHandler(newInput, event) {
    console.log(newInput, event);
    event.target.id !== 'email' ?
    setRandomUser((prevState) => {
      return {
        ...prevState,
        name: {...prevState.name, [event.target.id]: newInput }
       
        
    
      }
    }) :
    setRandomUser((prevState) => {
      return {
        ...prevState,
        [event.target.id]: newInput
       
        
    
      }
    })

  }

  function setInLocalStorage() {
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    let entry = {randomUser}
    localStorage.setItem("entry", JSON.stringify(entry));
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
  }


  return (
    <div>
<button className='btn' onClick={getRandomUser}>Click Me!</button>
{randomUser && <User data={randomUser}/>}
{randomUser&& <EditBtn data={randomUser} setInLocalStorage={setInLocalStorage} edit={setRandomUserHandler}/>}

    </div>
  );
}

export default App;
