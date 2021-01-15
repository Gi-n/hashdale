import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/hashdale_main_logo.png';

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 shadow-sm">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <strong className="h6 mb-0 font-weight-bold text-uppercase">
                                    <img className="mr-2" src={logo} alt="logo" />
                            </strong>
                            </Link>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <i class="fas fa-bars fa-lg"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/feature">Feature</Link>
                                    </li> */}
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Feature
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item font-weight-medium text-capitalize" to="/feature">Users</Link>
                                            <Link className="dropdown-item font-weight-medium text-capitalize" to="/notes">Notes</Link>
                                            {/* <div className="dropdown-divider"></div> */}
                                            <Link className="dropdown-item font-weight-medium text-capitalize" to="#">Something else here</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/notes">Notes</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
      {/*  Navbar  */}
    </div>
  );
};

export default Header;
