import React from "react";
import "../styles/Location.css";

function Location() {
  return (
    <div className="location">
      <h3>Location</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
        title="Wedding Location"
        className="map"
      ></iframe>
      <p>스튜디오123</p>
      <p>서울 마포구 대흥로 175</p>
    </div>
  );
}

export default Location;