import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AuthenticationProvider from './context/AuthenticationProvider';
// layout
import Layout from './layouts/Layout';
// main styles
import 'assets/index.css';
// router
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthenticationProvider>
      <Layout>
        <Router />
      </Layout>
    </AuthenticationProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
