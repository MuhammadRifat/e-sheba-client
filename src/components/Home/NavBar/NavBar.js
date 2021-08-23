import React, { useContext } from 'react';
import { Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../images/default-monochrome.svg'
import { userContext } from '../../../App';
import cover from '../../../img/E-Sheba-logo/cover.png';
const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        setLoggedInUser({})
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    className="d-inline-block align-top w-50 ms-4"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle variant="lg" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto me-5">

                    <Link className="navLink link" to="/">Home </Link>
                    <Link className="navLink link" to="/services">Services </Link>
                    <Link className="navLink link" to="/blogs">Blogs </Link>
                    <Link className="navLink link" to="/about">About </Link>
                    <Link className="navLink link" to="/dashboard">Dashboard</Link>
                    {
                        loggedInUser.email ?
                            <div>
                                <OverlayTrigger
                                    key="bottom"
                                    placement="bottom"
                                    trigger="click"
                                    overlay={
                                        <Tooltip className="logout-tooltip" onClick={handleLogOut}>
                                            &nbsp;&nbsp;Log out&nbsp;&nbsp;
                                        </Tooltip>
                                    }
                                >
                                    <Image className="userImage navLink" src={loggedInUser.photo} alt={loggedInUser.name} style={{ width: '40px', height: '40px' }} roundedCircle />
                                </OverlayTrigger>
                            </div>
                            :
                            <Link className="navLink link" to="/login">Login</Link>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;