import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer class="site-footer footer-theme-two">
                    <div class="container">
                        <div class="main-footer style-dark">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="widget">
                                        <div class="text-widget">
                                            <div class="about-info">
                                                <div class="image-wrapper">
                                                    <img src="images/d-code-logo-light.svg" alt="" />
                                                </div>
                                                <p>We impact lifes in different ways possible through our sounds and videos</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="widget">
                                        <div class="widget-title">
                                            <h3 class="title">Useful Links</h3>
                                        </div>
                                        <div class="text-widget">
                                            <div class="footer-nav">
                                                <ul>
                                                    <li><a href="#">Cookie Policy</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms of Service</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="widget">
                                        <div class="widget-title">
                                            <h3 class="title">Pages</h3>
                                        </div>
                                        <div class="text-widget">
                                            <div class="footer-nav">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/About_Us">About us</Link></li>
                                                    <li><Link to="/Blog">Blog</Link></li>
                                                    <li><Link to="/Commmunity">Community</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="widget">
                                        <div class="widget-title">
                                            <h3 class="title">Support</h3>
                                        </div>
                                        <div class="text-widget">
                                            <div class="contact-info">
                                                <ul>
                                                    <li class="email-field">support@sacredthemes.net</li>
                                                    <li class="phone-field">+2348142113675, +2349062359961</li>
                                                    <li class="address-field">49 Uniqe Square D, New York, NY 10003, USA</li>
                                                </ul>
                                            </div>
                                            <div class="social-media-links">
                                                <ul>
                                                    <li><a target="_blank" href="https://www.facebook.com/gabriel.ayodelegbay"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a target="_blank" href="../../www.linkedin.com/company/sacredthemes/index.html"><i class="fab fa-linkedin-in"></i></a></li>
                                                    <li><a target="_blank" href="../../twitter.com/SacredThemes"><i class="fab fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="copyright-bar style-dark">
                            
                        </div>
                    </div>
                </footer>
                
    )
}