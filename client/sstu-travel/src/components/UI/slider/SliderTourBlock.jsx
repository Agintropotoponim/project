

import classes from './SliderBlock.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperBlock from './SwiperBlock';

import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { SwiperSlide } from 'swiper/react';


function SliderTourBlock() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/tours')
            .then(response => response.json())
            .then(data => {
                setTours(data);
            })
            .catch(error => console.log(error));
    }, []);


    return (

        <div className={classes.width}>
            <div className={classes.flex__container}>
                <h2 className={classes.header2}>ПЛАНИРУЙТЕ НЕКОТОРЫЕ ИЗ ЭТИХ БУДУЩИХ ЭКСПЕДИЦИЙ</h2>
                <h3 className={classes.header3}>ПРЯМО СЕЙЧАС</h3>
            </div>

            <SwiperBlock slides={
                tours.map((e, i) =>
                    <SwiperSlide key={i} className={classes.block}>
                        <section className={classes.flex__container}>
                            <div className={classes.flex__container}>
                                <img align="middle" className={classes.image_align} src={e.cover} alt="slide_image" crossOrigin="anonymous" />
                                <span className={classes.image__description}></span>
                            </div>
                            <Link to={'../' + e.id} className={classes.announcements}>Подробнее</Link>
                        </section>
                    </SwiperSlide>)
            } />
        </div >
    );
}

export default SliderTourBlock;