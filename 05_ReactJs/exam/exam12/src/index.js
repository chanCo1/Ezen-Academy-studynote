import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 리덕스 구성을 위한 참조
import { Provider } from 'react-redux';
import Store from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

