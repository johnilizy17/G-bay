import React from 'react'
import logos from './asset/white-logo.png'
import {Link} from 'react-router-dom'

export default function SignIn(){
    return(
        <div class="box-wrapper">        
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
                                    <Link to="Forgotten_Password" class="btn link-btn forgot-link">Forgot Password?</Link>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-full" style={{backgroundColor:"#bd0c3a", color:"#ffffff"}}>Sign In</button>
                                </div>
                                <div class="form-group text-center">
                                    <a href="#" class="btn link-btn signup-link">If you are a member sign in now</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}