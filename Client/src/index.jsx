import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './styles/app.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { Provider } from 'react-redux';
import store from './redux/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
AOS.init({
  duration: 1200,
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
