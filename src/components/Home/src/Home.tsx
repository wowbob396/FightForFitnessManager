import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FirebaseApp from '../../Firebase/firebaseConfig';
import './Home.scss';
import Firebase from 'firebase'
import { connect } from "react-redux";
import * as actions from '../../../actions';


interface HomeProps {
  logOut(): void;
}

class Home extends Component<HomeProps, any> {



    render() {

      let timestamp = Firebase.firestore.Timestamp.fromMillis(Date.now());

      let logOnButton;

      //TODO: conditionally render the login/logout button

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

                <Button color="inherit" onClick={this.props.logOut}>Log Out</Button>
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  };
};


export default connect(mapStateToProps , actions)(Home); 