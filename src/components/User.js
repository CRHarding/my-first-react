import React from 'react';

const User = (props) => {
	console.log(props);
	return (
		<>
			<p>
				User:{props.user.name.first} {props.user.name.last}
			</p>
			<p>Age: {props.user.dob.age}</p>
			<img src={props.user.picture.large} alt='random user' />
		</>
	);
};
export default User;
