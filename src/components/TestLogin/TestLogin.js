// import React, { useState } from 'react';
// import './TestLogin.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare, faTwitterSquare, faGoogle, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import log from '../../img/log.svg';
// import register from '../../img/register.svg';
// import NavBar from '../Home/NavBar/NavBar';
// const TestLogin = () => {

//     const [sign, setSign] = useState(true)
    
//     return (
//         <>
//         <NavBar/>
//             <div class="login-container">
//                 <div class="forms-container">
//                     <div class="signin-signup">

//                         {/* sign-in-form */}

//                         {
//                             sign ?
//                                 <form action="#" class="sign-in-form">
//                                     <h2 class="title">Sign in</h2>
//                                     <div class="input-field">
//                                         {/* <i class="fas fa-user"></i> */}
//                                         <FontAwesomeIcon className="fas" icon={faUser} />
//                                         <input type="text" placeholder="Username" />
//                                     </div>
//                                     <div class="input-field">
//                                         <FontAwesomeIcon className="fas" icon={faLock} />
//                                         <input type="password" placeholder="Password" />
//                                     </div>
//                                     <input type="submit" value="Login" class="btn solid" />
//                                     <p class="social-text">Or Sign in with social platforms</p>
//                                     <div class="social-media">
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faFacebookSquare} />
//                                         </Link>
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faTwitterSquare} />
//                                         </Link>
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faGoogle} />
//                                         </Link>
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faLinkedinIn} />
//                                         </Link>
//                                     </div>
//                                 </form>
//                                 :
//                                 <form action="#" class="sign-up-form">
//                                     <h2 class="title">Sign up</h2>
//                                     <div class="input-field">
//                                         <FontAwesomeIcon className="fas" icon={faUser} />
//                                         <input type="text" placeholder="Username" />
//                                     </div>
//                                     <div class="input-field">
//                                         <FontAwesomeIcon className="fas" icon={faEnvelope} />
//                                         <input type="email" placeholder="Email" />
//                                     </div>
//                                     <div class="input-field">
//                                         <FontAwesomeIcon className="fas" icon={faLock} />
//                                         <input type="password" placeholder="Password" />
//                                     </div>
//                                     <input type="submit" class="btn" value="Sign up" />
//                                     <p class="social-text">Or Sign up with social platforms</p>
//                                     <div class="social-media">
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faFacebookSquare} />
//                                         </Link>
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faTwitterSquare} />
//                                         </Link>
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faGoogle} />
//                                         </Link>
//                                         <Link to="#" class="social-icon">
//                                             <FontAwesomeIcon className="fas" icon={faLinkedinIn} />
//                                         </Link>
//                                     </div>
//                                 </form>

//                         }


//                     </div>
//                 </div>
//                 {/* "panel left-panel" */}
//                 <div class="panels-container">
//                     <div class="panel left-panel">
//                         <div class="content">
//                             <h3>New here ?</h3>
//                             <p>
//                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//                                 ex ratione. Aliquid!
//                             </p>
//                             <button class="btn transparent" id="sign-up-btn" onClick={() => setSign((prevSign) => !prevSign)}>
//                                 {
//                                     sign ? <h6>sign up</h6> : <h6> sign in</h6>
//                                 }
//                             </button>
//                         </div>
//                         <img src={log} class="image" alt="" />
//                     </div>

                    {/* <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn" onClick={() => setSign((prevSign) => !prevSign)}>
                                Sign in
                            </button>
                        </div>
                        <img src={register} class="image" alt="" />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default TestLogin;