import React from 'react';
import logo from '../../logo.svg';
import "./Navbar.css";
import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import $ from "jquery";
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    // const [homeCl, setHomeCl] = useState({
    //     homeCl: true
    // });
    // function CheckActive(e) {
    //     window.location.reload();
    // }
    useEffect(() => {
        let nav = document.querySelectorAll('.nav-link');
        // let hori = document.querySelectorAll('.hori-selector');
        for (let i = 0; i < nav.length; i++) {
            if (nav[i].className !== 'nav-link') {
                nav[i].parentNode.classList.add('_active')
                // hori + style = ({
                //     "top": Math.floor(nav[i].top) + "px",
                //     "left": Math.floor(nav[i].left) + "px",
                //     "height": nav[i].height + "px",
                //     "width": nav[i].width + "px"
                // });
            }
        }
    }, []);

    function animation() {

        // var tabsNewAnim = $('#navbarSupportedContent');
        // var activeItemNewAnim = tabsNewAnim.find('._active');
        // var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        // var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        // var itemPosNewAnimTop = activeItemNewAnim.position();
        // var itemPosNewAnimLeft = activeItemNewAnim.position();
        // $(".hori-selector").css({
        //     "top": Math.floor(itemPosNewAnimTop.top) + "px",
        //     "left": Math.floor(itemPosNewAnimLeft.width) + "px",
        //     "height": activeWidthNewAnimHeight + "px",
        //     "width": activeWidthNewAnimWidth + "px"
        // });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("_active");
            $(this).addClass('_active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            // console.log(Math.floor($(this).position().left), );
            if (document.body.offsetHeight > window.innerHeight && window.innerWidth > 992) {
                console.log("да");
                $(".hori-selector").css({
                    "top": Math.floor(itemPosNewAnimTop.top) + "px",
                    "left": Math.floor(this.getBoundingClientRect().left - 79) + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            } else if (window.innerWidth < 992) {
                console.log("<992")
                $(".hori-selector").css({
                    "top": Math.floor(itemPosNewAnimTop.top) + "px",
                    "left": Math.floor(itemPosNewAnimLeft.left) + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            } else {
                console.log("нет");
                $(".hori-selector").css({
                    "top": Math.floor(itemPosNewAnimTop.top) + "px",
                    "left": Math.floor(this.getBoundingClientRect().left - 113) + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            }
        });
    }

    useEffect(() => {
        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation() }, 500);
        });

    }, []);
    return (
        <>

            {/* <nav className="navbar navbar-expand-lg navbar-mainbg pb-0">

                <a className="navbar-brand navbar-logo" style={{ position: "relative", height: "60px", width: "60px" }} href="/" ><img src={logo} onClick={function () { window.location.reload(); console.log(5); }} style={{ height: "60px", marginLeft: "25px", position: "absolute", top: "1px" }} alt="" /></a>


                <button
                    className="navbar-toggler"
                    onClick={function () {
                        setTimeout(function () { animation(); });
                    }}
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>


                <div
                    className="navbar-collapse collapse show pb-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item" >
                            <NavLink className="nav-link" to="/" >
                                <i className="fas fa-tachometer-alt"> главная</i>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" exact>
                                <i className="far fa-address-book"></i>обо мне
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
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-mainbg pb-0">
                <Link to="/" className="navbar-brand navbar-logo" style={{ position: "relative", height: "60px", width: "80px" }}  ><img src={logo} onClick={function () { window.location.reload(); console.log(5); }} style={{ height: "60px", marginLeft: "25px", position: "absolute", top: "1px" }} alt="" /></Link>
                <button
                    onClick={function () { animation() }}
                    className="btn btn-dark navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body navbar-collapse collapse show pb-0 " style={{ backgroundColor: "black", paddingRight: "0" }} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto  " aria-labelledby="dropdownMenuButton">
                            <div className="hori-selector">
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <li className="nav-item" >
                                <NavLink className="nav-link" to="/" >
                                    <i className="fas fa-tachometer-alt"></i>главная
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" exact>
                                    <i className="far fa-address-book"></i>обо мне
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
                </div>
            </nav>

        </>
    );
};


export default Header;