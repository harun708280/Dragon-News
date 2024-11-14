import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className=" w-7/12 mx-auto flex justify-center items-center">
        <div className=" px-8 pb-8 w-full  ">
          <div className="hero w-9/12 mx-auto bg-base-100 shadow-2xl rounded-lg">
            <div className="hero-content flex-col py-7  lg:flex-row-reverse">
              <div className=" w-full bg-white  rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-6">
                  Register your account
                </h1>
                <form className="">
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="input input-bordered  w-full"
                      required
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Enter your PhotoURL"
                      className="input input-bordered  w-full"
                      required
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name='email'
                      placeholder="Enter your email"
                      className="input input-bordered  w-full"
                      required
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full"
                      required
                    />

                    
                   </div>

                   <div className="form-control mt-3">
                      <label className="label justify-start gap-4 cursor-pointer">
                      <input
                          type="checkbox"
                          
                          className="checkbox"
                        />
                        <span className="label-text">Accept Term & Conditions</span>
                        
                      </label>
                    </div>

                  <div className="form-control mt-6">
                    <button className="btn bg-[#403F3F] text-white w-full">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
