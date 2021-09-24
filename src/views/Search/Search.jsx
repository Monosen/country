import React, { useState } from "react";

//Components
import Nav from "../../components/Nav";
import SearchForm from "../../components/SearchForm";
import SearchFormError from "../../components/SearchFormError";
import Country from "../../components/Country";

//Styles
import "../../App.css";
import "../../styles/Search/Search.css";

const Search = (props) => {
	const [countryName, setCountryName] = useState(null);

	const [country, setCountry] = useState([]);
	const [error, setError] = useState(false);

	const handleFetchCountryData = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`https://restcountries.com/v3/name/${countryName}?fullText=true`
			);
			const result = await response.json();

			if (result.status) {
				setError(result.message);
			} else {
				setCountry(result);
				setError(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Nav />
			<div className="mtt container text-c">
				<SearchForm
					setCountryName={setCountryName}
					handleFetchCountryData={handleFetchCountryData}
				/>
				<div className="box-img">
					{error ? (
						<SearchFormError message={error} />
					) : (
						country.map((country) => (
							<Country
								key={country.cca3}
								name={country.name.common}
								img={country.flags[0]}
								code={country.cca3}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Search;
