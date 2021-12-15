import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Footer';
import Header from '../Header';

export default function Homepage() {
    return (
        <div>
            <div class="box-wrapper">
                <Header />
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
                                        <h1>G-bay is the <span>best in film production, music training ministry </span></h1>
                                    </div>
                                    <div class="text-wrapper wow fadeInRight" data-wow-delay="0.4s">
                                        <p class="lead-text">Moto.</p>
                                        <p>Script tells our stories to the world.</p>
                                    </div>
                                    <div class="btn-wrapper wow fadeInUp" data-wow-delay="0.4s">
                                        <Link to="/SignIn" class="btn btn-primary" >Sign In</Link>
                                        <a class="btn btn-outline-primary" href="https://youtube.com/channel/UCAxY3LVH-SpPEf1uC-TyfYw"><i class="fas fa-play-circle"></i>Watch Video</a>
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
                                        <h2 class="h1">Creating movie and music that transform <span>lifes</span></h2>
                                    </div>
                                    <div class="text-wrapper">
                                        <p class="lead-text">Acting is not just a presenting information but constructing a storyline that touchs the heart</p>
                                        <p>When inspiration does not come, I go for a walk, go to the movies, talk to a friend, let go… The muse is bound to return again, especially if I turn my back! </p>
                                    </div>
                                    <div class="btn-wrapper">
                                        <Link class="btn btn-primary" to="/About_Us">Discover More</Link>
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
                                            <p>this will help us instantly share photos, post news stories, and just chat with friends, family, and colleagues from anywhere in the world with an internet connection with instant information through our blog..</p>
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
                                            <h4>Real-Time Access</h4>
                                            <p>Latest news about G-bay and current activity will be found here </p>
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
                                            <p>Access our information from any where in the world</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="icon-box theme-two wow fadeInRight">
                                        <div class="icon">
                                            <img src="images/default-color/icon-10.svg" alt="" />
                                        </div>
                                        <div class="text">
                                            <h4>Customer care</h4>
                                            <p>Instant access to Customer care of GBAY all round the world</p>
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
                                                    Acting is behaving truthfully under imaginary circumstances.
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
                                                    If you get a chance to act in a room that somebody else has paid rent for, then you’re given a free chance to practice your craft.
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
                                                    Acting is not about being someone different. It's finding the similarity in what is apparently different, then finding myself in there.
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
                                                    For me, our job as artists is to serve the story, serve the director, and serve the fellow actors. And if you do that, by osmosis you’re serving yourself because you’ll get the best out of yourself.
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
                                                    Remember: there are no small parts, only small actors.
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
                <Footer />
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