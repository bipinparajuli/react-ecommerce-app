import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { StateProvider } from './container/StateProvider';
import Reducer,{initailState} from './container/Reducer'
ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initailState} reducer={Reducer}>
    <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

