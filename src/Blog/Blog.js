import React from 'react';
import { Link } from 'react-router-dom'

export default function Blog() {
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
                        <div class="">
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
                <div id="main-wrapper" class="page-wrapper">
                    <div class="inner-page-header section-padding style-dark">
                        <div class="container">
                            <div class="page-title-inner text-center clearfix">
                                <div class="heading-wrapper">
                                    <h1 class="h1">Latest News</h1>
                                    <div class="lead-text">
                                        <p>The latest new feed about G-BAY flim production</p>
                                    </div>
                                </div>
                                <ul class="st-breadcrumb">
                                    <li><Link to="/">Home</Link></li>
                                   <Link to="/Blog">Blog</Link>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="section-padding">
                        <div class="container">
                            <div class="row clearfix">
                                <div class="col-lg-8">
                                    <div class="article-block">
                                        <div class="inner-box">
                                            <div class="article-img">
                                                <a href="#">
                                                    <img src="images/large-thumb-3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="article-details">
                                                <div class="post-meta">
                                                    <span class="entry-meta entry-category">
                                                        <a href="#">Software</a>
                                                    </span>
                                                    <span class="entry-meta entry-date">
                                                        <a href="#">August 11, 2020</a>
                                                    </span>
                                                </div>
                                                <h2 class="entry-title"><a href="#">20 Questions You Should Always Ask About Security Software Before Buying It.</a></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.</p>
                                                <div class="readmore-link">
                                                    <a href="#" class="btn link-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-block">
                                        <div class="inner-box">
                                            <div class="article-img">
                                                <a href="#">
                                                    <img src="images/large-thumb-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="article-details">
                                                <div class="post-meta">
                                                    <span class="entry-meta entry-category">
                                                        <a href="#">Technology</a>
                                                    </span>
                                                    <span class="entry-meta entry-date">
                                                        <a href="#">August 01, 2020</a>
                                                    </span>
                                                </div>
                                                <h2 class="entry-title"><a href="#">Responsible for a Technology Budget? 12 Top Notch Ways to Spend Your Money.</a></h2>
                                                <p>Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</p>
                                                <div class="readmore-link">
                                                    <a href="#" class="btn link-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-block category-marketing">
                                        <div class="inner-box">
                                            <div class="article-img">
                                                <a href="#">
                                                    <img src="images/large-thumb-5.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="article-details">
                                                <div class="post-meta">
                                                    <span class="entry-meta entry-category">
                                                        <a href="#">Marketing</a>
                                                    </span>
                                                    <span class="entry-meta entry-date">
                                                        <a href="#">July 27, 2020</a>
                                                    </span>
                                                </div>
                                                <h2 class="entry-title"><a href="#">Why You Should Focus on Improving Marketing.</a></h2>
                                                <p>Donec condimentum consectetur tortor, id faucibus ante tempus et. Sed lorem turpis, pharetra at turpis sit amet, pellentesque finibus metus. Pellentesque iaculis et neque at porta. Phasellus id tincidunt leo.</p>
                                                <div class="readmore-link">
                                                    <a href="#" class="btn link-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-block category-event">
                                        <div class="inner-box">
                                            <div class="article-img">
                                                <a href="#">
                                                    <img src="images/large-thumb-1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="article-details">
                                                <div class="post-meta">
                                                    <span class="entry-meta entry-category">
                                                        <a href="#">Event</a>
                                                    </span>
                                                    <span class="entry-meta entry-date">
                                                        <a href="#">July 11, 2020</a>
                                                    </span>
                                                </div>
                                                <h2 class="entry-title"><a href="#">The Ultimate Glossary of Terms About Software Launch Event.</a></h2>
                                                <p>Phasellus id tincidunt leo, sed posuere nibh. Sed congue commodo consectetur. Cras semper vestibulum mollis. Sed posuere augue id purus consequat, vel aliquam lacus dignissim.</p>
                                                <div class="readmore-link">
                                                    <a href="#" class="btn link-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-block category-technology">
                                        <div class="inner-box">
                                            <div class="article-img">
                                                <a href="#">
                                                    <img src="images/large-thumb-6.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="article-details">
                                                <div class="post-meta">
                                                    <span class="entry-meta entry-category">
                                                        <a href="#">Technology</a>
                                                    </span>
                                                    <span class="entry-meta entry-date">
                                                        <a href="#">July 07, 2020</a>
                                                    </span>
                                                </div>
                                                <h2 class="entry-title"><a href="#">The Top Reasons People Succeed in the Finance Industry.</a></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.</p>
                                                <div class="readmore-link">
                                                    <a href="#" class="btn link-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-block category-software">
                                        <div class="inner-box">
                                            <div class="article-img">
                                                <a href="#">
                                                    <img src="images/large-thumb-4.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="article-details">
                                                <div class="post-meta">
                                                    <span class="entry-meta entry-category">
                                                        <a href="#">Software</a>
                                                    </span>
                                                    <span class="entry-meta entry-date">
                                                        <a href="#">June 30, 2020</a>
                                                    </span>
                                                </div>
                                                <h2 class="entry-title"><a href="#">How Technology Is Changing How We Treat Security Software.</a></h2>
                                                <p>Curabitur fringilla eu eros eget pellentesque. Vivamus fermentum nisl sed imperdiet feugiat. Aliquam varius volutpat ultrices. Nam pharetra nibh non nisl ultrices sollicitudin in ut nulla.</p>
                                                <div class="readmore-link">
                                                    <a href="#" class="btn link-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pagination-wrapper text-center">
                                        <ul class="pagination">
                                            <li>
                                                <span aria-current="page" class="page-numbers current">1</span>
                                            </li>
                                            <li>
                                                <a class="page-numbers" href="#">2</a>
                                            </li>
                                            <li>
                                                <a class="page-numbers" href="#">3</a>
                                            </li>
                                            <li>
                                                <a class="page-numbers" href="#">4</a>
                                            </li>
                                            <li class="page-next">
                                                <a href="#">
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="sidebar right-side">
                                        <div class="widget search-box">
                                            <form method="post">
                                                <div class="form-group">
                                                    <input type="search" name="SearchInput" class="form-control" placeholder="Search..." required="required" />
                                                </div>
                                                <button type="submit"><i class="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                        <div class="widget text">
                                            <div class="widget-title">
                                                <h3 class="title">Free Text</h3>
                                            </div>
                                            <div class="text-widget">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros.</p>
                                            </div>
                                        </div>
                                        <div class="widget widget_categories">
                                            <div class="widget-title">
                                                <h3 class="title">Categories</h3>
                                            </div>
                                            <ul>
                                                <li class="cat-item"><a href="#">Event</a></li>
                                                <li class="cat-item"><a href="#">Software</a></li>
                                                <li class="cat-item"><a href="#">Technology</a></li>
                                                <li class="cat-item"><a href="#">Marketing</a></li>
                                                <li class="cat-item"><a href="#">Uncategorized</a></li>
                                            </ul>
                                        </div>
                                        <div class="widget widget_recent_entries">
                                            <div class="widget-title">
                                                <h3 class="title">Recent Post</h3>
                                            </div>
                                            <ul class="st-recent-posts">
                                                <li class="rp-item">
                                                    <a href="#">
                                                        <div class="article-img">
                                                            <img src="images/large-thumb-3-square.jpg" alt="" />
                                                        </div>
                                                        <div class="article-details">
                                                            <h4 class="entry-title">20 Questions You Should Always Ask About Security Software Before Buying It.</h4>
                                                            <span class="rp-date">August 11, 2020</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="rp-item">
                                                    <a href="#">
                                                        <div class="article-img">
                                                            <img src="images/large-thumb-2-square.jpg" alt="" />
                                                        </div>
                                                        <div class="article-details">
                                                            <h4 class="entry-title">Responsible for a Technology Budget? 12 Top Notch Ways to Spend Your Money.</h4>
                                                            <span class="rp-date">August 01, 2020</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="rp-item">
                                                    <a href="#">
                                                        <div class="article-img">
                                                            <img src="images/large-thumb-5-square.jpg" alt="" />
                                                        </div>
                                                        <div class="article-details">
                                                            <h4 class="entry-title">Why You Should Focus on Improving Marketing.</h4>
                                                            <span class="rp-date">July 27, 2020</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="widget widget_tag_cloud">
                                            <div class="widget-title">
                                                <h3 class="title">Tag Cloud</h3>
                                            </div>
                                            <div class="tagcloud">
                                                <a href="#">Technology</a><a href="#">Software</a><a href="#">Digital</a><a href="#">Social</a><a href="#">Security</a><a href="#">CRM</a><a href="#">Payment</a>
                                            </div>
                                        </div>
                                        <div class="widget widget_social">
                                            <div class="widget-title">
                                                <h3 class="title">Follow Us</h3>
                                            </div>
                                            <div class="social-media-links">
                                                <ul>
                                                    <li><a target="_blank" href="../../www.facebook.com/sacredthemes/index.html"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a target="_blank" href="https://www.instagram.com/sacred_themes/"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a target="_blank" href="../../www.linkedin.com/company/sacredthemes/index.html"><i class="fab fa-linkedin-in"></i></a></li>
                                                    <li><a target="_blank" href="../../twitter.com/SacredThemes"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a target="_blank" href="https://www.behance.net/sacredthemes"><i class="fab fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Community</a></li>
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
                                                    <li><a target="_blank" href="../../www.facebook.com/sacredthemes/index.html"><i class="fab fa-facebook-f"></i></a></li>
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