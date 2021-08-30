import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import ProcessPayment from '../Payment/ProcessPayment';

const Shipment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loggedInUser] = useContext(userContext);
  const { id } = useParams();
  const [service, setService] = useState({});
  const { serviceName, price, serviceDetails, serviceImage, serviceProviderEmail } = service;
  const [shippingData, setShippingData] = useState(null);
  const [status] = useState('pending');

  const onSubmit = data => {
    setShippingData(data);
  }

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      serviceName,
      price,
      serviceDetails,
      serviceImage,
      serviceProviderEmail,
      paymentId,
      shipment: shippingData,
      status,
      orderTime: new Date()
    };

    fetch('https://e-sheba.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then((res) => res.json())
      .then(data => {
        if (data) {
          alert('Your order placed successfully')
          console.log(data, 'order')
        }
      })
  }

  useEffect(() => {
    fetch('https://e-sheba.herokuapp.com/serviceDetails/' + id)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id])

  return (
    <> <div className="nav-color">
      <NavBar />
    </div>
      <div class="container col-md-7 col-lg-8 py-5">
        <div className="row">
          <div style={{ display: shippingData ? 'none' : 'block' }}>
            <h4 class="mb-3">Billing address</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row g-3">
                <div class="col-12">
                  <label for="Name" class="form-label">Name</label>
                  < input name="consumerName" defaultValue={loggedInUser.name} {...register('consumerName', { required: true })} class="form-control" />
                  {errors.name && <span className="error">Name is required</span>}

                  <div class="col-12 pt-2">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">@</span>
                      <input type="text" name="username" {...register('username', { required: true })} class="form-control" id="username" placeholder="Username" required />
                      <div class="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div class="col-12 pt-2">
                    <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                    <input type="email" name="consumerEmail" defaultValue={loggedInUser.email} {...register('consumerEmail', { required: true })} class="form-control" id="consumerEmail" />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12 pt-2">
                    <label for="Name" class="form-label">Phone Number</label>
                    < input name="phone" type="tel" pattern="[0-9]{11}" {...register('phone', { required: true })} class="form-control" />
                    {errors.phone && <span className="error">Phone is required</span>}
                  </div>

                  <div class="col-12 pt-2">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" name="address" {...register('address', { required: true })} class="form-control" id="address" required />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="row pt-2">
                    <div class="col-md-5">
                      <label for="division" class="form-label">Division</label>
                      <select name="division" class="form-select" {...register('division', { required: true })} id="division" required>
                        <option disabled value="">Select Division</option>
                        <option>Barishal</option>
                        <option>Chittagong</option>
                        <option>Dhaka</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Rajshahi</option>
                        <option>Rangpur</option>
                        <option>Sylhet</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid division.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="district" class="form-label">District</label>
                      <input name="district" {...register('district', { required: true })} class="form-control" id="district" required />
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="zip" class="form-label">Zip</label>
                      <input type="text" name="zip" {...register('zip', { required: true })} class="form-control" id="zip" placeholder="" required />
                      <div class="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="same-address" />
                  <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="save-info" />
                  <label class="form-check-label" for="save-info">Save this information for next time</label>
                </div>
              </ div>

              <hr class="my-4" />

              <input className="w-100 btn btn-primary btn-lg" type="submit" />
            </form>
          </div>

          <div style={{ display: shippingData ? 'block' : 'none' }}>
            <h4 class="mb-3">Payment</h4>

            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                <label class="form-check-label" for="credit">Credit card</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                <label class="form-check-label" for="debit">Debit card</label>
              </div>
              <div class="form-check">
                <input id="bKash" name="paymentMethod" type="radio" class="form-check-input" required />
                <label class="form-check-label" for="bKash">bKash</label>
              </div>
            </div>
            <label for="cc-name" class="form-label">Name on card</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required />
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">
              Name on card is required
            </div>
            <br />
            <br />
            <label for="creditCard">Credit Card</label>
            <div className="mt-3">
              <ProcessPayment shippingData={shippingData} handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipment;