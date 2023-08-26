import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  // Used to apply nav__black class if the user scrolls
  const transitionNavBar = () => {
    window.scrollY > 100 ? handleShow(true): handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])
  
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
              alt="Netflix Logo"
              onClick={() => navigate("/")}
        />
        <img className="nav__avatar" 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
              alt="Display Picture"
              onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  )
}

export default Nav