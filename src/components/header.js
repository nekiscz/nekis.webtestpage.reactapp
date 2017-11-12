import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div> 
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo left">Logo</a>
                        <ul className="right">
                            <li>
                                <a href="/new-test">New test</a>
                            </li>
                            <li>
                                <a href="/saved-tests">Saved tests</a>
                            </li>
                            <li>
                                <a href="/settings">
                                    <i className="material-icons">settings</i>
                                </a>
                            </li>
                            <li><a className="waves-effect waves-light btn">Account<i className="left material-icons">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>
            </header>                       
        </div>
        );
    }
}

export default Header;