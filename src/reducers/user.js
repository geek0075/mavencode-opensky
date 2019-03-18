import {
    LOGIN,
    LOGIN_SUCCEEDED,
    LOGIN_FAILED
} from '../actions';

const initialState = {
    isFetching: false,
    isSuccess: false,
    message: null,
    user: null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                isSuccess: false,
                message: null,
                user: null
            });
        case LOGIN_SUCCEEDED:
            return Object.assign({}, state, {
                isFetching: false,
                isSuccess: true,
                message: null,
                user: action.user
            });
        case LOGIN_FAILED:
            console.log(`Reducers.user.LOGIN_FAILED: message => ${action.message}`);
            return Object.assign({}, state, {
                isFetching: false,
                isSuccess: false,
                message: action.message,
                user: null
            });
        default:
            return state;
    }
}

export default user;