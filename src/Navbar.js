import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { query_items } from "./queries";
import "./Navbar.css";
const Navbar = () => {
  const [showCities, setShowCities] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const refContainer = useRef(null);
  const refWrap = useRef(null);
  useEffect(() => {
    const height = refWrap.current.getBoundingClientRect().height;
    if (showCities) {
      refContainer.current.style.height = `${height}px`;
    } else {
      refContainer.current.style.height = "0px";
    }
  }, [showCities]);
  return (
    <nav className={`${showNav ? "visible" : "hidden"}`}>
      <div
        className={`${showNav ? "nav_toggler" : "nav_toggler hidden"}`}
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        &#10140;
      </div>
      <ul className={`${showNav ? "main_list" : "main_list hidden"}`}>
        <li>
          <Link exact="true" to="react_gallery/">
            Home
          </Link>
        </li>
        <li>
          <div
            className={`${
              showCities ? "cities_toggle active" : "cities_toggle"
            }`}
            onClick={() => {
              setShowCities(!showCities);
            }}
          >
            Cities
          </div>
          <ul className="cities" ref={refContainer}>
            <div className="wrap" ref={refWrap}>
              {query_items.map((query) => {
                const { id, name } = query;
                return (
                  <li key={id}>
                    <Link to={`react_gallery/query/${name.toLowerCase()}`}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </li>
        <li>
          <Link to="react_gallery/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
