import { Link } from "react-router-dom";

//Estilos
import "../styles/Country.css";

const Country = ({ name, img, code }) => {
	return (
		<div className="polaroid">
			<img src={img} alt={name} />
			<div className="container-text">
				<h4>{name}</h4>
				<Link to={`/details/${code}`}>Ver Mas</Link>
			</div>
		</div>
	);
};

export default Country;
