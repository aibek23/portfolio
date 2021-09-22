import React from "react";
import { useState, useEffect } from 'react';
import Aos from 'aos';
import { Carousel } from 'react-bootstrap';
import s from './carousel.module.css'

const CarouselBox = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        Aos.init({ duration: 2000, once: false, });
    }, [])

    return (<>
        <i className={s.header__line}></i>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className={s.carousel__item}>
                    <p className={s.carousel__text} data-aos="flip-left" data-aos-once="true"
                    >Здравствуйте! Меня зовут Айбек и я</p>
                    <h2 className={s.carousel__title} data-aos="flip-left">FRONT-END WEB DEVELOPER</h2>
                    <p className={s.carousel__text} data-aos="flip-left">полный решимости выполнить любой Ваш заказ</p>
                </div>
                <img
                    style={{ height: "635px" }}
                    className="d-block w-100"
                    src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/26/528783/99a75c1ffa8c9799b149475bdfcf4a77-700.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div className={s.carousel__item}>
                    <p className={s.carousel__text}></p>
                    <h2 className={s.carousel__title} data-aos="zoom-in" data-aos-once="true">FRONT-END WEB DEVELOPER</h2>
                    <p className={s.carousel__text} data-aos="zoom-in" style={{ letterSpacing: "0.2rem" }}>клиентская сторона пользовательского интерфейса к <br />программно-аппаратной части сервиса</p>
                </div>
                <img
                    style={{ height: "635px" }}
                    className="d-block w-100"
                    src="https://wallbox.ru/resize/1920x1080/wallpapers/main2/201727/oblaka-gory-sneg-svejcaria.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div className={s.carousel__item}>
                    <p className={s.carousel__text}></p>
                    <h2 className={s.carousel__title}>FRONT-END WEB DEVELOPER</h2>
                    <p className={s.carousel__text}>Hello! My name is Aybek and I</p>
                </div>
                <img
                    style={{ maxHeight: "635px" }}
                    className="d-block w-100"
                    src="https://dev26.5bucks.ru/wp-content/uploads/2020/06/field_image_data_entry.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    </>
    );
}
export default CarouselBox;