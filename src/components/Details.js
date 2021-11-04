import React from 'react';

const Details = (props) => {
	console.log(props);
	return (
		<>
			<div>
				<img src={props.daily.url} alt='NASA daily' />
				<p>{props.daily.explanation}</p>
			</div>
		</>
	);
};
export default Details;
