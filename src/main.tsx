import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TagManager from 'react-gtm-module';

// Initialize GTM
const tagManagerArgs = {
    gtmId: 'GTM-P6QMKH3Z', // Replace with your GTM ID
   
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

