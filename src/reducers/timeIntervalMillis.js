const initialState = 86400000;

const timeIntervalMillis = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIME_INTERVAL_MILLIS':
      return action.timeInterval;
    default:
      return state;
  }
}

export default timeIntervalMillis;