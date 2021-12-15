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
                                    <li><Link to="/">Home</Link></li>
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
                                        <span class="sub-title">About GBAY</span>
                                        <h2 class="h1">We are providing the <span>modern solutions</span></h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="text-wrapper">
                                        <p class="lead-text">Founded in 2013, GBAY ministry is used by nearly 50 people, have release over 10 movies on youtube with member of over 20 members in numbers and. it is a place everyone who act to learn, share their knowledge, collaborate, and build their careers. 
                                        
                                        .</p>
                                        <p class="lead-text">Our products and tools help actors and musicians in life and at work. These products include GBAY flim Products for Teams, GBAY Advertising, and GBAY for Talent and Jobs.</p>
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
                                        <h2 class="h1">Why <span>Choose </span> GBAY</h2>
                                        <div class="lead-text">
                                            <p>We provide young actor and actoress the space to extend there exprience and start build real life acting skills early in life.</p>
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
                                            <p>We have innovative writers who create a story base on real life situation around the world</p>
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
                                            <p>Our movies and song are well rated and review many times before published</p>
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
                                            <p>We have the fastest support team in helping new actor, actoress and musicians to grow and learn from the expreince of existing or well expreinced actor or musicians</p>
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
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">Getting started with GBAY?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                                <div class="panel-body">
                                                    <p>Contact us through the following support team to add and welcome new members with open hands.</p>
                                                    <ul class="list-style-one">
                                                        <li>08142113678</li>
                                                        <li>09062359961</li>
                                                        <li>Facebook</li>
                                                        <li>Youtube</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="heading1">
                                                <h3 class="panel-title">
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">How can i start has a newbee?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                                <div class="panel-body">
                                                    <p>When you join GBAY we offer courses and programs that help new actor to develop and reach higher hight.</p>
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
                                                    <p>Person of any age can join GBAY because we believe that talent is not by age.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="heading3">
                                                <h3 class="panel-title">
                                                    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">How many time do you meet in a month?</a>
                                                </h3>
                                            </div>
                                            <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                                <div class="panel-body">
                                                    <p>We meet has many time in a month to shot movies and also to teach now actor on how to act .</p>
                                                    <p>We also meet once in a year by december 10 for camp to come and learn forward on how to do things.</p>
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