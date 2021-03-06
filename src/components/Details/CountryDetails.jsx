import React from "react";

//Styles
import "../../styles/Details/CountryDetails.css";
import "../../App.css";
import "../../styles/flex.css";

const CountryDetails = (props) => {
	const { img, name, capital, region, subregion } = props;
	return (
		<div className="mtt d-flex d-flex-jcc flex-wrap">
			<div className="box-img">
				<img className="m-b" src={img} alt="" />
			</div>
			<div className="box-text">
				<h1>{name}</h1>
				<h3>
					Capital: <p>{capital}</p>
				</h3>
				<h3>
					Region: <p>{region}</p>
				</h3>
				<h3>
					SubRegion: <p>{subregion}</p>
				</h3>
			</div>
		</div>
	);
};

export default CountryDetails;
