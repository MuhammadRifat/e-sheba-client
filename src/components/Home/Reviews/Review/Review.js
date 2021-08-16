import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { photo, name, address, description } = review;

    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={photo} />
                <p>{description}</p>
            </div>
            <div className="testimonial-name">
                <h5>{name}</h5>
                <small>from {address}</small>
            </div>
        </div>

    );
};

export default Review;