import {
    FETCH_FLIGHTS,
    FETCH_FLIGHTS_SUCCEEDED,
    FETCH_FLIGHTS_FAILED
} from '../actions';

const initialState = {
    KATL: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    KLAX: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    KLGA: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    EGLL: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    EGKK: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    KJFK: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    RJTT: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    ZSPD: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    LFPG: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    ZBAA: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    OMDB: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    },
    EDDF: {
        isFetching: false,
        isSuccess: false,
        message: null,
        arrivals: null,
        departures: null
    }
};

const flightsByAirport = (state = initialState, action) => {
    let newState;
    let flightsState;
    switch (action.type) {
        case FETCH_FLIGHTS:
            newState = Object.assign({}, state);
            flightsState = newState[action.airport];
            flightsState.isFetching = true;
            flightsState.isSuccess = false;
            flightsState.message = null;
            flightsState.arrivals = null;
            flightsState.departures = null;
            return newState;
        case FETCH_FLIGHTS_SUCCEEDED:
            newState = Object.assign({}, state);
            flightsState = newState[action.airport];
            flightsState.isFetching = false;
            flightsState.isSuccess = true;
            flightsState.message = null;
            flightsState.arrivals = action.arrivals;
            flightsState.departures = action.departures;
            return newState;
        case FETCH_FLIGHTS_FAILED:
            console.log(`Reducers.flightsByAirport.FETCH_FLIGHTS_FAILED: message => ${action.message}`);
            newState = Object.assign({}, state);
            flightsState = newState[action.airport] || {};
            flightsState.isFetching = false;
            flightsState.isSuccess = false;
            flightsState.message = action.message;
            flightsState.arrivals = null;
            flightsState.departures = null;
            return newState;
        default:
            return state;
    }
};
  
export default flightsByAirport;