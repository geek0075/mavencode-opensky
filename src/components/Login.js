import React from 'react';
import PropTypes from 'prop-types';

import '@material/react-button/dist/button.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-typography/dist/typography.css';
import '@material/react-material-icon/dist/material-icon.css';

import MaterialIcon from '@material/react-material-icon';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Button from '@material/react-button';

import {
    Body1,
    Body2,
    Caption,
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Headline5,
    Headline6,
    Overline,
    Subtitle1,
    Subtitle2,
} from '@material/react-typography';

import toastr from 'toastr';
import 'toastr/build/toastr.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUsernameChange(event) {
        const { username:oldValue } = this.state;
        const txtUsername = event.target;
        const valid = txtUsername.validity.valid;
        const value = txtUsername.value;
        console.log(`Login.handleUsernameChange: value => ${value}, oldValue => ${oldValue}, valid => ${valid}`);
        const newState = Object.assign({}, this.state, {username: value});
        this.setState(newState);
    }

    handlePasswordChange(event) {
        const { password:oldValue } = this.state;
        const txtPassword = event.target;
        const value = txtPassword.value;
        const newState = Object.assign({}, this.state, {password: value});
        this.setState(newState);
    }

    handleLoginClick(event) {
        const { username, password } = this.state;
        event.preventDefault();
        event.stopPropagation();
        if (!username || username.length <= 0) {
            toastr.error(`Username is required!`);
            return;
        }
        if (!password || password.length <= 0) {
            toastr.error(`Password is required!`);
            return;
        }
        const { onLoginClick } = this.props;
        onLoginClick(username, password);
    }
    
    render() {
        const { user } = this.props;
        const isSuccess = !user.isFetching && user.isSuccess && user.user && !user.message;
        if (isSuccess) this.props.history.push('/airports');
        else if (!user.isSuccess && !user.user && user.message) toastr.error(user.message);
        return (
            <div>
                {(user && user.isFetching) &&
                    <div class="fa-3x progress">
                        <i class="fas fa-spinner fa-pulse"></i>
                    </div>
                }
                <form className="container">
                    <section className="header">
                        <h1>OPENSKY</h1>
                    </section>
                    <TextField 
                        label='Username' 
                        className="mdc-text-field username" 
                        helperText={<HelperText>Your username</HelperText>}
                        leadingIcon={<MaterialIcon icon="account_circle"/>} >
                        <Input 
                            className="mdc-text-field__input" 
                            value={this.state.username}
                            required={true}
                            onChange={this.handleUsernameChange} />
                    </TextField>
                    <TextField 
                        label='Password' 
                        className="mdc-text-field password" 
                        helperText={<HelperText>Your password</HelperText>}
                        leadingIcon={<MaterialIcon icon="lock"/>} >
                        <Input 
                            className="mdc-text-field__input"
                            type="password"
                            value={this.state.password}
                            required={true}
                            onChange={this.handlePasswordChange} />
                    </TextField>
                    <div class="button-container">
                        <Button className="mdc-button cancel">Cancel</Button>
                        <Button 
                            className="mdc-button mdc-button--raised next" 
                            raised={true}
                            disabled={user.isFetching}
                            onClick={this.handleLoginClick}>
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Login;