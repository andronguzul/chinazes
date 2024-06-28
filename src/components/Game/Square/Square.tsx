import { FC, useState } from 'react';

import './Square.css';

type SqaureProps = {
  shouldBeClicked: boolean;
  onClick?: () => void;
}

export const Square: FC<SqaureProps> = (props: SqaureProps) => {
  const [activeColor, setActiveColor] = useState('');

  const onMouseDown = () => {
    if (props.shouldBeClicked) {
      setActiveColor('green');
    } else {
      setActiveColor('red');
    }
  };

  return (
    <div
      className={`game-square ${props.shouldBeClicked ? 'to-click' : ''} ${activeColor}`}
      onClick={props.onClick}
      onMouseDown={onMouseDown}
    />
  );
};
