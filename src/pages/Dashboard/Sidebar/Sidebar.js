import React, { useContext } from 'react';
import './Sidebar.css';
import {
    MailOutline,
    People,
    PersonAdd,
    RateReview,
    AddShoppingCart,
    Redeem,
    Home,
    ExitToApp
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        setLoggedInUser({})
    }


    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">

                    {loggedInUser.role === 'admin' &&
                        <>
                            <h3 className="sidebarTitle">Admin Panel</h3>
                            <ul className="sidebarList">
                                <Link to="/serviceList" className="sidebarListItem link ">
                                    <Redeem className="sidebarIcon" />
                                    All Services
                                </Link>
                                <Link to="/consumersList" className="sidebarListItem link">
                                    <People className="sidebarIcon" />
                                    Service Consumers
                                </Link>
                                <Link to='/serviceProvidersList' className="sidebarListItem link">
                                    <People className="sidebarIcon" />
                                    Service Providers
                                </Link>

                                <Link to="/orderList" className="sidebarListItem link">
                                    <MailOutline className="sidebarIcon" />
                                   All Orders
                                </Link>
                                <Link to="/makeAdmin" className="sidebarListItem link">
                                    <PersonAdd className="sidebarIcon" />
                                    Make Admin
                                </Link>
                                <Link to="/addService" className="sidebarListItem link">
                                    <AddShoppingCart className="sidebarIcon" />
                                    Add Services
                                </Link>
                                <Link to="/reviewList" className="sidebarListItem link">
                                    <RateReview className="sidebarIcon" />
                                    All Reviews
                                </Link>
                            </ul>
                        </>
                    }

                    {loggedInUser.role === 'service-provider' &&
                        <>
                            <h3 className="sidebarTitle">Service Provider Panel</h3>
                            <ul className="sidebarList">
                                <Link to="/providerOwnServices" className="sidebarListItem link ">
                                    <Redeem className="sidebarIcon" />
                                    My Services
                                </Link>
                                <Link to="/addService" className="sidebarListItem link">
                                    <AddShoppingCart className="sidebarIcon" />
                                    Add Services
                                </Link>
                                <Link to="/receivedOrder" className="sidebarListItem link">
                                    <MailOutline className="sidebarIcon" />
                                    Received Orders
                                </Link>
                            </ul>
                        </>
                    }

                    {loggedInUser.role === 'consumer' &&
                        <>
                            <h3 className="sidebarTitle">Service Taker Panel</h3>
                            <ul className="sidebarList">
                                <Link to="/addReview" className="sidebarListItem link">
                                    <RateReview className="sidebarIcon" />
                                    Add Review
                                </Link>
                                <Link to="/ownOrderedList" className="sidebarListItem link">
                                    <MailOutline className="sidebarIcon" />
                                    Order List
                                </Link>
                            </ul>
                        </>
                    }
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="sidebarListItem link active ">
                            <Home className="sidebarIcon" />
                            Home
                        </Link>
                        <li className="sidebarListItem link" onClick={handleLogOut}>
                            <ExitToApp className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;