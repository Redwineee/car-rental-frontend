import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            // This should be your API endpoint to fetch cars
            const response = await axios.get('http://localhost:5000/api/cars');
            setCars(response.data);
        };
        fetchCars();
    }, []);

    return (
        <div>
            <h2>Available Cars</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car._id}>
                        <Link to={`/car/${car._id}`}>
                            {car.make} {car.model} - ${car.pricePerDay}/day
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

