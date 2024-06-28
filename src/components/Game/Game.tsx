import { FC, useState, useEffect } from 'react';

import './Game.css';
import { Square } from './Square/Square';

export const Game: FC = () => {
  const [itemToClick, setItemToClick] = useState(-1);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const setNewItemToClick = () => {
    const randomItem = Math.floor(Math.random() * 9);
    setItemToClick(randomItem);
  };

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }
    setNewItemToClick();
    setTimer(setInterval(setNewItemToClick, 600));

    return () => clearInterval(timer);
  }, [score]);

  const onItemClick = (isCorrect: boolean) => {
    if (score === 0 && !isCorrect) {
      return;
    }
    setScore(isCorrect ? score + 1 : score - 1);
  };

  return (
    <div className='game-container'>
      <div className='game-title'>
        Your score: {score}
      </div>
      <div className='game'>
        {[...Array(9).keys()].map(key => (
          <Square
            shouldBeClicked={key === itemToClick}
            onClick={() => onItemClick(key === itemToClick)}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};
