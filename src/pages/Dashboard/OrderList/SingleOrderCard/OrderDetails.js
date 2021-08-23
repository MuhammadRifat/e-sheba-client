import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);
const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const OrderDetails = ({ open, setOpen, order }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {order.serviceName} - ${order.price}
                </DialogTitle>
                <DialogContent dividers className="dialogue-info">
                    <div className="dialogue-service-info">
                        <h5>Service Info</h5>
                        <Typography gutterBottom>
                            <span className="text-bold">Provider Name</span> - Shahinur Alam Bhuiyan {order?.serviceProviderName}
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Provider Email</span> - {order?.serviceProviderEmail}
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Status</span> - {order?.status}
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Service Details</span> - <br />{order?.serviceDetails}
                        </Typography>
                    </div>
                    <div className="dialogue-consumer-info">
                        <h5>Consumer Info</h5>
                        <Typography gutterBottom>
                            <span className="text-bold">Consumer Name</span> - {order?.shipment?.name}
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Consumer Email</span> - {order?.shipment?.email}
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Consumer Phone</span> - {order?.shipment?.phone}
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Order Time</span>- 10-08-2021
                        </Typography>
                        <Typography gutterBottom>
                            <span className="text-bold">Address</span> - <br />{order?.shipment?.address}
                        </Typography>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default OrderDetails;