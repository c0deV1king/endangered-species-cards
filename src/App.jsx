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
  new CardBuilder('https://i.imgur.com/xKkFQmB.png', 'Alaskan Kitty Shark', 'Alaskan waters', 'Fish, seals, and the occasional surfer', 'Critically Endangered', 1),
  new CardBuilder('https://i.imgur.com/nybwm8a.jpeg', 'Bengal Tiger', 'India', 'Deer, wild boar, and water buffalo', 'Endangered', 2),
  new CardBuilder('https://i.imgur.com/nybwm8a.jpeg', 'Blue Whale', 'Worldwide', 'Krill', 'Endangered', 3),
  new CardBuilder('https://i.imgur.com/nybwm8a.jpeg', 'Giant Panda', 'China', 'Bamboo', 'Vulnerable', 4),
  new CardBuilder('https://i.imgur.com/gEseeGo.jpeg', 'North American Shark Enjoyer', 'North America', 'Cheetos, Coke, and TV Remotes', 'Vulnerable', 5),
]

// build a bit... break down into components
export default function App() {
  const [cards] = useState(initialCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }

  const currentCard = cards[currentCardIndex];


  return (
    <div className='App-wrapper'>
      <div className='card-list'>
        {currentCard && (
          <Card
            image={currentCard.image}
            name={currentCard.name}
            habitat={currentCard.habitat}
            diet={currentCard.diet}
            endangeredLevel={currentCard.endangeredLevel}
            rank={currentCard.rank}
          />
        )}
      </div>
      <button onClick={nextCard} className='next-card'>Next Card</button>
    </div>
)}