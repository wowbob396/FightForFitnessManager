import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FirebaseApp from '../../Firebase/firebaseConfig';
import './Home.scss';



export default class Home extends Component {



    render() {



      
        return(
            <div className="root">
            <AppBar position="static" >
              <Toolbar>
                <IconButton  color="inherit" className="menuButton" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="title" color="inherit">
                  Fight For Fitness
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}