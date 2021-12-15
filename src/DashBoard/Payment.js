import React,{useState,useEffect} from 'react';
import { useFlutterwave, FlutterWaveButton } from 'react-flutterwave';
import {Link} from 'react-router-dom'
export default function Psyment() {

    const [code, setcode]=useState()
    const [card, setcard]=useState()
    const [expire, setexpire]=useState()
    const [name, setname] =useState()

    const config = {
        public_key: 'YOUR_FW_PUBLIC_KEY',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'user@gmail.com',
            phonenumber: '08102909304',
            name: 'yemi desola',
        },
        customizations: {
            title: 'My store',
            description: 'Payment for items in cart',
            logo: 'https://assets.piedpiper.com/logo.png',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
            console.log(response);
        },
        onClose: () => { },
    };
    return (
        <div class="container bg-light d-md-flex align-items-center">
            <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
            <div class="btn-wrapper">
                                        <Link to="/Dashboard"  href="#">Home Page</Link>
                                    </div>
                <div class="d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between text"> <span class="">History</span> <span>Total</span>  </div>
                    <div class="border-bottom mb-4"></div>
                    <div class="d-flex flex-column mb-4"> <span class="far fa-file-alt text"><span class="ps-2">Invoice ID:</span></span> <span class="ps-3">SN8478042099</span> </div>
                    <div class="d-flex flex-column mb-4"> <span class="far fa-file-alt text"><span class="ps-2">Amout</span></span> <span class="ps-3">N599</span> </div>

                    <div class="d-flex flex-column mb-5"> <span class="far fa-calendar-alt text"><span class="ps-2">Next payment:</span></span> <span class="ps-3">10 DEC,2021</span> </div>

                </div>
                <div class="border-bottom mb-4"></div>
            </div>
            <div class="card box2 shadow-sm">
                <div class="d-flex align-items-center justify-content-between p-md-5 p-4"> <span class="h5 fw-bold m-0">Payment methods</span>

                </div>
                <ul class="nav nav-tabs mb-3 px-md-4 px-2">
                    <li class="nav-item"> <a class="nav-link px-2 active" aria-current="page" href="#">Credit Card</a> </li>
                   
                </ul>
                <div class="px-md-5 px-4 mb-4 d-flex align-items-center">
                    <div class="btn btn-success me-4"><span class="fas fa-plus"></span></div>
                </div>
                <form action="">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Credit Card</span>
                                <div class="inputWithIcon"> <input class="form-control" type="text" value={card} onChange={(e)=>setcard(e.target.value)} /> <span class=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" /></span> </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Expiration<span class="ps-1">Date</span></span>
                                <div class="inputWithIcon"> <input type="text" class="form-control" value={expire} onChange={(e)=>setexpire(e.target.value)} /> <span class="fas fa-calendar-alt"></span> </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4"> <span>Code CVV</span>
                                <div class="inputWithIcon"> <input type="password" class="form-control" value={code} onChange={(e)=>setcode(e.target.value)} /> <span class="fas fa-lock"></span> </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Name</span>
                                <div class="inputWithIcon"> <input class="form-control text-uppercase" type="text" value={name} onChange={(e)=>setname(e.target.value)} /> <span class="far fa-user"></span> </div>
                            </div>
                        </div>
                        <div class="col-12 px-md-5 px-4 mt-3" onClick={() => {
                                console.log("dmffmkfm")
                                handleFlutterPayment({
                                    callback: (response) => {
                                        console.log(response);
                                    },
                                    onClose: () => { },
                                });
                            }}>
                            <div 
                                class="btn btn-primary w-100">Pay</div>
                        </div>
                    </div>
                    <FlutterWaveButton {...fwConfig} />

                </form>
            </div>
        </div>
    )
}