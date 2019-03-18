import { combineReducers } from 'redux';
import airports from './airports';
import timeIntervalMillis from './timeIntervalMillis';
import user from './user';
import flightsByAirport from './flightsByAirport';

export default combineReducers({
    airports,
    timeIntervalMillis,
    user,
    flightsByAirport
});