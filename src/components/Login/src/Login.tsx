import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from "react-redux";
import { logOut } from '../../../actions';
import FirebaseApp from '../../Firebase/firebaseConfig';
import './Login.scss';


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
}

/**
 * Class for the login page that will handle authentication
 * into the site
 */
class Login extends Component<any,any> {

    constructor(props: any) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/");
        }
    }

    /**
     * This method is called when the user clicks log in
     * the current values for the email and password are passed into
     * an async firebase function to sign in the user
     */
    onSubmit = async event => {

        event.preventDefault();
        try {
            const user = await FirebaseApp
            .auth()
            .signInWithEmailAndPassword(event.target.elements.email.value,event.target.elements.password.value);
            this.props.history.push("/");
        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <main className="main"> 
                <CssBaseline/>
                <Paper className="paper">
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className="form" onSubmit={this.onSubmit}>
                         <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" type="email" autoComplete="current-email"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" type="password" autoComplete="current-password"/>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button type="submit" className="button" color="primary">
                            Submit
                        </Button>

                    </form>
                </Paper>
            </main>
        );
    }
}

export default connect(null, {})(Login);