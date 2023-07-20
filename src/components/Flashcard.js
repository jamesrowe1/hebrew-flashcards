import React, { useState, useRef } from 'react';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    // Play the audio when the card is flipped
    console.log(flashcard.pronunciation.toLowerCase())
    audioRef.current.play();
    console.log("hey")
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
        <source src={`/audio/${flashcard.pronunciation.toLowerCase()}.wav`} type="audio/wav" />
      </audio>
    </div>
  );
};

export default Flashcard;
