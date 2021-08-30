import React, { useState, useEffect } from 'react';
import './ServiceDetails.css';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import DetailsSkeleton from '../../Skeleton/DetailsSkeleton/DetailsSkeleton';
import NavBar from '../../components/Home/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';



const Services = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const { id } = useParams();
    const history = useHistory()

    const getService = () => {
        axios.get('https://e-sheba.herokuapp.com/serviceDetails/' + id)
            .then((response) => {
                if (response.status === 200) {
                    setServiceInfo(response.data);
                    console.log(response.data);

                }
            })
    }
    useEffect(() => {
        getService();
    }, [id])
    console.log(serviceInfo)
    const handleService = (id) => {
        history.push(`/shipment/${id}`)
    }

    return (
        <>
            <div className="nav-color">
                <NavBar />
            </div>
            <div className="all-ser">

                {(serviceInfo.serviceName) ?
                    <div className="service-details-container">
                        <div className="service-content-div">
                            <img
                                src={serviceInfo?.serviceImage} alt=""
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            />
                            <div
                                className="service-details-div"
                            >
                                <div>
                                    <h2
                                        data-aos="fade-down"
                                        data-aos-duration="1000">
                                        {serviceInfo?.serviceName}
                                    </h2>
                                    <h6
                                        className="text-justify"
                                        data-aos="fade-up"
                                        data-aos-duration="1000">
                                        {serviceInfo?.serviceDetails}
                                    </h6>
                                    <h2
                                        data-aos="fade-up"
                                        data-aos-duration="1000">
                                        Price: ${serviceInfo?.price}
                                    </h2>
                                </div>
                                <button onClick={() => handleService(id)} className="btn btn-success">Book now</button>
                            </div>
                        </div>
                    </div>
                    :
                    <DetailsSkeleton />

                }
                <Footer />
            </div>

        </>
    );
};

export default Services;