import React from "react";
import {Link} from"react-router-dom";

function Register() {
  return (
      <>
        <section className="w-[30%] mx-auto p-8 rounded-[20px] mt-[50px] " style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mx-auto">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                        <form className=" mx-auto items-center text-center">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" className="form-control p-1" />
                              <label className="form-label p-1" htmlFor="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>
  
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control p-1" />
                              <label className="form-label p-1" htmlFor="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>
  
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control p-1" />
                              <label className="form-label p-1" htmlFor="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>
  
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4cd" className="form-control p-1" />
                              <label className="form-label p-1" htmlFor="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div>

  
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" >
                            <Link to="/">
                               Register
                            </Link>
                          </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Register;