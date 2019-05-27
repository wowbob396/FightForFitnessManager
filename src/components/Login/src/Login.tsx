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

    onSubmit = event => {

        const { email, password } = this.state;

        console.log(email,password);
        
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() =>{

            })
        

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
                            <Input id="email" type="email" autoComplete="current-email"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" autoComplete="current-password"/>
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

export default Login;