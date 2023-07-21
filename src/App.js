import React, { useState, useEffect } from 'react';
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

  const [selectedView, setSelectedView] = useState('flashcards');

  const handleNavigationClick = (view) => {
    setSelectedView(view);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="title">Learn the Hebrew Alphabet</h1>
      <div className={`navigation ${isSticky ? 'sticky' : ''}`}>
        <button onClick={() => handleNavigationClick('flashcards')}>Flashcards</button>
        <button onClick={() => handleNavigationClick('matching')}>Matching Game</button>
      </div>
      <div className="container">
        {selectedView === 'flashcards' ? (
          <FlashcardList flashcards={flashcards} />
        ) : (
          <MatchingGame flashcards={flashcards} />
        )}
      </div>
    </div>
  );
};

export default App;