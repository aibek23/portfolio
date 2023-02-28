import React from 'react';
import logo from '../../logo.svg';
import "./Navbar.css";
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from "jquery";

const Header = () => {
    // const [homeCl, setHomeCl] = useState({
    //     homeCl: true
    // });
    // function CheckActive(e) {
    //     window.location.reload();
    // }

    function animation() {
        let linkactiv = $('.nav-link');
        let itemnav = $('.nav-item');
        for (let i = 0; i < linkactiv.length; i++) {
            if (linkactiv[i].className === "nav-link active") {
                itemnav[i].classList.add("_active")
            } else {
                linkactiv[0].classList.add("active");
                itemnav[0].classList.add("_active")
            }
        };

        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('._active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimLeft = activeItemNewAnim.position();

        $(".hori-selector").css({
            "top": Math.floor(itemPosNewAnimLeft.top) + "px",
            "left": Math.floor(itemPosNewAnimLeft.left) + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });

        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("_active");
            $(this).addClass('_active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            if (window.innerWidth - document.body.offsetWidth > 0) {
                $(".hori-selector").css({
                    "top": Math.floor(itemPosNewAnimTop.top) + "px",
                    "left": Math.floor(this.getBoundingClientRect().left - 95) + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            } else {
                $(".hori-selector").css({
                    "top": Math.floor(itemPosNewAnimTop.top) + "px",
                    "left": Math.floor(itemPosNewAnimTop.left) + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            }
            if (window.innerWidth < 992) {
                setTimeout(function () {
                    $('#offbtn').trigger('click');
                }, 800);
            }
        });
    }
    useEffect(() => {
        $(window).on('resize', function () {
            setTimeout(function () {
                animation();
            }, 2000);
        });
        animation();
    }, []);
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-mainbg pb-0 " style={{ backgroundColor: "#212529" }}>
                <NavLink to="" className="navbar-brand navbar-logo"   >
                    <img src={logo} style={{ height: "60px", marginLeft: "25px", position: "absolute", top: "1px" }} alt="" /></NavLink>
                <button
                    style={{ marginRight: "1rem" }}
                    onClick={function () { animation() }}
                    className="btn btn-dark navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>

                <div className="offcanvas offcanvas-end bg-dark" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                        <button id="offbtn" type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: "#fff", }}><i className="far fa-window-close" style={{ fontSize: "30px" }}></i></button>
                    </div>
                    <div className="offcanvas-body navbar-collapse collapse show pb-0 " style={{ backgroundColor: "#212529", paddingRight: "0" }} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto  " aria-labelledby="dropdownMenuButton" >
                            <div className="hori-selector">
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <li className="nav-item "  >
                                <NavLink className="nav-link " to="/home">
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