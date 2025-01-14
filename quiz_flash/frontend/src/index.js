import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './Header';
import App from './App';
import Room from './Room';
import Lobby from './Lobby';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <App/>
        <Room/>
        <Lobby/>
    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
