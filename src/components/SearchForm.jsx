import React from "react";

//Styles
import '../styles/Search/SearchForm.css'

const SearchForm = ({ setCountryName, handleFetchCountryData }) => {
    return (
        <form onSubmit={handleFetchCountryData}>
            <input type="text" 
            placeholder="Nombre Del Pais"
            onChange={e => setCountryName(e.target.value) } />
            <input type="submit" value="Search" />
        </form>
        // <div>
        //     <input type="text" 
        //     placeholder="Nombre del pais"
        //     onChange={e => setCountryName(e.target.value) } />
        //     <button onClick={handleFetchCountryData}>Search</button>
        // </div>
    );
}

export default SearchForm;