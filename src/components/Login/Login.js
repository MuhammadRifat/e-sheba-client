import React, { useState } from 'react';
import './Login.css';
import avatar from '../../img/avatar.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../App';
import Swal from 'sweetalert2';
import { handleLogIn, handleSignUp } from './LoginManager';
import { Spinner } from 'react-bootstrap';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        role: ''
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    role: user.role
                }
                setUser(signedInUser);
                checkRole(signedInUser);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    const checkRole = (signedInUser) => {
        if (user.role === 'consumer' || user.role === 'service-provider') {
            fetch('https://e-sheba.herokuapp.com/addUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signedInUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setLoggedInUser(signedInUser);
                        // Add Data to sessionStorage
                        sessionStorage.setItem('user', JSON.stringify(signedInUser))
                        history.replace(from);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Check your role!...',
                            text: 'Your account is not in this role! please check your role.',
                        })
                    }
                })
        }
        else if (user.role === 'admin') {
            fetch('https://e-sheba.herokuapp.com/checkAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: signedInUser.email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(signedInUser)
                        setLoggedInUser(signedInUser);
                        // Add Data to sessionStorage
                        sessionStorage.setItem('user', JSON.stringify(signedInUser))
                        // history.push("/dashboard");
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Check your role!...',
                            text: 'Your account is not as an admin role!',
                        })
                    }
                })
        }
        else {
            alert('Please select what you want to log in as?');
        }
    }

    const handleBlur = (e) => {
        let isFormedValid = true;
        if (e.target.name === 'email') {
            isFormedValid = /\S+@\S+\S+/.test(e.target.value);
            // const isEmailValid = /\S+@\S+\S+/.test(e.target.value);
            // console.log(isEmailValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormedValid = isPasswordValid && passwordHasNumber;
            // console.log(isPasswordValid && passwordHasNumber);
        }
        if (isFormedValid) {
            // debugger;
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        console.log(user);
        if (!newUser && user.email && user.password) {
            setSpinner(true);
            handleLogIn(user.email, user.password)
                .then(res => {
                    if (res.email) {
                        handleLogInUser(res, true);
                    }
                })
        }
        if (newUser && user.email && user.password) {
            setSpinner(true);
            handleSignUp(user.name, user.email, user.password)
                .then(res => {
                    if (res.email) {
                        handleLogInUser(res, false);
                        const userDetail = { ...user };
                        userDetail.error = "";
                        setUser(userDetail);
                        

                    }

                })
        }
        e.preventDefault();
    }

    // For using to reduce repetition code
    const handleLogInUser = (res, isReplace) => {
        const signedInUser = {
            isSignedIn: true,
            name: res.displayName || user.name,
            email: res.email,
            photo: res.photoURL || "https://i.ibb.co/CzkSST0/avater.png",
            role: user.role
        }
        setSpinner(false);
        isReplace && checkRole(signedInUser);

    }

    const handleRadioBtn = (e) => {
        const userData = { ...user, role: e.target.value };
        setUser(userData);
    }

    return (
        <>
            <section className="section-header">
                <NavBar />
                <div className="loginbox ">
                    <img src={avatar} className="avatar" alt="" />

                    <form className="mb-3 text-center login-as">{
                        spinner && <div className="text-center"><Spinner className="text-center" animation="border" /></div>
                    }
                        <p className="pb-2">What do you want to {newUser ? "sign up" : "log in"} as?</p>
                        <input type="radio" onChange={handleRadioBtn} id="consumer" name="role" value="consumer" />
                        <label for="consumer">Consumer</label>

                        <input className="ms-2" type="radio" onChange={handleRadioBtn} id="service_provider" name="role" value="service-provider" />
                        <label for="service_provider">Service Provider</label>

                        {!newUser && <span><input className="ms-2" type="radio" onChange={handleRadioBtn} id="admin" name="role" value="admin" />
                            <label for="admin">Admin</label></span>}
                    </form>

                    <div className="text-center social-btn">
                        <button onClick={handleGoogleSignIn} disabled={!user.role && "disabled"} style={!user.role ? { cursor: 'context-menu', backgroundColor: 'gray' } : {}} > <FontAwesomeIcon className="google-icon" icon={faGoogle} size="lg" /> Continue With Google</button><br />
                    </div>
                    {/* <hr /> */}
                    <h5 className="text-center mt-3 text-or">Or</h5>
                    <form onSubmit={handleSubmit} className="login-form">
                        {
                            newUser && <input type="text" name="name" placeholder="Enter your name" onBlur={handleBlur} required />
                        }
                        <input type="text" name="email" placeholder="Enter Email" onBlur={handleBlur} required />
                        <input type="password" name="password" placeholder="Enter Password" onBlur={handleBlur} required />
                        <input type="submit" value={newUser ? "Sign Up" : "Login"} disabled={!user.role && "disabled"} style={!user.role ? { cursor: 'context-menu', backgroundColor: 'gray' } : {}} />
                        {/* <div className="link-text text-center">
                        <a href="#">Forget password?</a>
                        {" "}
                        <a href="#">Don't have an account?</a>
                    </div> */}

                        <div className="a mt-3 text-center text-logSign">
                            {
                                newUser ? 'already have an account?' : "Don't have an account? "
                            }

                            <span onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer' }}>
                                {
                                    newUser ? 'login' : 'sign up'
                                }
                            </span>

                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Login;