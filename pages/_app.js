import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// Swiper CSS
import 'swiper/swiper-bundle.css';

import store from '../store';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <div>
      <Component {...pageProps} />
    </div>
  </Provider>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: null,
};

export default MyApp;
