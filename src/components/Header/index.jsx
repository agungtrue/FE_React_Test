import React from "react";
import {
    Link,
} from "react-router-dom"
import './header.scss';

function Header() {
    return (
       <header className="header__container">
        <div className="header__left">
            <div className="header__logo">GRUNDUP.AI</div>
            <div className="header__nav__left">
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/alerts">Alert</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="header__right">
            <div className="header__nav__right">
                <nav>
                    <ul>
                        <li><Link to="/alerts">ICON</Link></li>
                        <li><Link to="/alerts">ICON</Link></li>
                        <li><Link to="/alerts">ICON</Link></li>
                        <li>|</li>
                    </ul>
                </nav>
            </div>
            <div className="header__user">
                Welcome Admin
            </div>
        </div>
       </header>
    );
}

export default Header