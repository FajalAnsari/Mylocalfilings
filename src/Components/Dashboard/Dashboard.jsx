import React from 'react';
import { Table, Form } from 'react-bootstrap';
import './Dashboard.css';
import logoin from '../../Images/logo.png';
import user from '../../Images/user.png';
import logoutimg from '../../Images/logoutimg.svg';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className='nav-dashboard'>
        <nav className="navbar">
          <div className="container-fluid pb-1">
            <a href='/' className="navbar-brand">
              <img src={logoin} alt="logo" />
            </a>
            <form className="d-flex" role="search">
              <i className="bi bi-bell f-s" id='user-i'></i>
              <img src={user} alt="logo" id='user' />
            </form>
          </div>
        </nav>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-3 gy-0'>
              <div className='aside'>
                <div className='col-10 mx-auto mt-5'>
                  <button className='btn w-100 p-3 btn-h'>
                    <span><i class="bi bi-house" id='dashboard-i'></i></span>
                    DASHBOARD
                  </button>
                </div>
                <div className='col-10 mx-auto mt-2'>
                  <button className='btn w-100 p-3 btn-h'><span><i class="bi bi-person-fill-add" id='dashboard-i'></i></span>ORDERS</button>
                </div>
                <div className='col-10 mx-auto mt-2'>
                  <button className='btn w-100 p-3 btn-h'><span><i class="bi bi-universal-access-circle" id='dashboard-i'></i></span>RESOURCES</button>
                </div>
                <div className='logout-button'>
                  <Link to={"/"}><img src={logoutimg} alt="logoutimg" /></Link>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='customers'>
                <div className="input-group flex-nowrap pt-3 mx-auto" id='search-w'>
                  <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                  <input type="text" className="form-control p-3" placeholder="Search by application name or more" aria-label="Username" aria-describedby="addon-wrapping" />
                  <span className="input-group-text bg-light" id="addon-wrapping"><i className="bi bi-x"></i></span>
                </div>
                <div className='mx-auto pt-3 mt-2 table-container'>
                  <div className='row'>
                    <div className='col-10 mx-auto'>
                      <div className='row '>
                        <div className='col-6'>
                          <input type="text" placeholder="Search By..." className="form-control w-75" id="search-b"  />
                        </div>
                        <div className='col-6'>
                          <div className='row'>
                            <div className='col-4'>
                              <Form.Select aria-label="Default select example " className='bg-light'>
                                <option>Status</option>
                                <option value="1">Complete</option>
                                <option value="2">In-complete</option>
                                <option value="3">Failed</option>
                              </Form.Select>
                            </div>
                            <div className='col-4'>
                              <p className='mt-2'>Show Entries</p>
                            </div>
                            <div className='col-4'>
                            <Form.Select aria-label="Default select example" className='bg-light'>
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </Form.Select>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Table striped hover className='mt-4 mx-auto' id='table-width'>
                    <thead>
                      <tr style={{ backgroundColor: '#ff832a' }} >
                        <th>Costumer</th>
                        <th>Location</th>
                        <th>Time Stamp</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className='usertable'>
                      <tr>
                        <td><img src={user} alt="user" /></td>
                        <td><p><i className="bi bi-geo-alt-fill m-1"></i>Hyderabad</p></td>
                        <td><p>10-01-2023</p></td>
                        <td><button className='btn btn-warning w-75 disabled'>In-progress</button></td>
                        <td>
                          <span id='icons'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-file-arrow-down-fill ps-3">
                              <i className="bi bi-send ps-3"></i></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src={user} alt="user" /></td>
                        <td><p><i className="bi bi-geo-alt-fill m-1"></i>Andhra Pradesh</p></td>
                        <td><p>08-01-2023</p></td>
                        <td><button className='btn btn-success w-75 disabled'>Completed</button></td>
                        <td>
                          <span id='icons'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-file-arrow-down-fill ps-3">
                              <i className="bi bi-send ps-3"></i></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src={user} alt="user" /></td>
                        <td><p><i className="bi bi-geo-alt-fill m-1"></i>Karnatka</p></td>
                        <td><p>02-01-2023</p></td>
                        <td><button className='btn btn-warning w-75 disabled'>In-progress</button></td>
                        <td>
                          <span id='icons'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-file-arrow-down-fill ps-3">
                              <i className="bi bi-send ps-3"></i></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src={user} alt="user" /></td>
                        <td><p><i className="bi bi-geo-alt-fill m-1"></i>Vishakha Patnam</p></td>
                        <td><p>03-01-2023</p></td>
                        <td><button className='btn btn-success w-75 disabled'>Completed</button></td>
                        <td>
                          <span id='icons'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-file-arrow-down-fill ps-3">
                              <i className="bi bi-send ps-3"></i></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src={user} alt="user" /></td>
                        <td><p><i className="bi bi-geo-alt-fill m-1"></i>Taminadu</p></td>
                        <td><p>10-11-2022</p></td>
                        <td><button className='btn btn-warning w-75 disabled'>In-progress</button></td>
                        <td>
                          <span id='icons'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-file-arrow-down-fill ps-3">
                              <i className="bi bi-send ps-3"></i></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src={user} alt="user" /></td>
                        <td><p><i className="bi bi-geo-alt-fill m-1"></i>Lucknow</p></td>
                        <td><p>11-01-2023</p></td>
                        <td><button className='btn btn-success w-75 disabled'>Completed</button></td>
                        <td>
                          <span id='icons'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-file-arrow-down-fill ps-3">
                              <i className="bi bi-send ps-3"></i></i>
                          </span>
                        </td>
                      </tr>

                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
