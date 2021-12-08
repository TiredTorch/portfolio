import React from 'react';
import "./Header.scss"

const Header = () => {
    return (
        <header>
            <a href="#" className="logo">
                TR
            </a>
            <ul className="wrapper">
                <a href="#">
                    <li className="wrapper__item">About</li>
                </a>
                <a href="#">
                    <li className="wrapper__item">Contacts</li>
                </a>
                <a href="#">
                    <li className="wrapper__item">Recent works</li>
                </a>
                <a href="#">
                    <li className="wrapper__item">Get in touch</li>
                </a>
            </ul>
        </header>
    );
}

export default Header;
