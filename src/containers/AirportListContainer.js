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
            const end = new Date().getTime();
            const begin = end - (5 * 60000);
            dispatch(fetchFlights(airport, begin, end));
        }
    };
}

const AirportListContainer = connect(
    mapState,
    mapDispatch
)(AirportList);

export default AirportListContainer;