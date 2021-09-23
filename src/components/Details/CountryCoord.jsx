import React from "react";

import "../../styles/Details/CountryBoxDetails.css";

const CountryCoord = ({ lon, lat }) => {
	return (
		<div className="text-temp">
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
