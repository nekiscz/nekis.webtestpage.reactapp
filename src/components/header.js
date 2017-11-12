import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    renderMenu (menuClass, menuId) {
        return (
        <ul className={menuClass} id={menuId}>
            <li><Link to="/new-test">New test</Link> </li>
            <li><Link to="/saved-tests">Saved tests</Link></li>
            <li><Link to="/settings"><i className="material-icons">settings</i></Link></li>
            <li><Link to='/acount' className="waves-effect waves-light btn">Account<i className="left material-icons">account_circle</i></Link></li>
        </ul>
        );
    }
    
    render() {
        return (
        <div> 
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Logo</Link>
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