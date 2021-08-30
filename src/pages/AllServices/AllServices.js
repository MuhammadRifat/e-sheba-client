import React, { useState, useEffect } from 'react';
import './AllServices.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Home/NavBar/NavBar';
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton/ServiceSkeleton';
import SingleService from '../../components/SingleService/SingleService';
import axios from 'axios';


const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    // const [skeletonTimer, setSkeletonTimer] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSkeletonTimer(false);
    //     }, 3000);
    // }, []);

    const getAllServices = () => {
        axios.get('https://e-sheba.herokuapp.com/services')
            .then((response) => {
                if (response.status === 200) {
                    setAllServices(response.data);
                }
            })
    }

    useEffect(() => {
        getAllServices();
    }, [])
    return (
        <>
           
            <div className="all-header">
            <NavBar />
                {(allServices.length) ?
                    <div className="row mx-3 mb-5 mt-3">
                        {
                            allServices.map(feature => <SingleService feature={feature}></SingleService>)
                        }
                    </div> :
                    <div className="row m-5">
                        {[1, 2, 3, 4, 5, 6].map((loading) => (
                            <div className="col-md-4 mt-3">
                                <ServiceSkeleton />
                            </div>
                        ))}
                    </div>
                }
                    <Footer />
            </div>
        
        </>
    );
};

export default AllServices;