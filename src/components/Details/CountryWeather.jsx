import React from "react";

import countryWeather from "../../img/countryWeather.svg";
import "../../styles/Details/CountryBoxDetails.css";

const CountryWeather = ({ main, description }) => {
	return (
		<div className="text-temp">
			<div>
				<img src={countryWeather} alt={main} />
			</div>
			<h2>{main}</h2>
			<p>{description}</p>
		</div>
	);
};

export default CountryWeather;
