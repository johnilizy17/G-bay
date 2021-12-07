import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export default function () {
    return (
        <div>
            <div class="box-wrapper">
               <Header/>
               <div id="main-wrapper" class="page-wrapper">
                    <div class="inner-page-header section-padding style-dark">
                        <div class="container">
                            <div class="page-title-inner text-center clearfix">
                                <div class="heading-wrapper">
                                    <h1 class="h1">About Us</h1>
                                    <div class="lead-text">
                                        <p>What makes a great company? It's really easy. It's also the people that are working here.</p>
                                    </div>
                                </div>
                                <ul class="st-breadcrumb">
                                    <li><a href="index-standard.html">Home</a></li>
                                    <li class="active"><span>About Us</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="about-section section-padding">
                        <div class="container">
                            <div class="row justify-content-between">
                                <div class="col-lg-5 wow fadeInLeft">
                                    <div class="heading-wrapper with-separator">
                                        <span class="sub-title">About Dcode</span>
                                        <h2 class="h1">We are providing the <span>modern solutions</span></h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="text-wrapper">
                                        <p class="lead-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget.</p>
                                        <ul class="list-style-one">
                                            <li>Nullam placerat nunc id ornare convallis.</li>
                                            <li>Mauris id dui aliquam, dapibus felis vel, iaculis risus.</li>
                                            <li>Integer dapibus lorem in nisl hendrerit dictum.</li>
                                        </ul>
                                    </div>
                                    <div class="btn-wrapper">
                                        <a class="btn btn-primary" href="#">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-padding light-gradient-bg">
                        <div class="container">
                            <div class="row clearfix justify-content-center">
                                <div class="col-lg-10">
                                    <div class="heading-wrapper text-center with-separator">
                                        <h2 class="h1">Why <span>Choose </span>the DCode</h2>
                                        <div class="lead-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-4">
                                    <div class="icon-box theme-one wow fadeInLeft">
                                        <div class="icon">
                                            <img src="images/default-color/icon-6-light.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Innovative</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="icon-box theme-one wow fadeInUp">
                                        <div class="icon">
                                            <img src="images/default-color/icon-5-light.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Reasonable</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="icon-box theme-one wow fadeInRight">
                                        <div class="icon">
                                            <img src="images/default-color/icon-7-light.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Support</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fact-section style-dark dark-bg">
                        <div class="container">
                            <div class="row clearfix">
                                <div class="col-md-5">
                                    <div class="heading-wrapper pt-100 pb-30">
                                        <h2 class="h1">Our <span>Innovative platform</span> that convert visitors into customars.</h2>
                                        <div class="lead-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="counter-wrapper with-separator two-col-stack">
                                        <div class="counter-block with-icon wow fadeIn">
                                            <div class="counter-icon">
                                                <img src="images/default-color/icon-14-light.svg" alt="Total Downloads" />
                                            </div>
                                            <div class="counter">
                                                <span class="counter-number-prefix"></span>
                                                <span class="counter-number" data-speed="3500" data-stop="2020">0</span>
                                                <span class="counter-number-after"></span>
                                                <span class="counter-number-suffix"></span>
                                            </div>
                                            <div class="counter-title">Year We were Established</div>
                                        </div>
                                        <div class="counter-block with-icon wow fadeIn" data-wow-delay="0.3s">
                                            <div class="counter-icon">
                                                <img src="images/default-color/icon-12-light.svg" alt="Positive Reviews" />
                                            </div>
                                            <div class="counter">
                                                <span class="counter-number-prefix"></span>
                                                <span class="counter-number" data-speed="1000" data-stop="3">0</span>
                                                <span class="counter-number-after">m</span>
                                                <span class="counter-number-suffix"></span>
                                            </div>
                                            <div class="counter-title">Monthly Active Users</div>
                                        </div>
                                        <div class="counter-block with-icon wow fadeIn" data-wow-delay="0.6s">
                                            <div class="counter-icon">
                                                <img src="images/default-color/icon-13-light.svg" alt="Happy Users" />
                                            </div>
                                            <div class="counter">
                                                <span class="counter-number-prefix"></span>
                                                <span class="counter-number" data-speed="3500" data-stop="80">0</span>
                                                <span class="counter-number-after"></span>
                                                <span class="counter-number-suffix">+</span>
                                            </div>
                                            <div class="counter-title">Members in Our Exclusive Team</div>
                                        </div>
                                        <div class="counter-block with-icon wow fadeIn" data-wow-delay="0.9s">
                                            <div class="counter-icon">
                                                <img src="images/default-color/icon-11-light.svg" alt="Years of Operation" />
                                            </div>
                                            <div class="counter">
                                                <span class="counter-number-prefix"></span>
                                                <span class="counter-number" data-speed="3500" data-stop="10">0</span>
                                                <span class="counter-number-after"></span>
                                                <span class="counter-number-suffix">+</span>
                                            </div>
                                            <div class="counter-title">Countries using Our Products</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-section section-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 wow fadeInLeft">
                                    <div class="heading-wrapper with-separator">
                                        <h2 class="h1">Frequently Asked <span>Questions</span></h2>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="heading0">
                                                <h3 class="panel-title">
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">How can I install/upgrade Dummy Content?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                                <div class="panel-body">
                                                    <p>Nunc scelerisque bibendum felis eu aliquet. Quisque et neque in diam feugiat dapibus laoreet vitae risus. Aliquam in mauris ante. Nullam porta, metus at dictum consectetur, mi risus auctor eros, id interdum nisl velit et ante.</p>
                                                    <ul class="list-style-one">
                                                        <li>pellentesque, ex fringilla consectetur iaculis, turpis odio sollicitudin nibh</li>
                                                        <li>lorem ex ultricies mi, nec pellentesque est erat quis diam</li>
                                                        <li>Donec a felis et orci facilisis eleifend eu vitae orci.</li>
                                                        <li>Pellentesque ut pretium augue. Vivamus vel lorem justo. Vivamus sit amet porttitor mauris.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="heading1">
                                                <h3 class="panel-title">
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">How can I uninstall Dummy Content?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                                <div class="panel-body">
                                                    <p>Nullam a nisl vitae sapien aliquet pellentesque. Mauris dui felis, sagittis non turpis quis, molestie facilisis quam. Ut ut augue tempor, tristique odio vitae, auctor erat. Sed finibus, magna a condimentum ultricies, lectus nisl euismod lectus, id aliquet mi velit in metus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="heading2">
                                                <h3 class="panel-title">
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">What are the minimum requirements?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                                <div class="panel-body">
                                                    <p>Suspendisse condimentum efficitur leo, vitae porttitor risus ornare nec. Maecenas eget lorem vestibulum, vestibulum nulla et, posuere nibh.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="heading3">
                                                <h3 class="panel-title">
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">Where can I download earlier versions?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                                <div class="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus mauris, ullamcorper quis fringilla pretium, faucibus quis enim. Proin at lorem nunc. Curabitur at scelerisque felis.</p>
                                                    <p>Cras ornare libero sem, et efficitur elit hendrerit id. Nam molestie felis ipsum, non ullamcorper nunc viverra sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="switcher-btn">
                    <a href="#" class="settings">
                        <i class="mdi mdi-cog-outline mdi-spin"></i>
                    </a>
                </div>
            </div>
            <Footer/>
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