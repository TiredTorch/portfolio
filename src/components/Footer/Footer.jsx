import React from 'react';
import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="breakLine"></div>
            <div className="feedback">
                <div className="title">
                    <p>If you have some question</p>
                    <p>Write it to me</p>
                </div>
                <div className="fields">
                    <div className="labels">
                        <p>Your name</p>
                        <p>Your question</p>
                    </div>
                    <div className="inputs">
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="sub__footer">
                <nav>
                    <ul>
                        <a href="#">
                            <li>About</li>
                        </a>
                        <a href="#">
                            <li>Contacts</li>
                        </a>
                        <a href="#">
                            <li>Recent Works</li>
                        </a>
                        <a href="#">
                            <li>Get in Touch</li>
                        </a>
                    </ul>
                </nav>
                <div className="rights">(2022), ALL RIGHTS RESERVED</div>
            </div>
        </footer>
    );
}

export default Footer;
