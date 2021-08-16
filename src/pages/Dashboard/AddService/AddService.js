import React, { useState } from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [imageUrl, setImageUrl] = useState()
    const history = useHistory();

    // Upload Image to imgBB and take url
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5fb422405e02b3782f9ac55b36d77374');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        if (imageUrl) {
            let newObject = { ...data }
            
            newObject.image = imageUrl;
            newObject.serviceProviderName = "Shahinur Alam Bhuiyan"
            newObject.serviceProviderEmail = "shahin12@gmail.com"
            setServiceInfo(newObject)


            fetch('https://e-sheba.herokuapp.com/addService', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            })
                .then(response => {
                    response.json()
                        .then((res) => {
                            if (response.status === 200) {
                                alert('your service uploaded')
                                history.push('/serviceList')
                            }
                            if (response.status === 401) {
                                alert('data not uploaded')
                            }
                        })
                })
                .catch(error => {
                    console.error(error)
                });
            reset();
        } else {
            alert('please upload  your service photo')
        }
    };
    console.log(serviceInfo);

    const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
        <>
            <label>Is service available ?</label>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </>
    ));


    return (
        <section className="addService">
            <Sidebar />
            <div className="addServiceRight">
                <h2 className="text-center p-3">Add your service information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
                    <div className="addProductItem">
                        <label>Service Name</label>
                        <input type="text" {...register("serviceName", { required: true })} placeholder="Car Washing" />
                    </div>
                    <div className="addProductItem">
                        <label htmlFor="file">
                            <span>Upload Service Image</span>
                            <FontAwesomeIcon
                                className={imageUrl ? "serviceUpdateIconGreen" : "serviceUpdateIconRed"}
                                icon={faUpload} />
                        </label>
                        <input style={{ display: 'none' }} type="file" onChange={handleImageUpload} id="file" />
                    </div>
                    <div className="addProductItem">
                        <label>Service Details</label>
                        <input type="text" {...register("serviceDetails", { required: true })} placeholder="This service is about ..." />
                    </div>
                    <div className="addProductItem">
                        <label>Price</label>
                        <input type="number" {...register("price", { required: true })} placeholder="$ 23" />
                    </div>
                    <div className="addProductItem">

                        <Select label="Age" {...register("isAvaiable", { required: true })} />

                    </div>
                    <input className="addProductButton" style={{ display: imageUrl ? 'block' : 'none' }} type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddService;