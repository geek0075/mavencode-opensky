import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import AirportListContainer from '../containers/AirportListContainer';
import LoginContainer from '../containers/LoginContainer';
import NoMatch from './NoMatch';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

const store = configureStore();

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters,
    setTimeIntervalMillis,
    login,
    loginSucceeded,
    loginFailed,
    fetchFlights,
    fetchFlightsSucceeded,
    fetchFlightsFailed
} from '../actions';

console.log(store.getState());

const OpenSkyApp = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                <Route path="/" exact component={LoginContainer}/>
                <Route path="/airports" component={AirportListContainer} />
                <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);
  
export default OpenSkyApp;