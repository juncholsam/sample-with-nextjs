import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Layout/Navbar';

export default {
  title: 'Layer/Navbar',
};

const links = Array.from({ length: 50 }).map((el, index) => ({
  key: index,
  component: styled.span``,
  to: `/product/${index}`,
  name: `slide ${index}`,
}));

export const toStorybook = () => {
  const [activeKey, setActiveKey] = useState('');

  const onClickKey = useCallback((key) => {
    setActiveKey(key);
  }, []);

  return <Navbar links={links} activeKey={activeKey} onClick={onClickKey} />;
};

toStorybook.story = {
  name: 'Navbar',
};
