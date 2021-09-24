import React from "react";

import "../../styles/Details/CountryBoxDetails.css";

const CountryCoord = ({ lon, lat }) => {
	return (
		<div className="text-temp">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-map-pin"
					width="80"
					height="80"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#2c3e50"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="11" r="3" />
					<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
				</svg>
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
