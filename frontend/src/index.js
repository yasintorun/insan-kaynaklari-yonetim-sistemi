import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.min.css"
import { Provider } from 'react-redux'
import './css/dashboard.css'
import './css/App.css';
import { configureStore } from './Store/configureStore';
import $ from 'jquery';
import Links from './components/Links';
import Helper from './utilities/Helper';

const store = configureStore()

store.subscribe(() => {
  if(!(!!Helper.LoadState()?.user?.id))
    Helper.SaveState({
      ...store.getState().user,
    })
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);