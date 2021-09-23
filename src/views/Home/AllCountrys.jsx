import { useState, useEffect, useRef } from "react";

//Hooks
import useFetchData from "../../hooks/useFetchData";

//Lazy

//Components
import Country from "../../components/Country";
import Nav from "../../components/Nav";
// const Country = lazy(() => import("../../components/Country"));

const AllCountrys = () => {
	//Estado del componente
	const [nextCountry, setNextCountry] = useState(0);

	const value = useRef();

	const data = useFetchData("https://restcountries.com/v3/all");
	// console.log(data);
	const pageCountry = data.slice(0, 12 + nextCountry);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (
				window.scrollY + window.innerHeight >=
				document.documentElement.scrollHeight
			) {
				setNextCountry(nextCountry + 12);
			}
		});
	}, [pageCountry, nextCountry]);

	// console.log(Math.random().toString(36).substr(2, 9));
	return (
		<>
			<Nav />
			<div ref={value} className="container grid-country mtb mtt">
				{pageCountry.map((country) => (
					<Country
						key={country.cca3}
						name={country.name.common}
						img={country.flags[1]}
						code={country.cca3}
					/>
				))}
			</div>
		</>
	);
};

export default AllCountrys;
