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
import AnnouncementTable from './AnnouncementTable';
import { Column } from 'material-table';


interface HomeProps {
  logOut(): void;
  fetchUser(): void;
  addAnnouncement(): void;
  auth: Firebase.User;
  announcements: any[];
}



class Home extends Component<HomeProps, any> {

    constructor(props) {
      super(props);
      
      this.state = {
        data: []
      }
    }

    render() {
      console.log(this.props.announcements);

      for (let i = 0;i < this.props.announcements.length; i++) {
        console.log(this.props.announcements[i].data());
        this.state.data.push(this.props.announcements[i].data());
      }

      console.log(this.state);
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

            <div className="table">
              <AnnouncementTable data={this.state.data}/>
            </div>
          </div>
        )
    }
}

const mapStateToProps = ({auth, announcements}) => {
  return {
    auth,
    announcements
  };
};


export default connect(mapStateToProps, actions)(Home); 