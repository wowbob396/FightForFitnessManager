import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import './Home.scss';
import {
    createMuiTheme,
    createStyles,
    withStyles,
    Theme,
  } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';




const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);
  

interface TextAreaProps {
   submitMethod: (newAnnouncement: string) => void; 
}

class AnnouncementInput extends Component<TextAreaProps, any> {
    
    constructor(props) {
        super(props);
    }

    handleInputChange = event => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState({
        [name]: value
      });
    }


    onSubmit = () => {
        if (this.state.text !== undefined || this.state.text !== null) {
            this.props.submitMethod(this.state.text);
        }
    }
 
    render() {
        return (
            <form onSubmit={this.onSubmit}  className="textarea">
                <TextField
                    label="Write an Announcement!"
                    multiline
                    fullWidth={true}
                    rows="4"
                    rowsMax="4"
                    margin="normal"
                    onChange={this.handleInputChange}
                    name="text"
                />
    
                <ColorButton color="primary" type="submit">
                    Submit
                </ColorButton>
            </form>
        );
    }

}

export default AnnouncementInput;