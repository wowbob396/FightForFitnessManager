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
  auth: Firebase.User;

}

const columns: Column[] = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
  {
    title: 'Birth Place',
    field: 'birthCity',
    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  },
];

const data = [
  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  {
    name: 'Zerya Betül',
    surname: 'Baran',
    birthYear: 2017,
    birthCity: 34,
  },
];

class Home extends Component<HomeProps, any> {

    

    render() {

      console.log(this.props);
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
              <AnnouncementTable data={data}/>
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