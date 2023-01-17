import React, { useState } from 'react';
import './Login.css'
import login from '../../Images/logo.png';
import banner from '../../Images/banner.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login here
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 login' id='box-left'>
                        <div className='box mx-auto'>
                            <img id="banner" src={banner} alt="banner" />
                        </div>
                    </div>
                    <div className='col-6 logout'>
                        <div className='box mx-auto' id='box-right'>
                            <div id="login-form" className='mx-auto'>
                                <div className="logo text-center mt-5">
                                    <img src={login} alt="login Logo" />
                                </div>
                                <div className='row'>
                                    <h1 className='text-center'>Welcom To local Filings</h1>
                                    <div className="col-12 mx-auto mt-5">
                                        <label for="exampleFormControlInput1" class="form-label">Enter Your Email Address</label>
                                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <label for="exampleFormControlInput1" className="form-labe2 mt-3 pb-2">Enter Your Password</label>
                                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="exampleFormControlInput2" placeholder="Password" />
                                        <span id='forgot'>Forgot Passwod?</span>
                                        <button type="submit" className="btn btn-login w-100 mt-5">Sign In</button>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <button className="btn btn-primary w-100  mt-4" id='btn-up'><span><i class="bi bi-google">+ </i></span>Google</button>
                                            </div>
                                            <div className='col-6'>
                                                <button className="btn btn-primary w-100 mt-4" id='btn-up'>Facebook</button>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-8 mx-auto mt-5" >
                                                <p>Don't have an account? <span style={{ color: "#ff832a" }}>Create account</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </form>
    );
}
export default Login;

