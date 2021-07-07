import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import { AppContextProvider } from "context/AppContext";
import { ThemeManager } from 'themes/themeManager';
import { AuthContextProvider } from 'context/AuthContext';
 
ReactDOM.render(
  <React.StrictMode>
    <ThemeManager>
      <AppContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </AuthContextProvider>
       </AppContextProvider>
     </ThemeManager>
   </React.StrictMode>,
  document.getElementById('root')
);
