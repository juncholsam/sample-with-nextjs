import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, actions } from '../../store/slices/countSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectors.selectValue);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
