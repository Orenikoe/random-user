import './App.css';
import User from './components/User/User';
import axios from 'axios';
import { useState } from 'react';
import EditBtn from './components/EditDialouge/EditBtn';

 function App() {
  const [randomUser, setRandomUser] = useState(null)

	const getRandomUser = () => {
		console.log(JSON.parse(localStorage.getItem('allEntries')));

		axios
			.get('https://randomuser.me/api?nat=en')
			.then((res) => res.data)
			.then((data) => {
				setRandomUser(data.results[0])
				let localStorageUsersArr = JSON.parse(
					localStorage.getItem('allEntries')
				);
				const filteredArr = localStorageUsersArr.filter((user) => {
					return user.randomUser.login.uuid === data.results[0].login.uuid;
				});
				filteredArr.length > 0
					? setRandomUser(filteredArr[0])
					: setRandomUser(data.results[0]);
			});
	};


	 function setInLocalStorage() {
		let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
		if(existingEntries == null) existingEntries = [];
		localStorage.setItem("entry", JSON.stringify(randomUser));
		// Save allEntries back to local storage
		existingEntries.push(randomUser);
		localStorage.setItem("allEntries", JSON.stringify(existingEntries));
	
	}


	


	return (
		<div>
			<button className="btn" onClick={getRandomUser}>
				Click Me!
			</button>
			{randomUser && <User data={randomUser} />}
			{randomUser && (
				<EditBtn
					data={randomUser}
					setInLocalStorage={setInLocalStorage}
					edit={setRandomUser}
				/>
			)}
		</div>
	);




}

export default App;
