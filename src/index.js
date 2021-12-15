import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from 'components/context/app/App';
import Ruter from 'components/router/Ruter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Ruter />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
