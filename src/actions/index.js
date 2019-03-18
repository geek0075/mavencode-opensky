export const SET_TIME_INTERVAL_MILLIS = 'SET_TIME_INTERVAL_MILLIS';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const FETCH_FLIGHTS_SUCCEEDED = 'FETCH_FLIGHTS_SUCCEEDED';
export const FETCH_FLIGHTS_FAILED = 'FETCH_FLIGHTS_FAILED';

export const setTimeIntervalMillis = timeInterval => ({
    type: SET_TIME_INTERVAL_MILLIS,
    timeInterval
});

export const login = (username, password) => ({
    type: LOGIN,
    username,
    password
});

export const loginSucceeded = (user) => ({
    type: LOGIN_SUCCEEDED,
    user
});

export const loginFailed = (message) => ({
    type: LOGIN_FAILED,
    message
});

export const fetchFlights = (airport, begin, end) => ({
    type: FETCH_FLIGHTS,
    airport,
    begin,
    end
});

export const fetchFlightsSucceeded = (airport, arrivals, departures) => ({
    type: FETCH_FLIGHTS_SUCCEEDED,
    airport,
    arrivals,
    departures
});

export const fetchFlightsFailed = (airport, message) => ({
    type: FETCH_FLIGHTS_FAILED,
    message
});