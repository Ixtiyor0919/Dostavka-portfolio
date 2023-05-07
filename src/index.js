import React from 'react';
import i18n from 'i18next';
import './Styles/index.css';
import App from '../src/App/App';
import { Provider } from 'react-redux';
import store from "./Redux/ReduxStore";
import ReactDOM from 'react-dom/client';
import HttpApi from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru', 'uz'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/Assets/Languages/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });
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
