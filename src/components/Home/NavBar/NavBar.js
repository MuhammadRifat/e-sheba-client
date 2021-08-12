import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../images/default-monochrome.svg'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
            <img
                src={logo}
                className="d-inline-block align-top w-75 ms-4"
                alt=""
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-5">
                
                <Link className="link" to="/home">Home </Link>
                <Link className="link" to="/services">Services </Link>
                <Link className="link" to="/blogs">Blogs </Link>
                <Link className="link" to="/about">About </Link>
                <Link className="link" to="/dashboard">Dashboard</Link>
                <Link className="link" to="/login">Login </Link>
                {/* Dynamically change login button to user image */}
                {/* {
                    loggedInUser.email ? <Image src={loggedInUser.photo} alt={loggedInUser.name} style={{width:'40px', height:'40px', marginRight:'60px'}} roundedCircle/> : <Link className="link" to="/login"><button id="login-btn">Login</button></Link>
                } */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;