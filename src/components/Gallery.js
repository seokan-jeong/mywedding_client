import React from "react";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h3>gallery</h3>
      <img
        src="/path-to-gallery-image.png"
        alt="Gallery"
        className="gallery-image"
      />
      <p>더 많은 사진 보러가기</p>
    </div>
  );
}

export default Gallery;