import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
    LOGIN,
    LOGIN_SUCCEEDED,
    LOGIN_FAILED,
    FETCH_FLIGHTS,
    FETCH_FLIGHTS_SUCCEEDED,
    FETCH_FLIGHTS_FAILED
} from './actions';

import Api from './api/Api';

function* loginRequest(action) {
    try {
        const user = yield call(Api.loginUser, action.username, action.password);
        console.log(`sagas.loginRequest.LOGIN_SUCCEEDED: user => ${JSON.stringify(user)}`);
        yield put({type: LOGIN_SUCCEEDED, user});
    } catch (error) {
        console.log(`sagas.loginRequest.LOGIN_FAILED: error => ${JSON.stringify(error)}`);
        yield put({type: LOGIN_FAILED, message: error.message});
    }
}

function* watchLoginRequest() {
    yield takeLatest(LOGIN, loginRequest);
}

function* flightsRequest(action) {
    try {
        const flights = yield call(Api.fetchFlights, action.airport, action.begin, action.end);
        console.log(`sagas.flightsRequest.FETCH_FLIGHTS_SUCCEEDED: flights => ${JSON.stringify(flights)}`);
        yield put({type: FETCH_FLIGHTS_SUCCEEDED, airport: action.airport, arrivals: flights.arrivals, departures: flights.departures});
    } catch (error) {
        console.log(`sagas.loginRequest.flightsRequest: error => ${JSON.stringify(error)}`);
        yield put({type: FETCH_FLIGHTS_FAILED, message: error.message});
    }
}

function* watchFlightsRequest() {
    yield takeLatest(FETCH_FLIGHTS, flightsRequest);
}

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchFlightsRequest()
    ])
};