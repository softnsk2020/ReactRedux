import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadEmployees} from './actions/ratingActions';
import {loadManagers} from './actions/managerActions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store=configureStore();
store.dispatch(loadEmployees());
store.dispatch(loadManagers());

render(
  <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);
