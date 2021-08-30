import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';
const cardStyle = {
    width: '350px',
    marginLeft: '30px',
    marginBottom: '25px'
}

const cardText = {
    height: "180px",
    fontSize: "15px",
    fontWeight: "400",
    color: "gray",
}

const readMore = {
    color: '#5653f1',
    cursor: 'pointer',
    fontWeight: '600'
}

const Blog = ({ blog: { id, image, blogTitle, blogDescription } }) => {
    const history = useHistory();
    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + " ..." : text;
    }

    return (
        
        <div className="card blog-container" style={cardStyle} data-aos="zoom-in" data-aos-duration={500 * `${id}`}>
            <img src={image} className="card-img-top blog-image" alt={id} />
            <div className="card-body">
                <h5 className="blog-title">{blogTitle}</h5>

                <div className="d-flex justify-content-start blogs">
                    <div className="blog-head-one">
                        <p className="blog-date"> <FontAwesomeIcon className="blog-icon" icon={faCalendarAlt} />07 jan 2021</p>
                    </div>
                    <div className="blog-head-two">
                        <p className="blogger"> <FontAwesomeIcon className="blog-icon" icon={faUser} /> Rahat</p>
                    </div>
                </div>

                <p className="card-text text-justify " style={cardText}>
                    {truncate(blogDescription, 315)}
                    <span style={readMore} onClick={() => history.push(`/blogDetails/${id}`)}>read more</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;