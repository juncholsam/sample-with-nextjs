import React from 'react';
import Body from '../../components/Layout/Body';

export default {
  title: 'Layer/Body',
};

export const toStorybook = () => {
  return <Body />;
};

toStorybook.story = {
  name: 'Body',
};
