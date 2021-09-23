import React from "react";

import "../../styles/Details/CountryBoxDetails.css";

const CountryTemp = ({ temp, tempMax, tempMin, humidity }) => {
	return (
		<div className="text-temp">
			<div>
				<img
					src="../../../public/img/thermometer-4_icon-icons.com_62241 (1).svg"
					alt=""
				/>
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
