import React, { useState } from 'react';
import axios from 'axios';

const RegisterDriver = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        carImage: null,
        carDetails: '',
        nidImage: null,
        licenseImage: null,
    });

    const handleChange = (e) => {
        if (e.target.files) {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });
        // Replace with your API endpoint
        await axios.post('http://localhost:5000/api/drivers/register', formDataToSend);
        alert('Driver registered successfully!');
    };

    return (
        <div>
            <h2>Register as Driver</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="file" name="carImage" onChange={handleChange} required />
                <textarea name="carDetails" placeholder="Car Details" onChange={handleChange} required />
                <input type="file" name="nidImage" onChange={handleChange} required />
                <input type="file" name="licenseImage" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterDriver;
