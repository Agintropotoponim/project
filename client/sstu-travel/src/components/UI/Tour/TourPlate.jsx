import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import NavBar from '../Nav/NavBar';



function TourPlate() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/tours')
            .then(response => response.json())
            .then(data => setTours(data))
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <NavBar />
            {tours.map(t => <Tour key={t.id} id={t.id} text={t.description} leader={t.leader} />)}
        </div>
    )
}

export default TourPlate;