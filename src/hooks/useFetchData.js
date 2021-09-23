import { useEffect, useState } from "react";

const useFetchData = (url) => {
	//Estado del componente
	const [data, setData] = useState([]);
	//Consultamos la API

	useEffect(() => {
		const handleFetchAPI = async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.log(error);
			}
		};
		handleFetchAPI();
	}, [url]);

	return data;
};

export default useFetchData;
