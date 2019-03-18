import React from 'react';
import PropTypes from 'prop-types';
import Airport from './Airport';

import "@material/react-dialog/dist/dialog.css";
import '@material/react-radio/dist/radio.css';

import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
} from '@material/react-dialog';

import Radio, { NativeRadioControl } from '@material/react-radio';

import toastr from 'toastr';
import 'toastr/build/toastr.css';

class AirportList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeInterval: '86400000',
            isOpen: false,
            airport: null,
            airportName: null
        };
        this.handleAirportClick = this.handleAirportClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleTimeIntervalChange = this.handleTimeIntervalChange.bind(this);
    }

    handleAirportClick(icao) {
        const { airports, onAirportClick, timeIntervalMillis } = this.props;
        const airport = airports.find((item) => { 
            return item.icao === icao;
        });
        const airportName = airport ? airport.name : icao;
        this.setState(Object.assign({}, this.state, {isOpen: true, airport: icao, airportName}));
        onAirportClick(icao, timeIntervalMillis);
    }

    handleDialogClose(action) {
        this.setState(Object.assign({}, this.state, {isOpen: false, airport: null, airportName: null}));
    }

    handleTimeIntervalChange(event) {
        const { onTimeIntervalChange } = this.props;
        const timeIntervalMillis = parseInt(event.target.value);
        this.setState(Object.assign({}, this.state, {timeInterval: event.target.value}));
        onTimeIntervalChange(timeIntervalMillis);
    }

    render() {
        const { airports, flightsByAirport } = this.props;
        const { timeInterval, isOpen, airport, airportName } = this.state;
        let isFetching = false;
        let isSuccess = false;
        let arrivals = [];
        let departures = [];
        let message = 'Something bad happened!';
        if (airport) {
            const flightsState = flightsByAirport[airport];
            isFetching = flightsState.isFetching;
            isSuccess = flightsState.isSuccess;
            arrivals = flightsState.arrivals;
            departures = flightsState.departures;
            message = flightsState.message;
            /*isSuccess = !flightsState.isFetching && flightsState.isSuccess && flightsState.arrivals && flightsState.departures && !flightsState.message;
            if (isSuccess) {
                // todo 
            }
            else if (!flightsState.isSuccess && !flightsState.arrivals && !flightsState.departures && flightsState.message) toastr.error(flightsState.message);*/
        }
        return (
            <div>
                <Dialog 
                    open={isOpen}
                    escapeKeyAction=''
                    onClose={(action) => this.handleDialogClose(action)}>
                    <DialogTitle>{airportName && airportName.toUpperCase()} FLIGHTS</DialogTitle>
                    <DialogContent>
                        {isFetching ? (
                            <div className="modal-content">
                                <p>Loading flights for {airport}...</p>
                                <div class="fa-3x progress">
                                    <i class="fas fa-spinner fa-pulse"></i>
                                </div>
                            </div>
                        ) : (
                            <span>{isSuccess ? (
                                <div className="modal-content">
                                    <h1>Arrivals</h1>
                                    {arrivals &&
                                        <table>
                                            <tr>
                                                <th>ICAO24</th>
                                                <th>FIRST SEEN</th>
                                                <th>EST DEPARTURE PORT</th>
                                                <th>LAST SEEN</th>
                                                <th>EST ARRIVAL PORT</th>
                                                <th>CALL SIGN</th>
                                                <th>D. HORIZ DISTANCE</th>
                                                <th>D. HORIZ DISTANCE</th>
                                                <th>A. HORIZ DISTANCE</th>
                                                <th>A. HORIZ DISTANCE</th>
                                                <th>D. PORT CANDIDATES</th>
                                                <th>A. PORT CANDIDATES</th>
                                            </tr>
                                            {arrivals.map((arrival, index) =>
                                                <tr key={index}>
                                                    <td>{arrival.icao24}</td>
                                                    <td>{arrival.firstSeen}</td>
                                                    <td>{arrival.estDepartureAirport}</td>
                                                    <td>{arrival.lastSeen}</td>
                                                    <td>{arrival.estArrivalAirport}</td>
                                                    <td>{arrival.callsign}</td>
                                                    <td>{arrival.estDepartureAirportHorizDistance}</td>
                                                    <td>{arrival.estDepartureAirportVertDistance}</td>
                                                    <td>{arrival.estArrivalAirportHorizDistance}</td>
                                                    <td>{arrival.estArrivalAirportVertDistance}</td>
                                                    <td>{arrival.departureAirportCandidatesCount}</td>
                                                    <td>{arrival.arrivalAirportCandidatesCount}</td>
                                                </tr>
                                            )}
                                        </table>
                                    }
                                    <h1>Departures</h1>
                                    {departures &&
                                        <table>
                                            <tr>
                                                <th>ICAO24</th>
                                                <th>FIRST SEEN</th>
                                                <th>EST DEPARTURE PORT</th>
                                                <th>LAST SEEN</th>
                                                <th>EST ARRIVAL PORT</th>
                                                <th>CALL SIGN</th>
                                                <th>D. HORIZ DISTANCE</th>
                                                <th>D. HORIZ DISTANCE</th>
                                                <th>A. HORIZ DISTANCE</th>
                                                <th>A. HORIZ DISTANCE</th>
                                                <th>D. PORT CANDIDATES</th>
                                                <th>A. PORT CANDIDATES</th>
                                            </tr>
                                            {departures.map((departure, index) =>
                                                <tr key={index}>
                                                    <td>{departure.icao24}</td>
                                                    <td>{departure.firstSeen}</td>
                                                    <td>{departure.estDepartureAirport}</td>
                                                    <td>{departure.lastSeen}</td>
                                                    <td>{departure.estArrivalAirport}</td>
                                                    <td>{departure.callsign}</td>
                                                    <td>{departure.estDepartureAirportHorizDistance}</td>
                                                    <td>{departure.estDepartureAirportVertDistance}</td>
                                                    <td>{departure.estArrivalAirportHorizDistance}</td>
                                                    <td>{departure.estArrivalAirportVertDistance}</td>
                                                    <td>{departure.departureAirportCandidatesCount}</td>
                                                    <td>{departure.arrivalAirportCandidatesCount}</td>
                                                </tr>
                                            )}
                                        </table>
                                    }
                                </div>
                            ): (
                                <div className="modal-content">
                                    {message &&
                                        <p>
                                            {message}
                                        </p>
                                    }
                                </div>
                            )}</span>
                        )}
                    </DialogContent>
                    <DialogFooter>
                        <DialogButton action='dismiss' disabled={isFetching}>Dismiss</DialogButton>
                    </DialogFooter>
                </Dialog>
                <div className="time-interval">
                    <Radio label='1 Day(s)' key='1days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='86400000'}
                            value='86400000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                    <Radio label='2 Day(s)' key='2days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='172800000'}
                            value='172800000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                    <Radio label='3 Day(s)' key='3days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='259200000'}
                            value='259200000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                    <Radio label='4 Day(s)' key='4days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='345600000'}
                            value='345600000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                    <Radio label='5 Day(s)' key='5days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='432000000'}
                            value='432000000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                    <Radio label='6 Day(s)' key='6days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='518400000'}
                            value='518400000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                    <Radio label='7 Day(s)' key='7days'>
                        <NativeRadioControl
                            name='timeInterval'
                            checked={timeInterval==='604800000'}
                            value='604800000'
                            onChange={this.handleTimeIntervalChange} />
                    </Radio>
                </div>
                <ul className='grid'>
                    {airports.map((airport, index) => (
                        <Airport key={index} {...airport} onClick={() => this.handleAirportClick(airport.icao)} />
                    ))}
                </ul>
            </div>
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