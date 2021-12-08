import React from 'react';
import { useState } from 'react';
import "./Skills.scss"

import Advsball from './AdvsBalls/AdvsBall';

const Skills = () => {
    const [activePopUp, setactivePopUp] = useState(0);

    return (
        <section className="skills">
            <h2>If you still not sure</h2>
            <div className="desc"></div>
            <div className="advs">
                <Advsball img="http://placekitten.com/200/300" text="UI/UX Designer"/>
                <Advsball img="http://placekitten.com/200/300" text="Front-end Developer"/>
                <Advsball img="http://placekitten.com/200/300" text="Branding Design"/>
            </div>
        </section>
    );
}

export default Skills;
