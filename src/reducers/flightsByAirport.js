import {
    FETCH_FLIGHTS,
    FETCH_FLIGHTS_SUCCEEDED,
    FETCH_FLIGHTS_FAILED
} from '../actions';

/*const initialState = {
    isFetching: false,
    arrivals: [],
    departures: []
};*/

const initialState = {};

const flightsByAirport = (state = initialState, action) => {
    let newState;
    let flightsState;
    switch (action.type) {
        case FETCH_FLIGHTS:
            newState = Object.assign({}, state);
            flightsState = newState[action.airport] || {};
            flightsState.isFetching = true;
            return newState;
        case FETCH_FLIGHTS_SUCCEEDED:
            newState = Object.assign({}, state);
            flightsState = newState[action.airport] || {};
            flightsState.isFetching = false;
            flightsState.arrivals = action.arrivals;
            flightsState.departures = action.departures;
            return newState;
        case FETCH_FLIGHTS_FAILED:
            console.log(`Reducers.flightsByAirport.FETCH_FLIGHTS_FAILED: message => ${action.message}`);
            newState = Object.assign({}, state);
            flightsState = newState[action.airport] || {};
            flightsState.isFetching = false;
            flightsState.arrivals = [];
            flightsState.departures = [];
            return newState;
        default:
            return state;
    }
};
  
export default flightsByAirport;