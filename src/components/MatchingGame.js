import React, { useState, useEffect } from 'react';

// Function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const MatchingGame = ({ flashcards }) => {
  const [shuffledFlashcards, setShuffledFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [matches, setMatches] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setShuffledFlashcards(shuffleArray(flashcards));
    setLoading(false);
  }, [flashcards]);

  const handlePronunciationClick = (pronunciation) => {
    const currentCard = shuffledFlashcards[currentCardIndex];
    if (currentCard.pronunciation === pronunciation) {
      setMatches((prevMatches) => prevMatches + 1);
    }

    if (currentCardIndex < shuffledFlashcards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    } else {
      // Reset the game when all cards have been matched
      setShuffledFlashcards(shuffleArray(flashcards));
      setCurrentCardIndex(0);
      setMatches(0);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can display a loading message or spinner here
  }

  const currentCard = shuffledFlashcards[currentCardIndex];

  // Generate a set of random pronunciations including the correct one
  const randomPronunciations = shuffleArray(
    Array.from(new Set(shuffledFlashcards.map((flashcard) => flashcard.pronunciation)))
  ).slice(0, 3);

  // Include the correct pronunciation in the set
  randomPronunciations.push(currentCard.pronunciation);

  // Shuffle the pronunciations again to change their order
  const shuffledPronunciations = shuffleArray(randomPronunciations);

  return (
    <div className="matching-game">
      <h2>Matching Game</h2>
      <div className="matching-card">
        {currentCard.hebrewLetter}
      </div>
      <div className="pronunciation-options">
        {shuffledPronunciations.map((pronunciation, index) => (
          <button
            key={index}
            onClick={() => handlePronunciationClick(pronunciation)}
            className={currentCard.pronunciation === pronunciation ? 'correct' : ''}
            disabled={currentCard.pronunciation !== pronunciation}
          >
            {pronunciation}
          </button>
        ))}
      </div>
      <div className="matches">
        Matches: {matches}/{flashcards.length}
      </div>
    </div>
  );
};

export default MatchingGame;
