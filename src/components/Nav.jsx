import React from "react";
import { Link } from "react-router-dom";

//Styles
import "../styles/Nav.css";
import "../styles/flex.css"
import "../App.css"

const Nav = () => {
    return (
        <nav className="bg-color p-fixed">
            <div className="container">
                <div className="d-flex d-flex-jcsb d-flex-aic"> 
                    <div className="nav-title">
                        <Link to="/" >country</Link>
                    </div>
                    <div className="m-r">
                        <Link to="/" >All Country</Link>
                        <Link to="/search">Search</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;