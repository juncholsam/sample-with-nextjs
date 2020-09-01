import React, { useState, useCallback } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const VirtualizeSwipeableViews = virtualize(BindKeyboardSwipeableViews);

const slideRenderer = ({ index, key }) => {
  switch (mod(index, 4)) {
    case 0:
      return (
        <div key={key} style={{ padding: 15, minHeight: 100, color: '#000', backgroundColor: 'red' }}>
          slide 1
        </div>
      );
    case 1:
      return (
        <div key={key} style={{ padding: 15, minHeight: 300, color: '#000', backgroundColor: 'yellow' }}>
          slide 2
        </div>
      );
    case 2:
      return (
        <div key={key} style={{ padding: 15, minHeight: 500, color: '#000', backgroundColor: 'black' }}>
          slide 3
        </div>
      );
    case 3:
      return (
        <div key={key} style={{ padding: 15, minHeight: 100, color: '#000', backgroundColor: 'violet' }}>
          slide 4
        </div>
      );
    default:
      return null;
  }
};

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndex = useCallback((index) => setCurrentIndex(index), []);

  console.debug(currentIndex);

  return (
    <div>
      <VirtualizeSwipeableViews slideRenderer={slideRenderer} onChangeIndex={handleChangeIndex} />
    </div>
  );
};

export default Body;
