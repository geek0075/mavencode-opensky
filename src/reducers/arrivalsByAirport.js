const initialState = {};
const arrivalsByAirport = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ARRIVALS_SUCCEEDED':
            const newState = {};
            newState[action.airport] = action.arrivals;
            //return newState;
            return Object.assign({}, state, newState);
        case 'FETCH_ARRIVALS_FAILED':
            console.log(`Reducers.arrivalsByAirport.FETCH_ARRIVALS_FAILED: message => ${action.message}`);
            return state;
        default:
            return state;
    }
};
  
export default arrivalsByAirport;