import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import NavBar from '../Nav/NavBar'
import classes from './Tour.module.css'
import { Link } from 'react-router-dom';


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
            <div className={classes.plate}>
                {
                    tours.map(t =>
                        <Link to={`/tours/${t.id}`}>
                            <Tour
                                className={classes.tour}
                                key={t.id} cover={t.cover}
                                text={t.name}
                                leader={t.employee.usr.name + " " + t.employee.usr.surname}
                            />
                        </Link>
                    )
                }
            </div>

        </div>
    )
}

export default TourPlate;