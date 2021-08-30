import React from 'react';
import './SingleService.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const SingleService = (props) => {
  const { _id, serviceName, serviceImage, price, serviceProviderImage, serviceProviderName } = props.feature;

  return (
    <div className="col-md-3 col-sm-2 mt-3 container" style={{maxWidth: '400px'}}>
      <Link to={`/services/${_id}`} style={{ textDecoration: 'none' }}>
        <div className="card img-card">
          <img src={serviceImage} className="card-img-top singleServiceImage" alt="..."/>
          <div className="card-header d-flex rounded">
            <img src={serviceProviderImage} className="header-image" alt="providers" />
            <h5 className="header-title">{serviceProviderName}</h5>
          </div>
          <div className="card-body text-center text-dark">
            <h3 className="service-title" style={{ fontWeight: '600' }}>{serviceName}</h3>
            <h4 className="service-price" style={{ fontWeight: '600' }}>Price: ${price}</h4>
            <div className="fa-icon d-flex justify-content-center">
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas Fa" icon={faStar} /> <br />
              <span className="text-center feedback">(1242 Feedback)</span>
            </div>
            <small className="mb-3 courtesy">Courtesy - <span className="sheba">E-Sheba</span></small>
          </div>
        </div>
      </Link>
    </div>


  );
};

export default SingleService;