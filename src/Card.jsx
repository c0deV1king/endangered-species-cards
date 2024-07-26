import React from "react";
import "./styles.css";

// creating a function to layout a card
function Card({ image, name, sciName, habitat, diet, endangeredLevel, rank }) {
  return (
    <div className="card">
        <div className="image-container">
          <img className="card-image" src={image} alt={name} />
        </div>
        <p className='endangered-level'>{endangeredLevel}</p>
        <h1 className="animal-name">{name}</h1>
        <h2 className="scientific-name">{sciName}</h2>
        <p className="animal-habitat">Habitat: {habitat}</p>
        <p className="animal-diet">Diet: {diet}</p>
    </div>
  );
}

export default Card;