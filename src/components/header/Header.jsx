import React from 'react';
import logo from '../../logo.svg';
import "./Navbar.css";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import $ from "jquery";

const Header = () => {
    const [homeCl, setHomeCl] = useState({
        homeCl: true
    });
    function handleCllic(e) {
        window.location.reload();
    }

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {
        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-mainbg pb-0">

                <a className="navbar-brand navbar-logo" style={{ position: "relative", height: "60px", widows: "60px" }} href="/" ><img src={logo} style={{ height: "60px", marginLeft: "25px", position: "absolute", top: "-65" }} alt="" /></a>


                <button
                    className="navbar-toggler"
                    onClick={function () {
                        setTimeout(function () { animation(); });
                    }}
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>

                <div
                    className="collapse navbar-collapse pb-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item active" >
                            <NavLink className="nav-link" to="/" >
                                <i
                                    className="fas fa-tachometer-alt">
                                </i>главная
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" exact>
                                <i
                                    className="far fa-address-book">
                                </i>обо мне
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio" exact>
                                <i
                                    className="far fa-clone">
                                </i>портфолио
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" exact>
                                <i
                                    className="far fa-copy">
                                </i>контакт
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/block" exact>
                                <i
                                    className="far fa-chart-bar">
                                </i>блок
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};


export default Header;