import React from "react";
import './header.css';
import {Routes,Route, Link} from "react-router-dom";
import {HomePage, CartPage} from '../pages';


const Header = ({numItems, total}) =>{
    return(
            <div className="header">
                <ul>
                    <li><Link to="/" className="logo">ReStore</Link></li>
                    <li><Link to="/cart">Cart ({numItems} for ${total})</Link></li>
                </ul>
            </div>
    );
}

export default Header;
