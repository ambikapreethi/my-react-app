import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Action from './action/action';
// import Parent from './passdatafromchild/parentComp';
// import Routerexample from "./routing/routeExample";
import reportWebVitals from './reportWebVitals';
import Signup from "./meenakshiProject/pages/login.js";
import Login from "./meenakshiProject/pages/signup.js";
import Forgotpassword from "./meenakshiProject/pages/forgotPassword.js";
import App from './App.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
