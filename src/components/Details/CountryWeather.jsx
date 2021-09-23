import React from "react";

import "../../styles/Details/CountryBoxDetails.css";

const CountryWeather = ({ main, description }) => {
	return (
		<div className="text-temp">
			<h2>{main}</h2>
			<p>{description}</p>
		</div>
	);
};

export default CountryWeather;
