import React from "react";

import countryTemp from "../../img/countryTemp.svg";

import "../../styles/Details/CountryBoxDetails.css";

const CountryTemp = ({ temp, tempMax, tempMin, humidity }) => {
	return (
		<div className="text-temp">
			<div>
				<img src={countryTemp} alt={temp} />
			</div>
			<h2>temperature</h2>
			<p>
				temperature: <span>{temp}</span>
			</p>
			<p>
				maximum temperature: <span>{tempMax}</span>
			</p>
			<p>
				minimum temperature: <span>{tempMin}</span>
			</p>
			<p>
				humidity: <span>{humidity}</span>
			</p>
		</div>
	);
};

export default CountryTemp;
