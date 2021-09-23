import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../styles/ShowError.css';
import '../styles/flex.css'


const ShowError = props => {
    return (
        <div className="box-error d-flex d-flex-aic d-flex-dc d-flex-jcc">
            <h2>404</h2>
            <p>Ups..</p>
            <p>La pagina no ha sido encontrada</p>
            <div className="box-prev d-flex d-flex-aic m-t">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="11 7 6 12 11 17" />
                    <polyline points="17 7 12 12 17 17" />
                </svg>
                <Link to="/" >Regresar</Link>
            </div>
        </div>
    );
};

export default ShowError;