import React from 'react';
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <div>
            <div class="box-wrapper">
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
                                <li class="menu-item">    <Link to="/">FQA</Link>
                                </li>
                                <li class="menu-item">    <Link to="/">About Us</Link>
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
                <div id="main-wrapper" class="page-wrapper" >
                    <div class="page-header section-padding style-dark full-height dc-three left-col-full">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <img src="images/default-color/security-software-img.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="heading-wrapper wow fadeInRight" data-wow-delay="0.2s">
                                        <h1>G-bay is <span>best flim production, music training and stage ministration </span></h1>
                                    </div>
                                    <div class="text-wrapper wow fadeInRight" data-wow-delay="0.4s">
                                        <p class="lead-text">Moto.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget.</p>
                                    </div>
                                    <div class="btn-wrapper wow fadeInUp" data-wow-delay="0.4s">
                                        <Link to="/SignIn" class="btn btn-primary" >Sign In</Link>
                                        <a class="btn btn-outline-primary" href="https://youtube.com/channel/UCAxY3LVH-SpPEf1uC-tYfYw"><i class="fas fa-play-circle"></i>Watch Video</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-section section-padding dc-two">
                        <div class="container">
                            <div class="row clearfix align-items-center flex-row-reverse">
                                <div class="col-lg-6 text-center">
                                    <div class="image-wrapper">

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="heading-wrapper with-separator">
                                        <h2 class="h1">Complete Online Security with <span>Premium support</span></h2>
                                    </div>
                                    <div class="text-wrapper">
                                        <p class="lead-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget. </p>
                                    </div>
                                    <div class="btn-wrapper">
                                        <a class="btn btn-primary" href="#">Discover More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services-section light-gradient-bg section-padding">
                        <div class="container">
                            <div class="row clearfix justify-content-center">
                                <div class="col-lg-10">
                                    <div class="heading-wrapper text-center with-separator">
                                        <h2 class="h1">How does it <span>works</span></h2>
                                        <div class="lead-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-4">
                                    <div class="icon-box theme-two wow fadeInLeft">
                                        <div class="icon">
                                            <img src="images/default-color/icon-8.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Real-Time Protection</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="icon-box theme-two wow fadeInUp">
                                        <div class="icon">
                                            <img src="images/default-color/icon-9.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Internet & Networks</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="icon-box theme-two wow fadeInRight">
                                        <div class="icon">
                                            <img src="images/default-color/icon-10.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Mail Protection</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user-interface-section section-padding pt-0">
                        <div class="container">
                            <div class="row align-items-center clearfix">
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <img src="images/default-color/user-interface-img.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="heading-wrapper with-separator">
                                        <h2 class="h1">Really <span>awesome UI/UX</span> easier to use for users</h2>

                                        <div class="text-wrapper">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget.</p>
                                            <ul class="list-style-one">
                                                <li>Nullam placerat nunc id ornare convallis.</li>
                                                <li>Mauris id dui aliquam, dapibus felis vel, iaculis risus.</li>
                                                <li>Integer dapibus lorem in nisl hendrerit dictum.</li>
                                            </ul>
                                        </div>
                                        <div class="btn-wrapper">
                                            <a href="#" class="btn btn-primary">Start Free trial Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-section style-three style-dark section-padding">
                        <div class="container">
                            <div class="row align-items-center clearfix">
                                <div class="col-lg-4 col-md-4">
                                    <div class="image-wrapper">
                                        <img src="images/team-members.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-8">
                                    <div class="client-testimonial theme-three">
                                        <div class="testimonial-slider">
                                            <div class="item">
                                                <div class="testimonial-text">
                                                    <blockquote>
                                                        Cum et essent similique. Inani propriae menandri sed in. Pericula expetendis has no, quo populo forensibus contentiones et, nibh error in per.
                                                            </blockquote>
                                                    <div class="client-info">
                                                        <h5>Andy Sant</h5>
                                                        <p>Founder Coinpool</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="testimonial-text">
                                                    <blockquote>
                                                        It's all good. I am really satisfied with software. Pericula expetendis has no, quo populo forensibus contentiones et, nibh error in per.
                                            </blockquote>
                                                    <div class="client-info">
                                                        <h5>Dan Kaul</h5>
                                                        <p>IT Consultant</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="testimonial-text">
                                                    <blockquote>
                                                        Pericula expetendis has no, quo populo forensibus contentiones et, nibh error in per. Vis in tritani debitis delicatissimi, error omnesque invenire usu ex.
                                            </blockquote>
                                                    <div class="client-info">
                                                        <h5>Saru Matt</h5>
                                                        <p>Customer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="testimonial-text">
                                                    <blockquote>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lacus consectetur, fermentum nisi vel, aliquet erat.
                                            </blockquote>
                                                    <div class="client-info">
                                                        <h5>Yommi Pat</h5>
                                                        <p>Customer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="testimonial-text">
                                                    <blockquote>
                                                        Nam rutrum, eros nec consequat eleifend, quam est sodales mauris, eget dignissim lacus sem at erat. Vivamus eget semper nibh.
                                            </blockquote>
                                                    <div class="client-info">
                                                        <h5>Shreyn S</h5>
                                                        <p>Data Science Enthusiastic</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="site-footer footer-theme-three">
                    <div class="container">
                        <div class="main-footer style-dark">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="widget">
                                        <div class="text-widget">
                                            <div class="footer-nav horizontal-menu">
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">Company</a></li>
                                                    <li><a href="#">Services</a></li>
                                                    <li><a href="#">career</a></li>
                                                    <li><a href="#">Insight</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                            <div class="about-info">
                                                <div class="image-wrapper">
                                                    <img src="images/d-code-logo-light.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="newsletter-form style-two">
                                                <h3>Subscribe to our newsletter</h3>
                                                <form method="post">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" id="EmailInput" placeholder="Enter email address" required="" />
                                                    </div>
                                                    <button type="submit">Subscribe Now!</button>
                                                </form>
                                            </div>
                                            <div class="social-media-links">
                                                <ul>
                                                    <li><a target="_blank" href="../../www.facebook.com/sacredthemes/index.html"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a target="_blank" href="../../www.linkedin.com/company/sacredthemes/index.html"><i class="fab fa-linkedin-in"></i></a></li>
                                                    <li><a target="_blank" href="../../twitter.com/SacredThemes"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a target="_blank" href="https://www.instagram.com/sacred_themes/"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a target="_blank" href="https://www.youtube.com/channel/UCk7Jjmrlry0DiyiXoENs_TA"><i class="fab fa-youtube"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="copyright-bar style-dark">
                            <div class="copyright-text text-center">
                                © Copyright DCode 2021. Made with <i class="fas fa-heart"></i> by <a href="../../sacredthemes.net/index.html" target="_blank"><strong>SacredThemes</strong></a>.
                        </div>
                        </div>
                    </div>
                </footer>
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