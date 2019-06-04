import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { createStyles, makeStyles,  } from '@material-ui/styles';
// import { Theme } from '@material-ui/core/styles';

import './AnnouncementTable.scss';

const createData = (text,date) => {
    return { text, date };
}

interface TableProps {
    data: any[];
}

const AnnouncementTable: React.SFC<TableProps> = (props: TableProps) => {

    console.log(props);
    let cells;

    props.data.map(data => {
        console.log(data.date);
        console.log(data.text);
    });

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