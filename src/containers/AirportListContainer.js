import { connect } from 'react-redux';
import { fetchFlights } from '../actions';
import AirportList from '../components/AirportList';

const mapState = state => {
    return {
        airports: state.airports,
        flightsByAirport: state.flightsByAirport
    };
}

const mapDispatch = dispatch => {
    return {
        onAirportClick: airport => {
            // 1 day = 86400000 ms
            const end = new Date().getTime();
            // const begin = end - (5 * 60000);
            const begin = end - (7 * 86400000);
            dispatch(fetchFlights(airport, Math.floor(begin / 1000), Math.floor(end / 1000)));
        }
    };
}

const AirportListContainer = connect(
    mapState,
    mapDispatch
)(AirportList);

export default AirportListContainer;