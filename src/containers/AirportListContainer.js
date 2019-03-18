import { connect } from 'react-redux';
import { fetchFlights, setTimeIntervalMillis } from '../actions';
import AirportList from '../components/AirportList';

const mapState = state => {
    return {
        timeIntervalMillis: state.timeIntervalMillis,
        airports: state.airports,
        flightsByAirport: state.flightsByAirport
    };
}

const mapDispatch = dispatch => {
    return {
        onAirportClick: (airport, timeIntervalMillis) => {
            const end = new Date().getTime();
            const begin = end - timeIntervalMillis;
            dispatch(fetchFlights(airport, Math.floor(begin / 1000), Math.floor(end / 1000)));
        },
        onTimeIntervalChange: timeIntervalMillis => dispatch(setTimeIntervalMillis(timeIntervalMillis))
    };
}

const AirportListContainer = connect(
    mapState,
    mapDispatch
)(AirportList);

export default AirportListContainer;