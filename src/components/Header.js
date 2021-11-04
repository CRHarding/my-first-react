import React from 'react';

const Header = (props) => {
	return (
		<>
			<h1>page logo</h1>
			<h2>{props.daily.title}</h2>
			<h3>
				{props.daily.copyright}, {props.daily.date}
			</h3>
		</>
	);
};
export default Header;
