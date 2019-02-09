import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = props => {

    return (

        <li className={`nav-item ${props.route === props.itemInfo.link ? ' active' : ''}`}>
            <Link className="nav-link nav-link-animated" to={props.itemInfo.link}>{props.itemInfo.text}</Link>
        </li>

    );
};

export default NavItem;

