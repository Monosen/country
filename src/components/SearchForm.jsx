import React from "react";

//Styles
import "../styles/Search/SearchForm.css";

const SearchForm = ({ setCountryName, handleFetchCountryData }) => {
	return (
		<form onSubmit={handleFetchCountryData}>
			<input
				type="text"
				placeholder="Nombre Del Pais"
				onChange={(e) => setCountryName(e.target.value)}
			/>
			<input type="submit" value="Search" />
		</form>
	);
};

export default SearchForm;
