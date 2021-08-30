import React from 'react';
import './AboutUs.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faPaintRoller, faBolt, faHammer, faChair, faShoppingCart, faSmile, faUser, faTrophy } from '@fortawesome/free-solid-svg-icons';

// components
import Competencies from './Competencies/Competencies';
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../Footer/Footer';
import Developers from './Developers/Developers';

// images
import Rahat from '../../images/Rahat.png';
import Faisal from '../../images/Faisal.png';
import Shahinur from '../../images/Shahinur.jpg'
import Raisul from '../../images/Raisul.jpg';
import Rifat from '../../images/Rifat.jpg';
import Award1 from '../../images/a1.jpg';
import Award2 from '../../images/a2.jpg';
import Award3 from '../../images/a3.jpg';
import Award4 from '../../images/a4.jpg';


const competencies = [
    {
        name: "Home Cleaning",
        icon: <FontAwesomeIcon icon={faHome} className="fa-3x" />
    },
    {
        name: "Car Wash",
        icon: <FontAwesomeIcon icon={faCar} className="fa-3x" />
    },
    {
        name: "Painting service",
        icon: <FontAwesomeIcon icon={faPaintRoller} className="fa-3x" />
    },
    {
        name: "Electrical Service",
        icon: <FontAwesomeIcon icon={faBolt} className="fa-3x" />
    },
    {
        name: "Carpentry service",
        icon: <FontAwesomeIcon icon={faHammer} className="fa-3x" />
    },
    {
        name: "Furniture service",
        icon: <FontAwesomeIcon icon={faChair} className="fa-3x" />
    }
]

const developers = [
    {
        name: 'Kazi Md. Bokhtiar Uddin Rahat',
        img: Rahat
    },
    {
        name: 'Faisal Ahmed Tonoy',
        img: Faisal
    },
    {
        name: 'Shahinur Alam Bhuiyan',
        img: Shahinur
    },
    {
        name: 'Md. Raisul Islam',
        img: Raisul
    },
    {
        name: 'Mohammed Rifat',
        img: Rifat
    }
]

const AboutUs = () => {
    return (
        <>
            <section>
                <main className="header-container">
                    <NavBar />
                    <div className="text-center d-flex flex-column justify-content-around">
                        <div data-aos="fade-up">
                            <h1 className="about-title">WELCOME TO E-SHEBA</h1>
                            <h1>THE <span className="fw-bold">BEST</span> SERVICE <span className="fw-bold">EXPERTS</span> AND</h1>
                            <h1><span className="fw-bold">QUALIFIED</span> STAFF</h1>
                        </div>
                        <div>
                            <h3 className=" about-second-title pt-5 pb-2">E-Sheba is a new on-demand service platform <br /> that connects households and businesses with <br /> the best service providers, comes in.</h3>
                            <button data-aos="fade-right" className="btn btn-danger">CONTACT NOW</button>
                        </div>
                    </div>
                </main>
                <div className="container">
                    <h3 data-aos="fade-up" className="mt-5 mb-4 fw-bold">CORE COMPETENCIES</h3>
                    <p>We offer full spectrum of services to help organizations function more effectively. Some of our services are highlighted below:</p>
                    <div data-aos="fade-up" className="row row-cols-2 row-cols-md-6 mt-5">
                        {competencies.map(competence => <Competencies competence={competence}></Competencies>)}
                    </div>
                </div>
                <div data-aos="fade-up" className="clients">
                    <div className="container d-flex justify-content-around flex-wrap">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faSmile} className="fa-3x" style={{ color: 'orange' }}></FontAwesomeIcon>
                            <div className="item figItem">
                                <h1><CountUp start={700} end={800} suffix="+" duration={3} /></h1>
                                <h6>Happy Clients</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faUser} className="fa-3x" style={{ color: 'orange' }}></FontAwesomeIcon>
                            <div className="item figItem">
                                <h1><CountUp start={350} end={450} suffix="+" duration={3} /></h1>
                                <h6>Active Members</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="fa-3x" style={{ color: 'orange' }}></FontAwesomeIcon>
                            <div className="item figItem">
                                <h1><CountUp start={800} end={900} suffix="+" duration={3} /></h1>
                                <h6>Services For Sale</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faTrophy} className="fa-3x" style={{ color: 'orange' }}></FontAwesomeIcon>
                            <div className="item figItem">
                                <h1><CountUp start={300} end={400} suffix="+" duration={3} /></h1>
                                <h6>Cup Of Coffee</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="container">
                    <h3 className="mt-5 mb-4 fw-bold">OUR TEAM</h3>
                    <p>We are Proud to have a Team of Dedicated Developers with varying interests and background. Please read through their profiles to learn more.</p>
                    <div className="row row-cols-1 row-cols-md-6 p-3">
                        {developers.map(developer => <Developers developer={developer}></Developers>)}
                    </div>
                </div>
                <div data-aos="fade-up" className="container">
                    <h3 className="mt-5 mb-4 fw-bold">Recognition And Awards</h3>
                    <p>We’re honored to be recognized for quality of service, safety and security. Some of the awards we’ve received include:</p>
                    <div data-aos="fade-up" className="row row-cols-1 row-cols-md-4 text-center pt-4">
                        <div class="card awards">
                            <img src={Award1} class="card-img-top" alt="image8" />
                            <p class="card-body">Excellence In Customer Service</p>
                        </div>
                        <div class="card awards">
                            <img src={Award2} class="card-img-top" alt="image9" />
                            <p class="card-body">Best Use Of Technology In Services</p>
                        </div>
                        <div class="card awards">
                            <img src={Award3} class="card-img-top" alt="image99" />
                            <p class="card-body">International Organization Of The Year</p>
                        </div>
                        <div class="card awards">
                            <img src={Award4} class="card-img-top" alt="image88" />
                            <p class="card-body">Service And Security: Cluster Of The Year</p>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <h3 data-aos="fade-right" className="mt-5 mb-4 fw-bold">Our partners</h3>
                    <p>These companies are our lifelong partners whose efforts support our goals.</p>
                    <div data-aos="fade-up" className="row pt-4">
                        <div className="col-md-2 col-6 effect">
                            <img src="https://i.ibb.co/v4nkQtv/logo-coca-cola.png" alt="image1" />
                        </div>
                        <div className="col-md-2 col-6 effect">
                            <img src="https://i.ibb.co/VwN2FK3/logo-godrej.png" alt="image2" />
                        </div>
                        <div className="col-md-2 col-6 effect">
                            <img src="https://i.ibb.co/12JXnD2/logo-oppo.png" alt="image3" />
                        </div>
                        <div className="col-md-2 col-6 effect">
                            <img src="https://i.ibb.co/ZhktLXH/logo-paypal.png" alt="image4" />
                        </div>
                        <div className="col-md-2 col-6 effect">
                            <img src="https://i.ibb.co/g9DjCfQ/logo-philips.png" alt="image5" />
                        </div>
                        <div className="col-md-2 col-6 effect">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-N58w5sQQ1-L2DFCk6b6aGStckDOhEaiaUlLFs4GzPQTI_XFROUNolwUi55wHwrZjXk&usqp=CAU" alt="image6" />
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
};

export default AboutUs;