import React from 'react'
import "./Banner.css"

function Banner() {
  // truncate function used to limit the number of characters in the description for consistent looking styling

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1) + '...' : string
  }

  return (
    <header 
      className="banner" 
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor:"#111"
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}


export default Banner