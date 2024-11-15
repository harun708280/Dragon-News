import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../Firebase/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { registerEmailAndPassword,updateProfiles } = useContext(AuthUserContext);
  const [error, setError] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    checkbox: "",
  });
  const [regError,setRegError]=useState('')
  const navigate =useNavigate()

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;
    setError({
      name: "",
      email: "",
      photo: "",
      password: "",
      checkbox: "",
    });

    if (name.length < 6) {
      return setError((prevError)=>({
        ...prevError ,name: "Invalid Name minimum 6 character"
      }))
    }
    if (!photo) {
      return setError((prevError)=>({
        ...prevError ,photo: "Invalid Photo"
      }));
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      return setError((prevError)=>({
        ...prevError,email: "Please enter a valid email address."
      }))
    }

    if (password.length < 6) {
      return setError((prevError)=>({
        ...prevError,password: "Inter minimum character Password"
      }))
    }
    if (!checkbox) {
      return toast.error("Please accept the terms and conditions.");
    }

    registerEmailAndPassword(email, password)
      .then((result) => {
        updateProfiles(name,photo)
        toast.success("SuccessFully Registration Done");
        e.target.reset();
        navigate('/')
      })
      .catch((error) => {
        
        switch(error.code){
          case "auth/email-already-in-use":
            setError((prevError)=>({
              ...prevError,email:'This email is already in use. Please use a different email.'
            }))
            break;
          
          case 'auth/invalid-email':
            setError((prevError)=>({
              ...prevError,email:'Please enter a valid email address.'
            }))
            break ;
          
          case "auth/weak-password":
            setError((prevError)=>({
              ...prevError, password: 'Password should be at least 6 characters long.'
            }))
            break
          
          default :
           toast.error('Something Went Wrong !Please try again later. ')
           break;
        }
      });
  };
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
                <form onSubmit={handleRegisterSubmit} className="">
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="input input-bordered  w-full"
                    />
                    {error.name && <p className="text-red-500">{error.name}</p>}
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
                    />
                    {error.photo && (
                      <p className="text-red-500">{error.photo}</p>
                    )}
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered  w-full"
                    />
                    {error.email && (
                      <p className="text-red-500">{error.email}</p>
                    )}
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
                    />
                    {error.password && (
                      <p className="text-red-500">{error.password}</p>
                    )}
                  </div>

                  <div className="form-control mt-3">
                    <label className="label justify-start gap-4 cursor-pointer">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="checkbox"
                      />
                      <span className="label-text">
                        Accept Term & Conditions
                      </span>
                    </label>
                  </div>

                  <div className="form-control mt-6">
                    <button  className="btn bg-[#403F3F] text-white w-full">
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
