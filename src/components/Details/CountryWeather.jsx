import React from "react";

import "../../styles/Details/CountryBoxDetails.css";

const CountryWeather = ({ main, description }) => {
	return (
		<div className="text-temp">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-cloud"
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
					<path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
				</svg>
			</div>
			<h2>{main}</h2>
			<p>{description}</p>
		</div>
	);
};

export default CountryWeather;
