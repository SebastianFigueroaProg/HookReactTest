import React from 'react';
import {Link, NavLink} from "react-router-dom";



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ps-4" >
            
            <Link to='/' className="navbar-brand ml-4"> useContext </Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to='/' className="nav-link" aria-current="page"> Home </NavLink>
                    <NavLink to='/about' className="nav-link"> About </NavLink>
                    <NavLink to='/login' className="nav-link"> Login </NavLink>
                </div>
            </div>
        </nav>
    );
}
