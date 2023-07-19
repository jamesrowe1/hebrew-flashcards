import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">{flashcard.hebrewLetter}</div>
      <div className="back">{flashcard.pronunciation}</div>
    </div>
  );
};

export default Flashcard;