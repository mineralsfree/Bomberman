import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

for (let i = 0; i <10; i++) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
