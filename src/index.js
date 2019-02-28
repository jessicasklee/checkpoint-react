import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import { BrowserRouter as Router, Link, Route } from 'react-router'

import contacts from "./contacts.json";

ReactDOM.render(<App />, document.getElementById('root'));
