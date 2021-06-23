import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeManager } from './themes/themeManager';

ReactDOM.render(
  <React.StrictMode>
    <ThemeManager>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeManager>
  </React.StrictMode>,
  document.getElementById('root')
);
