export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const SET_TIME_INTERVAL_MILLIS = 'SET_TIME_INTERVAL_MILLIS';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const FETCH_FLIGHTS_SUCCEEDED = 'FETCH_FLIGHTS_SUCCEEDED';
export const FETCH_FLIGHTS_FAILED = 'FETCH_FLIGHTS_FAILED';
export const FETCH_ARRIVALS = 'FETCH_ARRIVALS';
export const FETCH_ARRIVALS_SUCCEEDED = 'FETCH_ARRIVALS_SUCCEEDED';
export const FETCH_ARRIVALS_FAILED = 'FETCH_ARRIVALS_FAILED';
export const FETCH_DEPARTURES = 'FETCH_DEPARTURES';
export const FETCH_DEPARTURES_SUCCEEDED = 'FETCH_DEPARTURES_SUCCEEDED';
export const FETCH_DEPARTURES_FAILED = 'FETCH_DEPARTURES_FAILED';

let nextTodoId = 0;
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

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

export const fetchArrivals = (airport, begin, end) => ({
    type: FETCH_ARRIVALS,
    airport,
    begin,
    end
});

export const fetchArrivalsSucceeded = (airport, arrivals) => ({
    type: FETCH_ARRIVALS_SUCCEEDED,
    airport,
    arrivals
});

export const fetchArrivalsFailed = (airport, message) => ({
    type: FETCH_ARRIVALS_FAILED,
    message
});

export const fetchDepartures = (airport, begin, end) => ({
    type: FETCH_DEPARTURES,
    airport,
    begin,
    end
});

export const fetchDeparturesSucceeded = (airport, departures) => ({
    type: FETCH_DEPARTURES_SUCCEEDED,
    airport,
    departures
});

export const fetchDeparturesFailed = (message) => ({
    type: FETCH_DEPARTURES_FAILED,
    message
});