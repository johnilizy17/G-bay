import React from 'react';
import { Link } from 'react-router-dom';
import Gbay from './gbay.jpg'
import { Hidden } from '@material-ui/core'
import uuid from 'react-uuid'

export default function Header() {

    const status = false

    const SIGNIN = {
        pathname: "/SignIn",
        key: 1,
        state: {
            applied: true
        }
    }
    const home = {
        pathname: "/",
        key: 1,
        state: {
            applied: true
        }
    }

    const Blog = {
        pathname: "/Blog",
        key: 2,
        state: {
            applied: true
        }
    }

    const FQA = {
        pathname: "/FQA",
        key: 3,
        state: {
            applied: true
        }
    }

    const About_Us = {
        pathname: "/About_us",
        key: 4,
        state: {
            applied: true
        }
    }

    return (
        <>
            <Hidden mdDown>
                <div id="master-head" class="navbar menu-absolute menu-center menu-light" style={{ backgroundColor: "linear-gradient(45deg, #f3678c 0%, #f03f6e 51%, #bd0c3a 100%)", color: "#ffffff" }}>
                    <div class="container-fluid" style={{display:"flex"}}>
                        <div style={{flex:1}}>
                            <Link to="/" >
                                <img src={Gbay} style={{ width: "30%" }} alt="GBAY" />
                            </Link>
                        </div>
                        <div class="menu-toggle-btn">
                            <a class="navbar-toggle">
                                <div class="burger-lines">
                                </div>
                            </a>
                        </div>
                        <div id="navigation" class="nav navbar-nav navbar-main">
                            <ul id="main-menu" class="menu-primary">
                                {
                                    status ? <li class="menu-item"><Link to='/home'>Home</Link>
                                    </li> : <li class="menu-item"><a href="/dashboard">Dashboard</a>
                                        </li>
                                }
                                <li class="menu-item"><Link to='/Blog'>Blog</Link>
                                </li>
                                <li class="menu-item"><Link to='/FQA'>FQA</Link>
                                </li>
                                <li class="menu-item"><Link to='/About_Us'>About Us</Link>
                                </li>
                                {!status&&  <li class="menu-item"><Link to='/payment'>Payment</Link></li>}
                            </ul>
                        </div>
                        <div class="navbar-right" style={{ backgroundColor: "#bd0c3a", color: "#ffffff" }}>
                        </div>
                    </div>
                </div>
            </Hidden>
            <Hidden lgUp>
                <div id="master-head" class="navbar menu-absolute menu-center menu-light" style={{ backgroundColor: "linear-gradient(45deg, #f3678c 0%, #f03f6e 51%, #bd0c3a 100%)", color: "#ffffff" }}>
                    <div class="container-fluid">
                        <div >
                            <Link to="/" >
                                <img src={Gbay}  alt="GBAY" />
                            </Link>
                        </div>
                        <div class="menu-toggle-btn">
                            <a class="navbar-toggle">
                                <div class="burger-lines">
                                </div>
                            </a>
                        </div>
                        <div id="navigation" class="nav navbar-nav navbar-main">
                            <ul id="main-menu" class="menu-primary">
                                {status?<li class="menu-item"><a href='/Dashboard'>Dashboard</a>  </li>: <li class="menu-item"><a href='/'>Home</a>  </li>}
                              
                                <li class="menu-item"><a href='/Blog'>Blog</a>
                                </li>
                                <li class="menu-item"><a href='/FQA'>FQA</a>
                                </li>
                                <li class="menu-item"><a href='/About_Us'>About Us</a>
                                </li>
                                {!status&&  <li class="menu-item"><Link to='/payment'>Payment</Link></li>}
                                <li class="menu-button">
                                   {status&& <Link to={SIGNIN}>
                                        <div class="btn btn-outline-primary btn-light">sign in</div>
                                    </Link>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Hidden>
        </>
    )
}