import React from "react";

import countryCoord from "../../img/countryCoord.svg";

import "../../styles/Details/CountryBoxDetails.css";

const CountryCoord = ({ lon, lat }) => {
	return (
		<div className="text-temp">
			<div>
				<img src={countryCoord} alt={lon} />
			</div>
			<h2>coordenate</h2>
			<p>
				longitud: <span>{lon}</span>
			</p>
			<p>
				latitud: <span>{lat}</span>
			</p>
		</div>
	);
};

export default CountryCoord;
