import { React, useState } from 'react';
import './styles.css';
import Card from './Card';

// create a card class
class CardBuilder {
  constructor(image, name, sciName, habitat, diet, endangeredLevel, rank) {
    this.image = image;
    this.name = name;
    this.sciName = sciName;
    this.habitat = habitat;
    this.diet = diet;
    this.endangeredLevel = endangeredLevel;
    this.rank = rank;
  }
}

// create new card objects
const initialCards = [
  new CardBuilder('https://i.imgur.com/xKkFQmB.png', 'Alaskan Kitty Shark', 'Alacti Kibushak', 'Alaskan waters', 'Fish, seals, and the occasional surfer.', 'Critically Endangered', 1),
  new CardBuilder('https://i.imgur.com/nybwm8a.jpeg', 'Bengal Tiger', 'Bungi Tibigur', 'India', 'Deer, wild boar, and water buffalo', 'Endangered', 2),
  new CardBuilder('https://i.imgur.com/nybwm8a.jpeg', 'Blue Whale', 'Hubiscus Wooo', 'Worldwide', 'Krill', 'Endangered', 3),
  new CardBuilder('https://i.imgur.com/nybwm8a.jpeg', 'Giant Panda', 'Bigg Burra', 'China', 'Bamboo', 'Vulnerable', 4),
  new CardBuilder('https://i.imgur.com/gEseeGo.jpeg', 'North American Shark Enjoyer', 'Murican', 'North America', 'Cheetos, Coke, and TV Remotes', 'Vulnerable', 5),
]

// build a bit... break down into components
export default function App() {
  const [cards] = useState(initialCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }
  // I was trying to make it so that if you hit -1, it would loop back to the end of the array. However,
  // Now when I hit 0, it no longer goes to the previous card and doesnt go past 0? Unexpected but
  // is what I was originally trying to do. ** Research and understand why it does this **
  const prevCard = () => {
    if (currentCardIndex < 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1) % cards.length - 1);
    } 
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1) % cards.length);
    }
  }

  console.log(currentCardIndex)

  const currentCard = cards[currentCardIndex];


  return (
    <>
    <div className='App-wrapper'>
      <div className='rank-badge'>{currentCard.rank}</div>
      <div className='card-list'>
        {currentCard && (
          <Card
            image={currentCard.image}
            endangeredLevel={currentCard.endangeredLevel}
            name={currentCard.name}
            sciName={currentCard.sciName}
            habitat={currentCard.habitat}
            diet={currentCard.diet}
          />
        )}
      </div>
      <button onClick={nextCard} className='next-card'> ‎ </button>
      <button onClick={prevCard} className='prev-card'> ‎ </button>
    </div>
    </>
)}