import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Aos from 'aos';
import 'aos/dist/aos.css';
import s from './Contact.module.css';
import { Container } from 'react-bootstrap';
import YndexMap from "../../components/yandexMap/YndexMap";
import Form from "../../components/form/Form";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, mirror: "false", once: true });
    }, []);

    return (
        <Container>
            <div className="row mr-2 mt-4 ">
                <div className="col-md-6 mb-2">
                    <div className={s.img} >
                        <div className="photo" style={{ height: "100%", widows: "100%", backgroundColor: "grey" }}>
                            <YndexMap />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="form  " style={{ height: "450px" }}>
                        <div className="d-flex justify-content-center">
                            <div className={s.sotset}>
                                <a className={s.link_sot}
                                    data-aos="fade-left"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="600"
                                    href="https://api.whatsapp.com/send?phone=996709155602&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...">
                                    <img style={{ height: "60px", width: "60px", borderRadius: "10px" }} src="https://img.rosbalt.ru/photobank/e6/e6/c4/b4/MNRnYpfHw3Qk-1280.jpg" alt="" />
                                </a>
                            </div>
                            <div className={s.sotset}>
                                <a className={s.link_sot}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="700"
                                    data-aos-easing="ease-in-sine"
                                    href="https://www.facebook.com/?%2F">
                                    <img style={{ height: "60px", borderRadius: "10px" }} src="https://cdn.pixabay.com/photo/2018/05/08/18/25/facebook-3383596_1280.png" alt="" />
                                </a>
                            </div>
                            <div className={s.sotset}>
                                <a className={s.link_sot}
                                    data-aos="fade-left"
                                    data-aos-delay="1000"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-sine"
                                    href="https://www.instagram.com/aibekasanakunuulu/">
                                    <img style={{ height: "60px", borderRadius: "10px" }} src="https://static-sl.insales.ru/r/-BMDA1vFklo/fit/1920/1920/ce/1/plain/files/1/3482/13012378/original/instagram-57e6d2464c_1280.png@jpg" alt="" />
                                </a>
                            </div>
                            <div className={s.sotset}>
                                <a className={s.link_sot}
                                    data-aos="fade-left"
                                    data-aos-delay="1500"
                                    data-aos-duration="900"
                                    data-aos-easing="ease-in-sine"
                                    href="https://mail.google.com/mail/u/0/#inbox">
                                    <img style={{ height: "60px", width: "60px", borderRadius: "10px" }} src="https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_1280.png" alt="" />
                                </a>
                            </div>
                            <div className={s.sotset}>
                                <a className={s.link_sot}
                                    data-aos="fade-left"
                                    data-aos-delay="2000"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                    href="https://github.com/aibek23">
                                    <img style={{ height: "60px", borderRadius: "10px" }} src="https://www.pikpng.com/pngl/b/247-2473934_image-freeuse-download-png-icon-free-download-onlinewebfonts.png" alt="" />
                                </a>
                            </div>

                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </Container >

    );
}
export default Contact;