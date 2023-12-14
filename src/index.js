import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkThemeContextProvider } from './components/context/DarkThemeContext';
import { AuthContextProvider } from './components/context/AuthContext';
import { FriendProvider } from './components/context/FriendContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DarkThemeContextProvider>
    <AuthContextProvider>
    <FriendProvider>

     <App/>
     
     </FriendProvider>
    </AuthContextProvider>
   </DarkThemeContextProvider>
  </React.StrictMode>
);
reportWebVitals();
