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

const store = configureStore()
store.subscribe()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);