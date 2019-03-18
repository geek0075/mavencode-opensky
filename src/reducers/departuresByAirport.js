const initialState = {};
const departuresByAirport = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DEPARTURES_SUCCEEDED':
            const newState = {};
            newState[action.airport] = action.departures;
            // return newState;
            return Object.assign({}, state, newState);
        case 'FETCH_DEPARTURES_FAILED':
            console.log(`Reducers.departuresByAirport.FETCH_DEPARTURES_FAILED: message => ${action.message}`);
            return state;
        default:
            return state;
    }
};
  
export default departuresByAirport;