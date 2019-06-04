import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import './AnnouncementTable.scss';

interface TableProps {
    data: any[];
}

const AnnouncementTable: React.SFC<TableProps> = (props: TableProps) => {


    return (
        <Paper className="paper">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> Announcement </TableCell>
                        <TableCell align="left"> Date </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                 {  
                     // this is going through each announcement within the data prop, and creates a table row for each one!
                     props.data.map((announcement, index) => {
                        return <TableRow key={index}>
                            <TableCell>{announcement.text}</TableCell>
                            <TableCell>{announcement.date.toDate().toString()}</TableCell>
                        </TableRow>
                    })
                 }   
                </TableBody>
            </Table>
        </Paper>
    );
}

export default AnnouncementTable;