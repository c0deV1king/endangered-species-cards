import React from "react";
import "./styles.css";

// creating a function to layout a card
function Card({ image, name, habitat, diet, endangeredLevel, rank }) {
  return (
    <div className="card">
        <div className="image-container">
          <img className="card-image" src={image} alt={name} />
        </div>
        <h1 className="animal-name">{name}</h1>
        <p className="animal-habitat">Habitat: {habitat}</p>
        <p className="animal-diet">Diet: {diet}</p>
        <p className="endangered-level">Endangered Level: {endangeredLevel}</p>
        <p className="rank">Rank: {rank}</p>
    </div>
  );
}

export default Card;