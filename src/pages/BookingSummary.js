import React from 'react';

const BookingSummary = () => {
    return (
        <div>
            <h2>Booking Summary</h2>
            <p>Car: [Car Details]</p>
            <p>Price: $[Price]</p>
            <p>Total: $[Total Amount]</p>
            <button onClick={() => alert('Proceeding to Payment')}>Proceed to Payment</button>
        </div>
    );
};

export default BookingSummary;
