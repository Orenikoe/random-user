
import './App.css';
import User from './components/User/User';
import axios from 'axios';
import { useState } from 'react';

 function App() {
  const [randomUser, setRandomUser] = useState('hi')

 const getRandomUser = () => {
axios
 .get('https://randomuser.me/api?nat=en')
.then((res) => res.data)
.then((data) => setRandomUser(data.results[0]))
  }
// console.log(randomUser.gender);

  return (
    <div className="App">
<button onClick={getRandomUser}>Click Me!</button>
      <User data={randomUser}/>
    </div>
  );
}

export default App;
