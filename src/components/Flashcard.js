import React, { useState, useRef } from 'react';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    // Play the audio when the card is flipped
    audioRef.current.play();
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="front">
          <div className="content">{flashcard.hebrewLetter}</div>
        </div>
        <div className="back">
          <div className="content">{flashcard.pronunciation}</div>
        </div>
      </div>
      {/* Add the audio element */}
      <audio ref={audioRef}>
        <source src={`/audio/${flashcard.hebrewLetter.toLowerCase()}.wav`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Flashcard;
