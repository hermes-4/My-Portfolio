import React from "react";

export const Header = () => {
    return (
        <div className="headsect">
            <div className="custom-bg d-flex align-items-center justify-content-center text-xl">
                <h2>MY PORTFOLIO</h2>
            </div>
            <hr />
            <div className="whoami">
                <h2>Welcome to My Website</h2>
                {/* Add a question mark which is a graphic */}
            </div>
            <div className="about">
                <h3>About Me</h3>
                <p>
                    Hello there! My name is Ebenezer Ofori Acquah. I'm a
                    passionate individual journeying through my late teens,
                    exploring the wonders of life and learning. While my age may
                    remain a mystery, what's clear is my dedication to growth
                    and knowledge.
                </p>
            </div>
            <div className="edu">
                <h3> Educational Journey</h3>
                <p>
                    My academic journey began at Odorgonno Senior High School,
                    where I laid the foundation for my future endeavors.
                    Currently, I am pursuing my dreams at the prestigious
                    University of Ghana, diving deep into the realm of Computer
                    Science.
                </p>
            </div>
            <div>
                <h3>Join Me on the Journey</h3>
                <p>
                    Join me as I navigate through the complexities of academia,
                    unravel the mysteries of technology, and embrace the
                    challenges that shape my future. Together, let's embark on a
                    journey of growth, discovery, and endless possibilities.
                </p>
            </div>
        </div>
    );
};
