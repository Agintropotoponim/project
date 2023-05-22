
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import classes from './SlickSlider.module.css'



function SlickSlider({ images, ...props }) {
    const NextArrow = ({ onClick }) => {
        return (
            <div className={classes.arrow + " " + classes.next} onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className={classes.arrow + " " + classes.prev} onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div>
            <Slider className={classes.width} {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? classes.slide + " " + classes.activeSlide : classes.slide}>
                        <img src={img} alt={img} />
                    </div>
                ))
                }
            </Slider >
        </div >
    );
}

export default SlickSlider;