import './index.css';
import React from 'react';
import App from '../src/App/App';
import { Provider } from 'react-redux';
import store from "./Redux/ReduxStore";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
);
