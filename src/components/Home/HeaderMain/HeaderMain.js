import './HeaderMain';
import React, { useState } from 'react';
import { Carousel, Col, Image, Row } from 'react-bootstrap';
import headerImage1 from '../../../images/chat.png';
import headerImage2 from '../../../images/servicing.jpg';
import headerImage3 from '../../../images/stripe.jpg';
const HeaderMain = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
             <Carousel activeIndex={index} onSelect={handleSelect} prevLabel="" nextLabel="" style={{ backgroundColor: '#292b2c' }}>
                <Carousel.Item>
                    <div className="w-100 bg-white text-dark text-center" style={{ height: 600 }}>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <h1 style={{ fontSize: "44pt" }}><span style={{ color: 'darkgreen' }}>Smart.</span> <br />Easy to Booking. <br /><span style={{ color: 'goldenrod' }}>24 Hours</span> Open.</h1>
                            </Col>

                            <Col md={6}>
                                <Image src={headerImage2} alt="" className="w-75" />
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption>
                        <p className="text-dark">We serve with utmost care and attach great importance to customer feedback.</p>
                        <button className="btn btn-outline-dark">View all services</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w-100 bg-dark text-white text-center" style={{ height: 600 }}>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>

                                <h1 style={{ fontSize: "44pt" }}><span style={{ color: 'cyan' }}>Credit Card</span> up a <br />Payments with <br /><span style={{ color: 'goldenrod' }}>Stripe</span></h1>
                            </Col>

                            <Col md={6}>
                                <Image src={headerImage3} alt="" className="w-75 rounded" />
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption>
                        <p>It's Simple and Easy!</p>
                        <button className="btn btn-outline-light">Get started</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w-100 bg-dark text-white text-center" style={{ height: 600 }}>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <h1 style={{ fontSize: "44pt" }}><span style={{ color: 'cyan' }}>Strike</span> up a <br />conversation on <br />live <span style={{ color: 'goldenrod' }}>chat</span></h1>
                            </Col>

                            <Col md={6}>
                                <Image src={headerImage1} alt="" className="w-75" />
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption>
                        <p>Our Specialists are now available to chat online!</p>
                        <button className="btn btn-outline-light">Chat with us</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderMain;