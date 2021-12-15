import React,{useState} from 'react'
import logos from './asset/white-logo.png'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from '../gbay.jpg'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function SignIn(){
    const [company, setcompany] = useState();
    const [name, setname] = useState();
    const [image, setimage] = useState();
    const [number, setnumber] = useState();
    const [email, setemail] = useState();
    const [country, setcountry] = useState();
    const [isAdmin, setisAdmin] = useState(false);
    const [desc, setdesc] = useState();
    const [password, setpassword] = useState();
    const [first, setfirst] = useState();
    const [username, setusername] = useState();
   
    const history =  useNavigate();

    const home = {
        pathname: "/",
        key: 1, 
        state: {
          applied: true
        }
    }
const submit = ()=>{
    axios({
        method: 'post',
        url: 'https://gbayssss.herokuapp.com/api/auth/login',
        header: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        data: {
            "email": email,
            "password": password
      }
      }).then((res) => {
        if (res.data === "user not found" || res.data === "wrong password") {
            alert(res.data)
          } else {
            console.log(res.data)
            history("/dashboard");
          }
    }).catch((err)=>{
        alert(err)
    })
}
const register = ()=>{
    console.log("hello")
    axios({
        method: 'post',
        url: 'https://gbayssss.herokuapp.com/api/auth/register',
        header: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        data: {
            "email": username,
            "password": password,
            "name":name,
            "username": setusername,
            "number": setnumber
      }
      }).then((res) => {
        if (res.data === "user not found" || res.data === "wrong password") {
            alert(res.data)
          } else {
            console.log(res.data)
            alert("successfull")
            history("/dashboard");
          }
    }).catch((err)=>{
        alert(err)
    })
}
return(
            <body>
            <div class="box-wrapper">
                <div id="main-wrapper" class="page-wrapper">
                    <div class="dc-signin theme-two">
                        <div class="signin-wrapper">
                            <div class="intro-box">
                                <div class="intro-content style-dark">
                                    <img src={logo} class="logo" alt="DCode" style={{ height: 100 }} />
                                    <div class="heading-wrapper">
                                        <h2 class="h1">Welcome to  <span>GBAY</span></h2>
                                    </div>
                                    <div class="text-wrapper">
                                        <p>Changing the world positively through acting.</p>
                                    </div>
                                    <div class="btn-wrapper">
                                        <Link to="/" class="btn btn-primary btn-light" href="#">Home Page</Link>
                                    </div>
                                </div>
                                <div class="st-tab-btn">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#SignIn" role="tab">Login</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#SignUp" role="tab">Register</a>
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
                                                <input type="text" class="form-control" placeholder="Enter Email/Username"
                                                 onChange={(e) => setemail(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} />
                                            </div>
                                            <div class="form-group text-center">
                                                <Link to="/Forgotten_Password" class="btn link-btn forgot-link">Forgot Password?</Link>
                                            </div>
                 
                                            <div class="form-group" onClick={submit}>
                                                <a href="#" class="btn btn-primary btn-full">Sign In</a>
                                            </div>    
                                        </form>
                                        </div>
                                        <div class="tab-pane" id="SignUp" role="tabpanel">
                                            <form>
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setname(e.target.value)}} type="text" class="form-control" placeholder="Enter Full Name" />
                                                </div>
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setemail(e.target.value)}} type="email" class="form-control" placeholder="Enter Email Address" />
                                                </div>
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setusername(e.target.value)}} type="text" class="form-control" placeholder="Enter Username" />
                                                </div>
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setnumber(e.target.value)}} type="text" class="form-control" placeholder="Enter Phone Number" />
                                                </div>                                            
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setpassword(e.target.value)}} type="password" class="form-control" placeholder="Enter Password" />
                                                </div>
                                                <div class="form-group text-center">
                                                    <label><input type="checkbox" required="required" /> I accept the policy and terms</label>
                                                </div>
                                                <div class="form-group">
                                                    <div onClick={register} class="btn btn-primary btn-full">Sign Up</div>
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
        </body>
    )
}