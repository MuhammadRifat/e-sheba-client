import React, { useState } from 'react';
import { Carousel, Col, Image, Row } from 'react-bootstrap';
import image from '../../../images/image.png';
import headerTWo from '../../../images/headerTWo.svg';
import NavBar from '../NavBar/NavBar';
import slideOne from '../../../images/slideOne.jpg';
import slideTwo from '../../../images/slideTwo.jpg';
import './Header.css';

const Header = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="header">
            <NavBar />

            <Carousel activeIndex={index} onSelect={handleSelect} prevLabel="" nextLabel="">
                <Carousel.Item>
                    <div className="w-100 text-white text-center" style={{ height: 600 }}>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <h3 style={{ fontSize: "40pt" }}><span style={{ color: 'cyan' }}>Strike</span> up a <br />conversation on <br />live <span style={{ color: 'goldenrod' }}>chat</span></h3>
                            </Col>

                            <Col md={6}>
                                <Image src={image} alt="" className="w-75 img-fluid" />
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption>
                        <p>Our Specialists are now available to chat online!</p>
                        <button className="btn btn-outline-light my-3">Chat with us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w-100 text-white text-center" style={{ height: 600 }}>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <h1 style={{ fontSize: "44pt" }}><span style={{ color: 'cyan' }}>Strike</span> up a <br />conversation on <br />live <span style={{ color: 'goldenrod' }}>chat</span></h1>
                            </Col>

                            <Col md={6}>
                                <Image src={headerTWo} alt="" className="w-75" />
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption>
                        <p>Our Specialists are now available to chat online!</p>
                        <button className="btn btn-outline-light my-3">Chat with us</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;