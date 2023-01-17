import React from 'react';
import './Forgot.css'
import forgotBanner from '../../Images/forgot.svg';
import login from '../../Images/logo.png';

function Forgot() {
  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-6 forgot' id='box-left'>
            <div className='box mx-auto'>
              <img id="banner" src={forgotBanner} alt="banner" />
            </div>
          </div>
          <div className='col-6'>
            <div className='box mx-auto' id='box-right'>
              <div id="login-form" className='mx-auto'>
                <div className="logo text-center mt-5">
                  <img src={login} alt="login Logo" />
                </div>
                <div className='row'>
                  <h1 className='text-center'>Frogot Password</h1>
                  <div className="col-12 mx-auto mt-5">
                    <h5>Reset password</h5>
                    <label for="exampleFormControlInput1" class="form-label">New Password</label>
                    <input type="Password" className="form-control" id="exampleFormControlInput1" placeholder="Type new Password" />
                  </div>
                  <div className="col-12 mx-auto">
                    <label for="exampleFormControlInput1" className="form-labe2 mt-3 pb-2">Confirm Password</label>
                    <input type="Password" className="form-control" id="exampleFormControlInput2" placeholder="Password" />
                    <button className="btn btn-login w-100 mt-5">Submit</button>
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
      </div>
    </>
  );
}

export default Forgot;
