import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterCustomer from './pages/RegisterCustomer';
import RegisterDriver from './pages/RegisterDriver';
import CarDetails from './pages/CarDetails';
import BookingSummary from './pages/BookingSummary';
import Payment from './pages/Payment';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register/customer" element={<RegisterCustomer />} />
                <Route path="/register/driver" element={<RegisterDriver />} />
                <Route path="/car/:id" element={<CarDetails />} />
                <Route path="/booking" element={<BookingSummary />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </Router>
    );
}

export default App;
