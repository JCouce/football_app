import React, { Component } from 'react';
import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="headerWrapper">
                <div className="headerItem item1 selected">Logo</div>
                <div className="headerItem item2">Go Home</div>
                <div className="headerItem item3">Teams</div>
            </div>
        );
    }
}

export default Header;
