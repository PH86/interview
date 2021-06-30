import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';
import { ThemeManager } from 'themes/themeManager';

ReactDOM.render(
  <React.StrictMode>
    <ThemeManager>
      <Router>
        <App />
      </Router>
    </ThemeManager>
  </React.StrictMode>,
  document.getElementById('root')
);
