import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="text_box">
        <h2>About project</h2>
        <p className="more_about">Just a simple REACT project using routing</p>
        <p className="more_api">
          Images provided by <a href="https://pixabay.com/">Pixabay API</a>
        </p>
      </div>
    </div>
  );
};

export default About;
