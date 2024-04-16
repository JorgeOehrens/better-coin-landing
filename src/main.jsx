import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';  // Importa I18nextProvider

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",  // Lenguaje inicial
  resources: {  // Corrección aquí: debe ser 'resources'
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
});

// Usar ReactDOM.createRoot() para montar la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}> 
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
