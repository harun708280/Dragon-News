import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-7/12 mx-auto flex justify-center items-center">
      <div className=" px-8 pb-8 w-full  ">
        
        
        <div className="hero w-9/12 mx-auto bg-base-100 shadow-2xl rounded-lg">
          <div className="hero-content flex-col py-7  lg:flex-row-reverse">
            <div className=" w-full bg-white  rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Login to Your Account</h1>
              <form className="">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#403F3F] text-white w-full">Login</button>
                </div>
              </form>
              <p className="text-center text-sm my-5">Dont’t Have An Account ? <span className="text-red-700 "><Link to='/register'>Register</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
