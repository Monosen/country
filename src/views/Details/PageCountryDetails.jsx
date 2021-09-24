import React from "react";
import { useParams } from "react-router";

//Hooks
import useFetchData from "../../hooks/useFetchData";

//Styles
import "../../styles/Details/PageCountryDetails.css";
import "../../App.css";
import "../../styles/flex.css";

//Conponents
import SearchFormError from "../../components/SearchFormError";
import CountryDetails from "../../components/Details/CountryDetails";
import CountryWeather from "../../components/Details/CountryWeather";
import CountryTemp from "../../components/Details/CountryTemp";
import CountryCoord from "../../components/Details/CountryCoord";

const PageCountryDetails = (props) => {
	const { code } = useParams();
	const key = "5535cff44dcc29eb276bfaa983f60686";

	const dataCountry = useFetchData(
		`https://restcountries.com/v3/alpha/${code}`
	);

	const dataCountryClimate = useFetchData(
		`https://api.openweathermap.org/data/2.5/weather?q=${code}&appid=${key}`
	);

	return (
		<div className="container">
			{dataCountry.message ? (
				<SearchFormError message={dataCountry.message} />
			) : dataCountry.length === 0 ? (
				console.log("es una arreglo")
			) : (
				<CountryDetails
					key={dataCountry[0].cca3}
					img={dataCountry[0].flags[1]}
					name={dataCountry[0].name.common}
					capital={dataCountry[0].capital}
					region={dataCountry[0].region}
					subregion={dataCountry[0].subregion}
					languages={dataCountry[0].languages}
				/>
			)}
			<div className="d-flex mt flex-wrap text-c d-flex-jcc d-flex-jcsb-2">
				<div className="f-b-5">
					{dataCountry.message ? (
						console.log("no informacion")
					) : dataCountryClimate.length === 0 ? (
						console.log("hola")
					) : dataCountryClimate.message ? (
						<SearchFormError message={dataCountryClimate.message} />
					) : (
						dataCountryClimate.weather.map((weather, index) => (
							<CountryWeather
								key={index}
								main={weather.main}
								description={weather.description}
							/>
						))
					)}
				</div>
				<div className="f-b-5">
					{dataCountry.message ? (
						console.log("no informacion")
					) : dataCountryClimate.length === 0 ? (
						console.log("hola")
					) : dataCountryClimate.message ? (
						<SearchFormError message={dataCountryClimate.message} />
					) : (
						<CountryCoord
							key={dataCountryClimate.name}
							lon={dataCountryClimate.coord.lon}
							lat={dataCountryClimate.coord.lat}
						/>
					)}
				</div>
				<div className="f-b-5">
					{dataCountry.message ? (
						console.log("no informacion")
					) : dataCountryClimate.length === 0 ? (
						console.log("hola")
					) : dataCountryClimate.message ? (
						<SearchFormError message={dataCountryClimate.message} />
					) : (
						<CountryTemp
							key={dataCountryClimate.cod}
							temp={dataCountryClimate.main.temp}
							tempMax={dataCountryClimate.main.temp_max}
							tempMin={dataCountryClimate.main.temp_min}
							humidity={dataCountryClimate.main.humidity}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default PageCountryDetails;
