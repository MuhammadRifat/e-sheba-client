import React from 'react';
import Form from './Form/Form';

const FAQs = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 col-12 bg-white p-5 rounded">
                    <h2>Frequently Asked Questions</h2>
                    <details className="mt-5">
                        <summary><strong>What payment methods do you accept?</strong></summary>
                        <br />
                        <p>We accept a variety of credit and debit cards via our secure payment processor. Payment details are encrypted and secure. No card details are stored on our server.</p>
                    </details>
                    <hr />
                    <details>
                        <summary><strong>How will my order be impacted by the recent 2019 novel coronavirus (COVID-19) outbreak?</strong></summary>
                        <br />
                        <p>Every supplier is different. Your order will not be impacted, but it depends on the unique situation of the supplier you are working with. For the latest order updates, we advise you contact your supplier directly.</p>
                    </details>
                    <hr />
                    <details>
                        <summary><strong>Will my shipment get delayed due to the coronavirus(COVID-19)?</strong></summary>
                        <br />
                        <p>Deliveries may be delayed in some destination due to transportation restrictions. Please consult with your local ports or shipping companies regarding the latest updates.</p>
                    </details>
                    <hr />
                    <details>
                        <summary><strong>Can I cancel orders</strong></summary>
                        <br />
                        <p>Yes, you can cancel any orders within 12 hours after ordering any service.</p>
                    </details>
                </div>
                <div className="col-md-6 col-12">
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default FAQs;