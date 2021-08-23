import React from 'react';
import './Community.css';

const Community = () => {
    return (
        <div className="community">
            <div className="container p-5 d-flex justify-content-around align-items-center flex-wrap">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold">We’re Spreading Day by Day</h6>
                    <h2 className="head">Join Our Friendy Community</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ex omnis veritatis error corporis aperiam</p>
                </div>
                <button className="community-btn">Register Now</button>
            </div>
        </div>
    );
};

export default Community;