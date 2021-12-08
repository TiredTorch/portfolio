import React from 'react';
import './Visitings.scss'

import Photo from './Photo/Photo';
import Speach from './Speach/Speach';


const Visitings = () => {
    return (
        <section className="visitings">
            <Photo/>
            <Speach/>
            <div className="name">
                <span>Victor Ivanov</span>
                <span></span>
                <span>Web designer</span>
            </div>
        </section>
    );
}

export default Visitings;
