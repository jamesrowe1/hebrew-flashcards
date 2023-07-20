import React from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList';
import MatchingGame from './components/MatchingGame';

const App = () => {
  const flashcards = [
    { id: 1, hebrewLetter: 'א', pronunciation: 'Aleph' },
    { id: 2, hebrewLetter: 'ב', pronunciation: 'Bet' },
    { id: 3, hebrewLetter: 'ג', pronunciation: 'Gimel' },
    { id: 4, hebrewLetter: 'ד', pronunciation: 'Dalet' },
    { id: 5, hebrewLetter: 'ה', pronunciation: 'Hey' },
    { id: 6, hebrewLetter: 'ו', pronunciation: 'Vav' },
    { id: 7, hebrewLetter: 'ז', pronunciation: 'Zayin' },
    { id: 8, hebrewLetter: 'ח', pronunciation: 'Het' },
    { id: 9, hebrewLetter: 'ט', pronunciation: 'Tet' },
    { id: 10, hebrewLetter: 'י', pronunciation: 'Yod' },
    { id: 11, hebrewLetter: 'כ', pronunciation: 'Kaf' },
    { id: 12, hebrewLetter: 'ל', pronunciation: 'Lamed' },
    { id: 13, hebrewLetter: 'מ', pronunciation: 'Mem' },
    { id: 14, hebrewLetter: 'נ', pronunciation: 'Nun' },
    { id: 15, hebrewLetter: 'ס', pronunciation: 'Samekh' },
    { id: 16, hebrewLetter: 'ע', pronunciation: 'Ayin' },
    { id: 17, hebrewLetter: 'פ', pronunciation: 'Pe' },
    { id: 18, hebrewLetter: 'צ', pronunciation: 'Tsade' },
    { id: 19, hebrewLetter: 'ק', pronunciation: 'Qof' },
    { id: 20, hebrewLetter: 'ר', pronunciation: 'Resh' },
    { id: 21, hebrewLetter: 'ש', pronunciation: 'Shin' },
    { id: 22, hebrewLetter: 'ת', pronunciation: 'Tav' },
  ];
  

  const renderFlashcards = () => {
    return <FlashcardList flashcards={flashcards} />;
  };

  const renderMatchingGame = () => {
    return <MatchingGame flashcards={flashcards} />;
  };

  return (
    <div className="container">
      <h1 className="title">Hebrew Flashcards</h1>
      <div className="navigation">
        <button onClick={renderFlashcards}>Flashcards</button>
        <button onClick={renderMatchingGame}>Matching Game</button>
      </div>
      {renderFlashcards()} {/* or renderMatchingGame() */}
    </div>
  );
};

export default App;