import React from 'react';
import {
  Link
} from "react-router-dom";
import './AllServicesDetails.css';

const AllServicesDetails = (props) => {
  const { id, name, image } = props.allService;

  return (
    <div className="col-md-3 col-sm-2 mt-3 services-details">
      <Link to={`/services/${id}`} style={{ textDecoration: 'none' }}>
        <div className="card  img-card my-3 mx-2">
          <img src={image} className="card-img-top" alt="..." style={{ height: '24rem' }} />
          <div className="card-body body-bg">
            <h4 className="card-title" style={{ fontWeight: '600', textAlign: 'center' }}>{name}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllServicesDetails;