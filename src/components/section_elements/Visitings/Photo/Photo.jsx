import React from 'react';
import "./Photo.scss"
import me from "../../../../assets/img/me.png"

const Photo = () => {
    return (
        <div className="photo" >
            <img src={me} alt="Victor Ivanov" />
        </div>
    );
}

export default Photo;
