import React, { useState, useEffect } from 'react';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const MatchingGame = ({ flashcards }) => {
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [pronunciationOptions, setPronunciationOptions] = useState([]);
  const [matches, setMatches] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    setCurrentFlashcard(null);
    setCorrectCount(0);
  }, [flashcards]);

  useEffect(() => {
    if (flashcards.length > 0 && currentFlashcard === null) {
      const remainingFlashcards = flashcards.filter(
        (flashcard) => !matches.includes(flashcard)
      );

      if (remainingFlashcards.length === 0) {
        setCurrentFlashcard(null);
      } else {
        setCurrentFlashcard(remainingFlashcards[Math.floor(Math.random() * remainingFlashcards.length)]);
        setPronunciationOptions([]);
      }
    }
  }, [flashcards, currentFlashcard, matches]);

  useEffect(() => {
    if (currentFlashcard) {
      const correctPronunciation = currentFlashcard.pronunciation;
      const allPronunciations = flashcards.map((flashcard) => flashcard.pronunciation);
      const shuffledOptions = shuffleArray(
        [correctPronunciation, ...getRandomPronunciations(correctPronunciation, allPronunciations)]
      );
      setPronunciationOptions(shuffledOptions);
    }
  }, [currentFlashcard, flashcards]);

  const getRandomPronunciations = (correctPronunciation, allPronunciations) => {
    const filteredPronunciations = allPronunciations.filter(
      (pronunciation) => pronunciation !== correctPronunciation
    );
    const shuffledPronunciations = shuffleArray(filteredPronunciations);
    return shuffledPronunciations.slice(0, 3);
  };

  const handleOptionClick = (selectedOption) => {
    if (currentFlashcard) {
      if (selectedOption === currentFlashcard.pronunciation) {
        setCorrectCount((prevCount) => prevCount + 1);
        setMatches((prevMatches) => [...prevMatches, currentFlashcard]);
      }
      setCurrentFlashcard(null);
    }
  };

  return (
    <div className="matching-game">
      {currentFlashcard && (
        <>
        <div className="card-grid">
          <div className="card">
            <div className="flashcard">
              <div className="front">
                <span className="hebrew-letter">{currentFlashcard.hebrewLetter}</span>
              </div>
            </div>
          </div>
          <div className="pronunciation-options">
            {pronunciationOptions.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <p className="counter">Correct: {correctCount} / Total: {flashcards.length}</p>
          </div>
        </>
      )}
      
      {correctCount === flashcards.length && (
        <p className="feedback-all-matched">Congratulations! You've got them all right!</p>
      )}
      {matches.length === flashcards.length && correctCount !== flashcards.length && (
        <p className="feedback-all-matched">
          Congratulations! You've matched all the letters. Keep practicing!
        </p>
      )}
    </div>
  );
};

export default MatchingGame;
