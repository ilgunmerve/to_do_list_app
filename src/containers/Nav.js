import React from 'react';
import { Link } from "react-router-dom";
import '../styles/main.scss';

const Nav =()=>{
    return(
        <nav>
            <ul>
                <Link to='/'>
                    <li>ToDo</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>    
        </nav>
    );
};

export default Nav;