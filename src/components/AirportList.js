import React from 'react';
import PropTypes from 'prop-types';
import Airport from './Airport';

class AirportList extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        const { airports, onAirportClick, flightsByAirport } = this.props;
        return (
            <ul className='grid'>
                {airports.map((airport, index) => (
                    <Airport key={index} {...airport} onClick={() => onAirportClick(airport.icao)} />
                ))}
            </ul>
        );
    }
}

AirportList.propTypes = {
    airports: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            icao: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onAirportClick: PropTypes.func.isRequired
};

export default AirportList;