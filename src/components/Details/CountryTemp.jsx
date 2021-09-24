import React from "react";

import "../../styles/Details/CountryBoxDetails.css";

const CountryTemp = ({ temp, tempMax, tempMin, humidity }) => {
	return (
		<div className="text-temp">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-temperature"
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
					<path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
					<line x1="10" y1="9" x2="14" y2="9" />
				</svg>
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
