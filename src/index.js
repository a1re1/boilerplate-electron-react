import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import TitleBar from './components/TitleBar';
import reportWebVitals from './js/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <body>
      <div class="container">
        <div class="header"><TitleBar /></div>
        <div class="body"><App /></div>
      </div>
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
