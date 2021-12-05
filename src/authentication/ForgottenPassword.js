import React from 'react';
import {Link} from 'react-router-dom'

export default function ForgottenPassword(){
    return(
        <div class="box-wrapper">        
            <div id="main-wrapper" class="page-wrapper">
                <div class="dc-signin theme-one">
                    <div class="signin-wrapper">
                        <div class="box-header style-dark">
                          <div  style={{color:"#fffff", fontSize:24, fontWeight:"700"}}>  G-bay</div>
                            <h1><span>Forgotten Password,</span>Submit  your E-mail!</h1>
                        </div>
                        <div class="box-body">
                        <div style={{marginBottom:70}}/>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter your Email"/>
                                </div>
                                <div class="form-group text-center">
                                    <Link to="/" class="btn link-btn forgot-link" style={{color:"blue"}}>Return to login page</Link>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-full" style={{backgroundColor:"#bd0c3a", color:"#ffffff"}}>Submit</button>
                                </div>
                                <div class="form-group text-center">
                                    <a href="#" class="btn link-btn signup-link">Typing your registered E-mail</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}