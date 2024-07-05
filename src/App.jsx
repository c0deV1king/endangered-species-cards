import { useState } from 'react';
import './styles.css';
import Card from './Card';

// create a card class
class CardBuilder {
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
const initialCards = [
  new CardBuilder('https://i.imgur.com/xKkFQmB.png', 'Alaskan Kitty Shark', 'Alaskan waters', 'Fish, seals, and the occasional surfer', 'Critically Endangered', 1)
]

// build a bit... break down into components
export default function App() {
  const [cards, setCards] = useState(initialCards);


  return (
    <div className='App-wrapper'>
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            habitat={card.habitat}
            diet={card.diet}
            endangeredLevel={card.endangeredLevel}
            rank={card.rank}
          />
        ))}
      </div>
    </div>
)}