import { useState } from 'react';
import './styles.css';

// create a card class
class Card {
  constructor(image, name, habitat, diet, endangeredLevel, rank) {
    this.image = image;
    this.name = name;
    this.habitat = habitat;
    this.diet = diet;
    this.endangeredLevel = endangeredLevel;
    this.rank = rank;
  }
}

// create new card objects
const cards = [
  new Card('https://i.imgur.com/xKkFQmB.png', 'Alaskan Kitty Shark', 'Alaskan waters', 'Fish, seals, and the occasional surfer', 'Critically Endangered', 1),
]

// build a bit... break down into components
export default function App() {
  return (
  <div className='App-wrapper'>
    <div className='content'>
      <img className='card-image' src='https://i.imgur.com/xKkFQmB.png' alt='kitty shark' />
      <h1 className='animal-name'> Alaskan Kitty Shark </h1>
    </div>
  </div>
)}