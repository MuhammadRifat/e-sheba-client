import React, { useState, useEffect } from 'react';
import './UnverifiedProviders.css';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';

import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Swal from 'sweetalert2';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const UnverifiedProviders = () => {
    const [providers, setProviders] = useState([])
    const classes = useStyles();

    // fetch data...
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/unverified-provider/service-provider')
            .then(res => res.json())
            .then(data => setProviders(data))
    }, [providers])

    // update verified
    const handleUpdatedVerified = (id) => {
        const finalVerified = { isVerified: "yes" };
        fetch(`https://e-sheba.herokuapp.com/updateVerified/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finalVerified)
        })
            .then(res => res.json())
            .then(data => {
                console.log('update done', data);
                Swal.fire('Saved!', '', 'success');
            }).catch((err) => console.log(err))
    }


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
                                {providers.map((provider, index) => (

                                    <TableRow key={provider._id}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="left">
                                            <img className="providerImg" src={provider.photo} alt="" />
                                            {provider.name}
                                        </TableCell>
                                        <TableCell align="left">{provider.email}</TableCell>
                                        <TableCell align="center">
                                            <Button>
                                                <DeleteOutlineIcon className="deleteUnverifiedIcon" />
                                            </Button>
                                            <Button onClick={() => handleUpdatedVerified(provider._id)}>
                                                <CheckCircleIcon className="approveUnverifiedIcon" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
        </>
    );
};

export default UnverifiedProviders;