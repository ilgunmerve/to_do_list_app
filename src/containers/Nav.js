import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/main.scss';

const Nav =()=>{
    return(
        <nav>
            <ul>
                <NavLink to='/'>
                    <li>ToDo</li>
                </NavLink>
                <NavLink to='/about'>
                    <li>About</li>
                </NavLink>
            </ul>    
        </nav>
    );
};

export default Nav;