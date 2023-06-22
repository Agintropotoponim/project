

import classes from './SliderBlock.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperBlock from './SwiperBlock';

import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { SwiperSlide } from 'swiper/react';


function SliderEmployeeBlock() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/employees')
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
            })
            .catch(error => console.log(error));
    }, []);


    return (

        <div className={classes.width}>


            <SwiperBlock slides={
                employees.map((e, i) =>
                    <SwiperSlide key={i} className={classes.block}>
                        <section className={classes.flex__container}>
                            <div className={classes.flex__container}>
                                <img className={classes.image_align} src={e.poster} alt="slide_image" crossOrigin="anonymous" />

                            </div>
                            <Link to={'/employees/' + e.id} className={classes.announcements}>Анонсы его/её путешествий</Link>
                        </section>
                    </SwiperSlide>)
            } />

        </div >
    );
}

export default SliderEmployeeBlock;