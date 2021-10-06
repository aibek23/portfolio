import React from 'react';
// import "./navbar.css";


const Navbar = () => {
    return (
        <>
            {/* <div classNameName="b-example-divider"></div>
            <div classNameName="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px" }}>
                <a href="/" classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span classNameName="fs-4">Sidebar</span>
                </a>
            </div>
            <ul classNameName="nav nav-pills flex-column mb-auto">
                <li classNameName="nav-item">
                    <a href="#" classNameName="nav-link active" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" classNameName="nav-link link-dark">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" classNameName="nav-link link-dark">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" classNameName="nav-link link-dark">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" classNameName="nav-link link-dark">
                        Customers
                    </a>
                </li>
            </ul>
            <div>
                <div classNameName="dropdown">
                    <a href="#" classNameName="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>mdo</strong>
                    </a>
                    <ul classNameName="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a classNameName="dropdown-item" href="#">New project...</a></li>
                        <li><a classNameName="dropdown-item" href="#">Settings</a></li>
                        <li><a classNameName="dropdown-item" href="#">Profile</a></li>
                        <li></li>
                        <li><a classNameName="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div> */}
            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
            </a>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Navbar;