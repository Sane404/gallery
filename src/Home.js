import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="homepage">
      <div className="bg">
        <div className="text_box">
          <h2>Cities Gallery</h2>
          <p className="about_proj">
            Images of the most recognized places in the world.
          </p>
          <p className="how_to">
            Just select the city on the sidebar and view amazing pictures from
            that place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
