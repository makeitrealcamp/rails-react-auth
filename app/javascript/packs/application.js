import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.createElement('div');
  wrapper.className = "react-app";

  ReactDOM.render(
    <App />,
    document.body.appendChild(wrapper)
  )
});
