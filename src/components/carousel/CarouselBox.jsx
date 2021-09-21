import React from "react";
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import s from './carousel.module.css'

const CarouselBox = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (<>
        <i className={s.header__line}></i>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div>
                    <div className={s.Carousel__content}></div>
                    <h2 className={s.carousel__title}>First slide label</h2>
                    <p className={s.carousel__text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
                <img
                    style={{ maxHeight: "635px" }}
                    className="d-block w-100"
                    src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/26/528783/99a75c1ffa8c9799b149475bdfcf4a77-700.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <div className={s.Carousel__content}></div>
                    <h2 className={s.carousel__title}>Second slide label</h2>
                    <p className={s.carousel__text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
                <img
                    style={{ maxHeight: "635px" }}
                    className="d-block w-100"
                    src="https://wallbox.ru/resize/1920x1080/wallpapers/main2/201727/oblaka-gory-sneg-svejcaria.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>

                <img
                    style={{ maxHeight: "635px" }}
                    className="d-block w-100"
                    src="https://widewp.ru/images/nature/2046.jpg"
                    alt="Third slide"
                />
                <div>
                    <div className={s.Carousel__content}></div>
                    <h2 className={s.carousel__title}>Third slide label</h2>
                    <p className={s.carousel__text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Item>
        </Carousel>
    </>
    );
}
export default CarouselBox;