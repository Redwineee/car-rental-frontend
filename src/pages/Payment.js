import React from 'react';

const Payment = () => {
    const handlePayment = () => {
        alert('Payment processed successfully!');
        // Redirect to a thank you page or back to home
    };

    return (
        <div>
            <h2>Payment</h2>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
