import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.min.css"
import {Provider} from 'react-redux' 
import './css/dashboard.css'
import './css/App.css';
import { configureStore } from './Store/configureStore';
import $ from 'jquery'; 
import Links from './components/Links';

const store = configureStore()

const local = "http://localhost:8080/"
const live = "https://ikariyernet.herokuapp.com/"

Links.HOST = window.location.hostname.search("localhost")<= -1 ? local : live

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);