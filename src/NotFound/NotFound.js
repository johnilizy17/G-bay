import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function Notfound() {
    return (
        <div>
            <div class="box-wrapper">
                {/* <header id="master-head" class="navbar menu-center menu-absolute">
                <div class="container-fluid">
                    <div id="main-logo" class="logo-container">
                        <a class="logo" href="index-standard.html">
                            <img src="images/d-code-logo-dark.svg" class="logo-dark" alt="DCode"/>
                            <img src="images/d-code-logo-light.svg" class="logo-light" alt="DCode"/>
                        </a>
                    </div>
                    <div class="menu-toggle-btn">
                        <a class="navbar-toggle">
                            <div class="burger-lines">
                            </div>
                        </a>
                    </div>
                    <div id="navigation" class="nav navbar-nav navbar-main">
                        <ul id="main-menu" class="menu-primary">
                            <li class="menu-item menu-item-has-children">
                                <a href="index-standard.html">Home</a>
                                <ul class="sub-menu">
                                    <li class="menu-item"><a href="index-standard.html">Standard Software</a></li>
                                    <li class="menu-item"><a href="index-crm.html">CRM software</a></li>
                                    <li class="menu-item"><a href="index-security-software.html">Security Software</a></li>
                                    <li class="menu-item"><a href="index-payment-software.html">Payment Software</a></li>
                                    <li class="menu-item"><a href="index-erp-software.html">ERP Systems</a></li>
                                    <li class="menu-item"><a href="index-digital-marketing.html">Digital Marketing</a></li>
                                    <li class="menu-item"><a href="index-ai-chatbot-software.html">AI Chatbot Software</a></li>
                                    <li class="menu-item"><a href="index-lms-software.html">LMS Software</a></li>
                                    <li class="menu-item"><a href="index-email-marketing.html">Email Marketing <span class="badge badge-danger rounded">New</span></a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children active">
                                <a href="#">Pages</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">About Us</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a href="page-aboutus.html">About Us</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="page-aboutus-two.html">About Us Two</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="page-aboutus-three.html">About Us Three <span class="badge badge-danger rounded">New</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item">
                                        <a href="page-services.html">Services</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="page-career.html">Careers</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="page-job-details.html">Job Details</a>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">Contact Us</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a href="page-contactus.html">Contact Us</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="page-contactus-two.html">Contact Us Two</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="page-contactus-three.html">Contact Us Three <span class="badge badge-danger rounded">New</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">Auth Pages</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a target="_blank" href="page-signin.html">Login</a>
                                            </li>
                                            <li class="menu-item">
                                                <a target="_blank" href="page-signin-two.html">Login Two</a>
                                            </li>
                                            <li class="menu-item">
                                                <a target="_blank" href="page-signup.html">Register</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item active">
                                        <a href="page-404.html">404 (Not Found)</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="page-comingsoon.html" target="_blank">Coming Soon</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children">
                                <a href="#">Blogs</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">Blog Standard</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a href="page-blog-grid-3-col.html">Blog Grid (3 Col)</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="page-blog-grid-2-col.html">Blog Grid (2 Col)</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="page-blog-with-sidebar.html">Blog with Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item">
                                        <a href="page-blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children">
                                <a href="#">Elements</a>
                                <ul class="sub-menu">
                                    <li class="menu-item">
                                        <a href="element-content-box.html">Content Boxes</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="element-pricing-tables.html">Pricing Tables</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="element-quotes-carousel.html">Quotes Carousel</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="element-counters-countdown.html">Counters & Countdown</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="element-tabs-accordions.html">Tabs & Accordions</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children mega-menu">
                                <a href="#">Mega Menu</a>
                                <ul class="sub-menu mega-menu-inner">
                                    <li class="menu-item col-title">
                                        <a href="#">Layouts</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="index-standard.html">Standard Software</a></li>
                                            <li class="menu-item"><a href="index-crm.html">CRM software</a></li>
                                            <li class="menu-item"><a href="index-security-software.html">Security Software</a></li>
                                            <li class="menu-item"><a href="index-payment-software.html">Payment Software</a></li>
                                            <li class="menu-item"><a href="index-erp-software.html">ERP Systems</a></li>
                                            <li class="menu-item"><a href="index-digital-marketing.html">Digital Marketing</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item col-title">
                                        <a href="#">Inner Pages</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="page-aboutus.html">About Us</a></li>
                                            <li class="menu-item"><a href="page-services.html">Services</a></li>
                                            <li class="menu-item"><a href="page-contactus.html">Contact Us</a></li>
                                            <li class="menu-item"><a href="page-404.html">404 (Not Found)</a></li>
                                            <li class="menu-item"><a target="_blank" href="page-comingsoon.html">Coming Soon</a></li>
                                            <li class="menu-item"><a target="_blank" href="page-signin-two.html">Login/Register</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item col-title">
                                        <a href="#">Elements</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="element-content-box.html">Content Boxes</a></li>
                                            <li class="menu-item"><a href="element-pricing-tables.html">Pricing Tables</a></li>
                                            <li class="menu-item"><a href="element-quotes-carousel.html">Quotes Carousel</a></li>
                                            <li class="menu-item"><a href="element-counters-countdown.html">Counters & Countdown</a></li>
                                            <li class="menu-item"><a href="element-tabs-accordions.html">Tabs & Accordions</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item col-title">
                                        <a href="#">Blog</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="page-blog-grid-3-col.html">Blog Grid (3 Col)</a></li>
                                            <li class="menu-item"><a href="page-blog-grid-2-col.html">Blog Grid (2 Col)</a></li>
                                            <li class="menu-item"><a href="page-blog-with-sidebar.html">Blog with Sidebar</a></li>
                                            <li class="menu-item"><a href="page-blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-right">
                        <div class="menu-button">
                            <a href="#" target="_blank">
                                <div class="btn btn-primary">sign in</div>
                            </a>
                        </div>
                        <div class="search-option">
                            <div class="search-btn">
                                <a href="#"><i class="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
                <div id="main-wrapper" class="page-wrapper">
                    <div class="page-header section-padding full-height dc-404">
                        <div class="container">
                            <div class="row clearfix justify-content-center">
                                <div class="col-lg-8 text-center">
                                    <div class="heading-wrapper wow fadeInUp" data-wow-delay="0.2s">
                                        <h1>Oopps, <span>nothing here..</span></h1>
                                        <div class="lead-text">
                                            <p>The page you looking for is not found.</p>
                                        </div>
                                    </div>
                                    <div class="image-wrapper">
                                        <img src="images/default-color/page-not-found-img.png" alt="" />
                                    </div>
                                    <div class="empty-space-60"></div>
                                    <div class="btn-wrapper wow fadeInRight" data-wow-delay="0.5s">
                                        <Link to="/" class="btn btn-primary">Go back Homepage</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </div>
            <div class="overlay overlay-search">
                <div class="close-search">
                    <span class="lines"></span>
                </div>
                <div class="container">
                    <form method="post">
                        <div class="form-group">
                            <input type="search" class="form-control" name="SearchInput" placeholder="Search…" />
                            <button type="submit" class="search-submit"><i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}