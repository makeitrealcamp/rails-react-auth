import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
