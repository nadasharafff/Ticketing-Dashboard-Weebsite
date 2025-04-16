import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";


const root = document.getElementById("root");
createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
