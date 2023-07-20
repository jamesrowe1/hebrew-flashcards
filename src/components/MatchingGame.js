import React, { useState, useEffect } from 'react';

const MatchingGame = ({ flashcards }) => {
  const [shuffledFlashcards, setShuffledFlashcards] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    // Shuffle the flashcards when the component mounts
    setShuffledFlashcards(shuffleArray(flashcards.concat(flashcards)));
  }, [flashcards]);

  const handleCardClick = (index, pronunciation) => {
    if (selectedLetter === null) {
      // First card selection
      setSelectedLetter({ index, pronunciation });
    } else {
      // Second card selection
      if (selectedLetter.pronunciation === pronunciation && selectedLetter.index !== index) {
        // It's a match!
        setMatches(matches + 1);
        setSelectedLetter(null);
      } else {
        // Not a match, reset selected cards after a short delay
        setTimeout(() => {
          setSelectedLetter(null);
        }, 1000);
      }
    }
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="matching-game">
      <h2>Matching Game</h2>
      <div className="matching-grid">
        {shuffledFlashcards.map((flashcard, index) => (
          <div
            key={index}
            className={`matching-card ${
              selectedLetter !== null && selectedLetter.index === index ? 'selected' : ''
            }`}
            onClick={() => handleCardClick(index, flashcard.pronunciation)}
          >
            {flashcard.hebrewLetter}
          </div>
        ))}
      </div>
      <div className="matches">
        Matches: {matches}/{flashcards.length}
      </div>
    </div>
  );
};

export default MatchingGame;
