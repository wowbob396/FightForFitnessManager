import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import './Login.scss';

const styles = createStyles({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: 300,
        marginRight: 300,

    },
    paper: {
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 50,
    }
});

export default class Login extends Component {
    render() {
        return (
            <main className={styles.main as React.CSSProperties}> 
                <CssBaseline/>
                <Paper>
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                </Paper>
            </main>
        );
    }
}