
import './App.css';
import User from './components/User/User';
import axios from 'axios';
import { useState } from 'react';

 function App() {
  const [randomUser, setRandomUser] = useState(null)

 const getRandomUser = () => {
axios
 .get('https://randomuser.me/api?nat=en')
.then((res) => res.data)
.then((data) => setRandomUser(data.results[0]))
  }


  return (
    <div>
<button className='btn' onClick={getRandomUser}>Click Me!</button>
{randomUser && <User data-testid="user-1" data={randomUser}/>}
    </div>
  );
}

export default App;
