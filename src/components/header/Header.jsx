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
            <div className="header">
                <Navbar expand="lg" variant="dark" className="navbar-mainbg p-0 pt-2">
                    <div className="wrapper__nav__btn">
                        <a href="/" ><img src={logo} style={{ height: "65px", marginLeft: "25px" }} alt="" /></a>
                        <Navbar.Toggle className="ml-0"
                            onClick={function () {
                                setTimeout(function () { animation(); });
                            }}
                            type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        />
                    </div>
                    <Navbar.Collapse id="navbarSupportedContent">
                        {/* <Nav className="me-auto"></Nav> */}
                        <ul className="navbar-nav " id="">
                            <div className="hori-selector">
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <li className="nav-item active" >
                                <NavLink className="nav-link" to="/" exact>
                                    <h5>главная</h5>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" exact>
                                    <h5>обо мне</h5>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio" exact>
                                    <h5>портфолио</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" exact>
                                    <h5>контакт</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/block" exact>
                                    <h5>блок</h5>
                                </NavLink>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar >
                {/* <i className="header__line"></i> */}
            </div>
        </>
    );
};


export default Header;