import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import cream from '../../img/cream.png';
import cover from '../../img/E-Sheba-logo/cover.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkedAlt, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <section className="contact-container">
            <nav class="nav navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-center ">
                            <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/">Services</Link>
                            <Link class="nav-link" to="/">About Us</Link>
                            <Link class="nav-link" to="/">FAQ's</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="text-center container">
                <h5 data-aos="fade-up" class="support-title">Contact<span className=""> Us</span></h5>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <img data-aos="fade-left" className="contact-img" src={cream} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-up" className="contact-title text-start">
                            <h2 className="text-start h2"> Get in touch</h2>
                            <p className="p">We'd Love to Hear From You, Lets Get In Touch!</p>
                        </div>
                        <div className="row">
                            <div data-aos="fade-down" className="col-6 text-start col-left">
                                <h6 className="fw-bold"> Address</h6>
                                <p className="p">4005 Silver business point India</p>
                                <h6 className="fw-bold"> Email</h6>
                                <p className="p">EShebaSupport@gmail.com</p>
                            </div>
                            <div data-aos="fade-up" className="col-6 text-start col-right">
                                <h6 className="fw-bold"> Phone</h6>
                                <p className="p">0211455452</p>
                                <h6 className="fw-bold"> Additional Information</h6>
                                <p className="p">We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="text-start">
                            <h6 className="social-text">Social</h6>
                            <div className="d-flex social-icon">
                                <FontAwesomeIcon className="contact-icon" icon={faFacebookSquare} />
                                <FontAwesomeIcon className="contact-icon" icon={faTwitterSquare} />
                                <FontAwesomeIcon className="contact-icon" icon={faYoutubeSquare} />
                                <FontAwesomeIcon className="contact-icon" icon={faInstagramSquare} />
                            </div>
                        </div>
                        <div data-aos="fade-down" className="contact-line text-start mt-3">
                            <span class="contact-1"></span> <br />
                            <span class="contact-2"></span> <br />
                            <span class="contact-3"></span>
                        </div>
                    </div>
                </div>

                <div className="contact">
                    <div className="contact-title-two">
                        <h2 data-aos="fade-up" className="h2">LEAVE US A MESSAGE</h2>
                        <p data-aos="fade-up" className="p">-Good For Nature, Good For You-</p>
                    </div>

                    <div data-aos="fade-up" className="md-5 pb-5 rounded">
                        <div className="d-flex justify-content-between mb-3">
                            <input type="text" className="contact-form form-control"  placeholder="name" required />
                            <input type="text" className="contact-form form-control"  placeholder="email"  required />
                            <input type="text" className="contact-form form-control" placeholder="number" required />
                        </div>
                        <div className="">
                            <textarea className=" form-control" rows="3" type="text" placeholder="message" required/>
                        </div>
                        <input type="submit" className="btn btn-danger mt-3"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;