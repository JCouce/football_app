import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

export class Header extends Component {
    selectTab = () =>{

    }
    render() {
        return (
            <div className="headerWrapper">
                <div className="item1"></div>
                <NavLink activeClassName="selected" exact to={'/'} className="headerItem item2">Home</NavLink>
                <NavLink activeClassName="selected" to={'/teams'} className="headerItem item3">Teams</NavLink>
            </div>
        );
    }
}

export default Header;
