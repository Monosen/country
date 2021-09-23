import React from 'react';

//Styles
import '../styles/Loader.css'
import '../styles/flex.css'

const Loader = props => {
    return (
        <div className="loader-container d-flex d-flex-jcc d-flex-aic">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};


export default Loader;