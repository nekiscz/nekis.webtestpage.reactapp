import React, { Component } from 'react';

class Header extends Component {
    renderMenu (menuClass, menuId) {
        return (
        <ul className={menuClass} id={menuId}>
            <li><a href="/new-test">New test</a> </li>
            <li><a href="/saved-tests">Saved tests</a></li>
            <li><a href="/settings"><i className="material-icons">settings</i></a></li>
            <li><a className="waves-effect waves-light btn">Account<i className="left material-icons">account_circle</i></a></li>
        </ul>
        );
    }
    
    render() {
        return (
        <div> 
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <a href="#" data-activates="mobile-menu" className="button-collapse"><i className="material-icons">menu</i></a>
                            {this.renderMenu("right hide-on-med-and-down")}
                            {this.renderMenu("side-nav", "mobile-menu")}
                    </div>
                </nav>
            </header>                       
        </div>
        );
    }
}

export default Header;