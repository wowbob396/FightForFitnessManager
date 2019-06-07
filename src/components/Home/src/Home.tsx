import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Home.scss';
import Firebase from 'firebase'
import { connect } from "react-redux";
import * as actions from '../../../actions';
import AnnouncementTable from './AnnouncementTable';
import AnnouncementInput from './AnnouncementInput';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

interface HomeProps {
  logOut(): void;
  fetchUser(): void;
  addAnnouncement(newAnnouncement: string): void;
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

      for (let i = 0; i < this.props.announcements.length; i++) {
       
        let data = this.props.announcements[i].data();
        data['id'] = this.props.announcements[i].id;
        this.state.data.push(data);
      }
    
      //TODO: conditionally render the login/logout button

      return(
          <div className="root">
            <AppBar>
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
            <Grid container spacing={8} className="grid">

              <Grid item xs={12} className="textarea">
                <AnnouncementInput submitMethod={this.props.addAnnouncement} />
              </Grid>
              <Grid item xs={12}>
                <AnnouncementTable data={this.state.data}/>
              </Grid>
            </Grid>
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