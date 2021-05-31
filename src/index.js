import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'modern-normalize';
import store from './redux/store';
import App from './App';
console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     
     <BrowserRouter>
      <App />
      </BrowserRouter>
  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
