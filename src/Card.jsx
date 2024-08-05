import React from "react";
import "./styles.css";

// creating a function to layout a card
function Card({ image, name, sciName, habitat, diet, endangeredLevel, rank }) {
  return (
    <div className="card">
      
        <div className="name-bar">
        <h1 className="animal-name">{name}</h1>
        <h2 className="scientific-name">{sciName}</h2>
        </div>

        <div className="image-container">
          <img className="card-image" src={image} alt={name} />
        </div>

        <p className='endangered-level'>{endangeredLevel}</p>

        <div className="take-action-tab">
          <p>Take Action</p>
        </div>

        <div className="population-tab">
          <p>Populations</p>
        </div>

        <div className="habitat-tab">
          <p>Habitat</p>
        </div>

        <div className="diet-tab">
          <p>Diet</p>
        </div>
    </div>
  );
}

export default Card;