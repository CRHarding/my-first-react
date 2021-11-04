import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=Rz30JyD2a2ysf2lhBMAwC9RgnPpsq0Jliv0jScXG'
			)
			.then((res) => {
				console.log(res.data);
				//				setUsers(res.data.results);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='App'>
			<h1>RoxBook v.1</h1>
			{/* {users.map((user) => (
				<User user={user} key={user.login.uuid} />
			))} */}
		</div>
	);
}

export default App;
