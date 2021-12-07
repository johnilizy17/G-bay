import React from 'react'
import logos from './asset/white-logo.png'
import {Link} from 'react-router-dom'

export default function SignIn(){
    return(
        <div>
        <div class="box-wrapper">
            <div id="main-wrapper" class="page-wrapper">
                <div class="dc-signin theme-two">
                    <div class="signin-wrapper">
                        <div class="intro-box">
                            <div class="intro-content style-dark">
                                <img src="images/d-code-logo-light.svg" class="logo" alt="DCode"/>
                                <div class="heading-wrapper">
                                    <h2 class="h1">Welcome to <span>DCode</span></h2>
                                </div>
                                <div class="text-wrapper">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Aenean sodales dictum viverra.</p>
                                </div>
                                <div class="btn-wrapper">
                                    <Link class="btn btn-primary btn-light" to="/">Home Page</Link>
                                </div>
                            </div>
                            <div class="st-tab-btn">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#SignIn" role="tab">Login</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div class="form-box">
                            <div class="st-tab-content">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="SignIn" role="tabpanel">
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Enter Email/Username"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Enter Password"/>
                                            </div>
                                            <div class="form-group text-center">
                                                <Link to="/Forgotten_Password" class="btn link-btn forgot-link">Forgot Password?</Link>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary btn-full">Sign In</button>
                                            </div>
                                            <div class="or"><span>or</span></div>

                                            <div class="form-group">
                                                <button class="btn btn-primary btn-full email-btn">Continue with Email</button>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary btn-full facebook-btn">Continue with Facebook</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane" id="SignUp" role="tabpanel">
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Enter Full Name"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Enter Email Address"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Enter Password"/>
                                            </div>
                                            <div class="form-group text-center">
                                                <label><input type="checkbox" required="required"/> I accept the policy and terms</label>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary btn-full">Sign Up</button>
                                            </div>
                                            <div class="or"><span>or</span></div>

                                            <div class="form-group">
                                                <button class="btn btn-primary btn-full email-btn">Continue with Email</button>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary btn-full facebook-btn">Continue with Facebook</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}