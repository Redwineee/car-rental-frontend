import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register/customer">Register as Customer</Link>
            <Link to="/register/driver">Register as Driver</Link>
        </nav>
    );
};

export default Navbar;
