import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div id="master-head" class="navbar menu-absolute menu-center menu-light" style={{ backgroundColor: "linear-gradient(45deg, #f3678c 0%, #f03f6e 51%, #bd0c3a 100%)", color: "#ffffff" }}>
                    <div class="container-fluid">
                        <div id="main-logo" class="logo-container">
                            <Link to="/" class="logo">
                                <img src="images/d-code-logo-dark.svg" class="logo-dark" alt="DCode" />
                                <img src="images/d-code-logo-light.svg" class="logo-light" alt="DCode" />
                            </Link>
                        </div>
                        <div class="menu-toggle-btn">
                            <a class="navbar-toggle">
                                <div class="burger-lines">
                                </div>
                            </a>
                        </div>
                        <div id="navigation" class="nav navbar-nav navbar-main">
                            <ul id="main-menu" class="menu-primary">
                                <li class="menu-item">    <Link to="/">Home</Link>
                                </li>
                                <li class="menu-item">    <Link to="/Blog">Blog</Link>
                                </li>
                                <li class="menu-item">    <Link to="/FQA">FQA</Link>
                                </li>
                                <li class="menu-item">    <Link to="/About_us">About Us</Link>
                                </li>

                            </ul>
                        </div>
                        <div class="navbar-right" style={{ backgroundColor: "#bd0c3a", color: "#ffffff" }}>
                            <div class="menu-button">
                                <Link to="SignIn">
                                    <div class="btn btn-outline-primary btn-light">sign in</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    )
}