import React from 'react';
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


const handleSubmit = () => {

}

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

const AnnouncementInput: React.SFC<TextAreaProps> = (props) => {
    console.log(props);
    return (
        <form onSubmit={handleSubmit} className="textarea">
            <TextField
                label="Write an Announcement!"
                multiline
                fullWidth={true}
                rows="4"
                rowsMax="4"
                margin="normal"

            />

            <ColorButton color="primary" type="submit">
                Submit
            </ColorButton>
        </form>
    );
}

export default AnnouncementInput;