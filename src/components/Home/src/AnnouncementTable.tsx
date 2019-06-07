import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteAnnouncement } from '../../../actions/';

import './AnnouncementTable.scss';

interface TableProps {
    data: any[];
}




class AnnouncementTable extends Component<TableProps, any> {

    constructor(props) {
        super(props);

        this.state = {
            announcements: this.props.data,
        };
    }

    private onDelete = (event,id) => {
        console.log(id);
    }

    render() {
        return (
            <Paper className="paper">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> Announcement </TableCell>
                            <TableCell align="left"> Date </TableCell>
                            <TableCell><DeleteIcon/></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                     {  
                         // this is going through each announcement within the data prop, and creates a table row for each one!
                         this.state.announcements.map((announcement, index) => {
                            return <TableRow key={announcement.id}>
                                <TableCell>{announcement.text}</TableCell>
                                <TableCell>{announcement.date.toDate().toString()}</TableCell>
                                <TableCell><IconButton onClick={event => this.onDelete(event,announcement.id)}><DeleteIcon/></IconButton></TableCell>
                            </TableRow>
                        })
                     }   
                    </TableBody>
                </Table>
            </Paper>
        );

    }

}

export default AnnouncementTable;