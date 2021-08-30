import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';
import './UnverifiedProviders.css';

import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const UnverifiedProviders = () => {

    const classes = useStyles();

    return (
        <>
            <TopBarDash />
            <section className="unverifiedProviders">
                <Sidebar />
                <div className="unverifiedProvidersRight">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableHeadBold" align="left">Sl.</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Provider Name</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Email</TableCell>
                                    <TableCell className="tableHeadBold" align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="left">Osama</TableCell>
                                    <TableCell align="left">osama@gmail.com</TableCell>
                                    <TableCell align="center">
                                        <Button><CheckCircleIcon className="approveUnverifiedIcon" /></Button>
                                        <Button><DeleteOutlineIcon className="deleteUnverifiedIcon" /></Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
        </>
    );
};

export default UnverifiedProviders;