import React from "react";
import "../styles/style.css";
import Header from "../components/header";
import Welcome from "../components/welcome";
import About from "../components/about";
import Education from "../components/education";
import JoinMe from "../components/joinme";
import Footer from "../components/footer";

const Homepage = () => (
    <div className="doc">
        <Header />
        <Welcome />
        <About />
        <Education />
        <JoinMe />
        <Footer />
    </div>
);

export default Homepage;
