import React, { useState, useEffect, useContext } from 'react';
import './OwnOrderList.css';
import Swal from 'sweetalert2';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { userContext } from '../../../App';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const OwnOrderList = () => {
    const classes = useStyles();
    const [loggedInUser] = useContext(userContext)
    const [orders, setOrders] = useState([]);
    const [ids, setIds] = useState(null);

    useEffect(() => {
        fetch(`https://e-sheba.herokuapp.com/own-order/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders.length])

    // Immediately delete form frontEnd
    useEffect(() => {
        setOrders(orders.filter((item) => item._id !== ids))
    }, [ids])
    // Delete service onClick
    const deleteOrder = (id) => {
        console.log(id, 'click')
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
                fetch(`https://e-sheba.herokuapp.com/deleteOrder/${id}`, {
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
            <section className="ownOrderList">
                <Sidebar />
                <div className="ownOrderListRight">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableHeadBold" align="left">SL.</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Service Name</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Order Price</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Order Time</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Order Status</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={order._id}>
                                        <TableCell align="left">{index + 1}</TableCell>
                                        <TableCell align="left">
                                            <img className="ownOrderImage" src={order.serviceImage} alt="" />
                                            &nbsp;  &nbsp;{order.serviceName}
                                        </TableCell>
                                        <TableCell align="left">{order.price}</TableCell>
                                        <TableCell align="left">{order.orderTime}</TableCell>
                                        <TableCell align="left">{order.status}</TableCell>
                                        <TableCell align="left">
                                            <DeleteOutlineIcon
                                                className="deleteOwnOrderIcon"
                                                onClick={() => deleteOrder(order._id)}
                                            />
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

export default OwnOrderList;