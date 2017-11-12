import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div> 
            <header class="header">
                <nav>
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo left">Logo</a>
                        <ul class="right">
                            <li>
                                <a href="/new-test">New test</a>
                            </li>
                            <li>
                                <a href="/saved-tests">Saved tests</a>
                            </li>
                            <li>
                                <a href="/settings">
                                    <i class="material-icons">settings</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>                       
        </div>
        );
    }
}

export default Header;