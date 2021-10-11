import React from "react";

import "./../styles/Search/SearchFormError.css";

const SearchFormError = ({ message }) => {
	return (
		<div className="SearchFormError">
			<h2>Error</h2>
			<h3>{message}</h3>
		</div>
	);
};

export default SearchFormError;
