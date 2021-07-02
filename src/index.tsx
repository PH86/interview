import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { AppContextProvider } from "context/AppContext";
import { ThemeManager } from 'themes/themeManager';
 
ReactDOM.render(
  <React.StrictMode>
    <ThemeManager>
			<AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeManager>
  </React.StrictMode>,
  document.getElementById('root')
);
