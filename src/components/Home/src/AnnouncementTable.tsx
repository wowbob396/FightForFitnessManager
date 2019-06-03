import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MaterialTable, { Column } from 'material-table';


const createData = (text,date) => {
    return { text, date };
}

interface AnnouncementTableProps {
    columns: Column[],
    data: any
}

const AnnouncementTable: React.SFC<AnnouncementTableProps> = (props) => {

    return (
        <Paper>
            <MaterialTable
                title="Announcements"
                columns={props.columns}
                data={props.data}
            />
        </Paper>
    );
}

export default AnnouncementTable;