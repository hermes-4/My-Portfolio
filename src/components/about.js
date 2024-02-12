import React from "react";
import me from "../images/me.png";
export const About = () => {
    return (
        <div className="about">
            <div>
                <img className="me" src={me} alt="Who Am I ??? " />
            </div>
            <div className="about-content">
                <h3>About Me</h3>
                <p>
                    Hello there! My name is Ebenezer Ofori Acquah. I'm a
                    passionate individual journeying through my late teens,
                    exploring the wonders of life and learning. While my age may
                    remain a mystery, what's clear is my dedication to growth
                    and knowledge.
                </p>
            </div>
        </div>
    );
};

export default About;
