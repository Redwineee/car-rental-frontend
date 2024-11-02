import React, { useState } from 'react';
import axios from 'axios';

const RegisterCustomer = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Replace with your API endpoint
        await axios.post('http://localhost:5000/api/customers/register', formData);
        alert('Customer registered successfully!');
    };

    return (
        <div>
            <h2>Register as Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterCustomer;
