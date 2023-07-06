import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <header>
        <nav className="nav">
        <NavLink className='link' activeClassName='active' exact to='/'>
        <li>
            Popular
        </li>
        </NavLink>
        <NavLink className='link' activeClassName='active' to='/Battle'>
        <li>
            Battle
        </li>
        </NavLink>
        </nav>
        </header> 
    )
}

export default Header;