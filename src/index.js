import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import {PersistGate } from 'redux-persist/integration/react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={null} persistor= {persistor}>
    <App />
        <ToastContainer />
      </PersistGate>
     </Provider>
  </React.StrictMode>
);

