import React, { useState, useEffect } from 'react';
import './ServiceProvider.css';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';
import Swal from 'sweetalert2';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ServiceProvider = () => {
    const classes = useStyles();
    const [serviceProviders, setServiceProviders] = useState([]);
    const [ids, setIds] = useState(null);

    // https://e-sheba.herokuapp.com/loadAll/service-provider

    useEffect(() => {
        fetch('http://localhost:5000/loadAll/service-provider')
            .then(res => res.json())
            .then(data => setServiceProviders(data))
    }, [])


    // Immediately delete form frontEnd
    useEffect(() => {
        setServiceProviders(serviceProviders.filter((item) => item._id !== ids))
    }, [ids])

    // Delete service onClick
    const deleteService = (id) => {

        // Fancy pop up
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );

                setIds(id)
                console.log(id, 'clicked')
                fetch(`https://e-sheba.herokuapp.com/deleteProvider/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => { console.log(result) })
            }
        })

    }

    return (
        <>
            <TopBarDash />
            <section className="serviceProviders">
                <Sidebar />
                <div className="serviceProvidersRight">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableHeadBold" align="left">Service Provider Name</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Service Provider Email</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Role</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Is Verified</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {serviceProviders.map((serviceProvider) => (
                                    <TableRow key={serviceProvider._id}>
                                        <TableCell align="left">
                                            <img className="serviceProvidersImage" src={serviceProvider.photo} alt="" />
                                            &nbsp;  &nbsp;{serviceProvider.name}
                                        </TableCell>
                                        <TableCell align="left">{serviceProvider.email}</TableCell>
                                        <TableCell align="left">{serviceProvider.role}</TableCell>
                                        <TableCell align="left">{serviceProvider.isVerified}</TableCell>
                                        <TableCell align="left"><DeleteOutlineIcon onClick={() => deleteService(serviceProvider._id)} className="deleteServiceProviderIcon" /></TableCell>
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

export default ServiceProvider;