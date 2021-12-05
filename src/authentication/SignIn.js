import React from 'react'
import logos from './asset/white-logo.png'

export default function SignIn(){
    return(
        <div class="box-wrapper">        
            <div id="preloader">
                <div id="status">
                    <div class="d-loader">
                        <img src={logos} alt=""/>
                    </div>
                </div>
            </div>
           <div id="main-wrapper" class="page-wrapper">
                <div class="dc-signin theme-one">
                    <div class="signin-wrapper">
                        <div class="box-header style-dark">
                          <div  style={{color:"#fffff", fontSize:24, fontWeight:"700"}}>  G-bay</div>
                            <h1><span>Welcome Back,</span> Log In!</h1>
                        </div>
                        <div class="box-body">
                        <div style={{marginBottom:70}}/>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter Email/Username"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Enter Password"/>
                                </div>
                                <div class="form-group text-center">
                                    <a href="#" class="btn link-btn forgot-link">Forgot Password?</a>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-full" style={{backgroundColor:"#bd0c3a"}}>Sign In</button>
                                </div>
                                <div class="or"><span>or</span></div>

                                <div class="form-group">
                                    <button class="btn btn-primary btn-full email-btn">Continue with Email</button>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-full facebook-btn">Continue with Facebook</button>
                                </div>
                                <div class="form-group text-center">
                                    <a href="#" class="btn link-btn signup-link">Not on DCode yet? Sign up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}