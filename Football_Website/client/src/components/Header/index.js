import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="headerWrapper">
                <Link to={'/'} className="headerItem item1 selected">Logo</Link>
                <Link to={'/'} className="headerItem item2">Go Home</Link>
                <Link to={'/teams'} className="headerItem item3">Teams</Link>
            </div>
        );
    }
}

export default Header;
