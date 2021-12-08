import React from 'react';
import "./AdvsBall.scss"

const Advsball = (props) => {
    return (
        <div className="ball">
            <img src={props.img} alt="ball__item" />
            <span>{props.text}</span>
        </div>
    );
}

export default Advsball;
