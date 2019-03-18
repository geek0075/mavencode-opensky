import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

const mapState = state => {
    return {
        user: state.user
    };
}

const mapDispatch = dispatch => {
    return {
        onLoginClick: (username, password) => {
            dispatch(login(username, password));
        }
    };
}

const LoginContainer = connect(
    mapState,
    mapDispatch
)(Login);

export default LoginContainer;