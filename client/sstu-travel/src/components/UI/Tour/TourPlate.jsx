import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import NavBar from '../Nav/NavBar'
import classes from './Tour.module.css'
import loginClasses from '../../../pages/LoginForm.module.css'
import { Link } from 'react-router-dom';

function filterToursByDate(tours, date1, date2) {

    return tours.filter((tour) => {

        let d3 = tour.start_date.split(".")

        let d1 = new Date(date1)
        let d2 = new Date(date2)

        console.log(d1, d2)

        const startDate = new Date(d3[2], d3[1] - 1, d3[0]);

        console.log(startDate + " startDate")

        return startDate >= d1 && startDate <= d2;

    });
}


function TourPlate() {

    const [tours, setTours] = useState([]);

    const [filterTours, setFilterTours] = useState([]);

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/tours')
            .then(response => response.json())
            .then(data => setTours(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {

        if (startDate && endDate) {
            setFilterTours(filterToursByDate(tours, startDate, endDate))
            console.log(filterTours)
        }
    }, [startDate, endDate])



    return (
        <div>
            <NavBar />

            <input className={loginClasses.input} type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
            />
            <input className={loginClasses.input} type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
            />

            <div className={classes.plate}>
                {
                    startDate && endDate
                        ?
                        filterTours.map(t =>
                            <Link to={`/tours/${t.id}`}>
                                <Tour
                                    className={classes.tour}
                                    key={t.id} cover={t.cover}
                                    text={t.name}
                                    leader={t.employee.usr.name + " " + t.employee.usr.surname}
                                />
                            </Link>
                        )
                        :
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