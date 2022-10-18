import './App.css';
import User from './components/User/User';
import axios from 'axios';
import { useState } from 'react';
import EditBtn from './components/EditDialouge/EditBtn';
import { UserContext } from './UserContext';

 function App() {
  const [randomUser, setRandomUser] = useState(null)
  const [userIsEdited, setUserIsEdited] = useState(null);

	const getRandomUser = () => {
		setUserIsEdited(null)
		
		axios
			.get('https://randomuser.me/api?nat=en')
			.then((res) => res.data)
			.then((data) => {
				setRandomUser(data.results[0])
				let localStorageUsersArr = JSON.parse(
					localStorage.getItem('allEntries')
				);
				const filteredArr = localStorageUsersArr.filter((user) => {
					return user.login.uuid === data.results[0].login.uuid;
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
		existingEntries.push(randomUser);
		localStorage.setItem("allEntries", JSON.stringify(existingEntries));
	
	
	}

	


	


	return (
		<div>
			<button className="btn" onClick={getRandomUser}>
				Click Me!
			</button>
			<UserContext.Provider value={{userIsEdited, setUserIsEdited}}>
			{randomUser && <User data={randomUser} />}
			{randomUser && (
				<EditBtn
					data={randomUser}
					setInLocalStorage={setInLocalStorage}
					edit={setRandomUser}
				/>
			)}
			</UserContext.Provider>
		</div>
	);




}

export default App;
