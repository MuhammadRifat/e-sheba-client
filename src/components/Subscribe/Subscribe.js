import React, { useEffect } from 'react';
import './Subscribe.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import subscribe from '../../img/subscribe.png';
import subsRocket from '../../img/subsRocket.png'
const Subscribe = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <section id="contact" className="container mt-5 pt-5">
            <div class="container contact-row">
                <div class="contact-left-col">
                    <div data-aos="fade-down" className="d-flex">
                        <h1  className="subscribe-title">Don't miss our<br /> Daily Newsletters</h1>
                        <img className="rocket" src={subsRocket} alt="" />
                    </div>

                    <form data-aos="fade-up subs-form">
                        <input className="subsInput" type="text" name="text" placeholder="enter your name" id="" />
                        <input className="subsInput" type="email" name="email" placeholder="enter your email" id="" />
                        <input className="subsInput" type="email" name="password" placeholder="enter your password" id="" />
                        <div class="btn-box">
                            <button class="common-btn">Sign up</button>
                            <button class="common-btn">Start free trial</button>
                        </div>
                    </form>
                    <div data-aos="fade-up" class="line">
                        <span class="line-1"></span> <br />
                        <span class="line-2"></span> <br />
                        <span class="line-3"></span>
                    </div>
                </div>
                <div class="contact-right-col">
                    <img data-aos="fade-down" src={subscribe} alt="Subscribe" className="img-fluid" />
                </div>
            </div>
        </section>

    );
};

export default Subscribe;