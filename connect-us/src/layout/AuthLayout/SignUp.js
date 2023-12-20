import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  // const [id, idChange] = useState("");
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handle =(e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const navigate = useNavigate();

  const validate = () => {
    let proceed = true;
    let errorMessage = "Please enter your ";
    if (data.firstName === null || data.firstName === "") {
      proceed = false;
      errorMessage += "first Name,";
    }
    if (data.lastName === null || data.lastName === "") {
      proceed = false;
      errorMessage += " last Name,";
    }
    if (data.phone === null || data.phone === "") {
      proceed = false;
      errorMessage += " phone Number,";
    }
    if (data.email === null || data.email === "") {
      proceed = false;
      errorMessage += "email Address and ";
    }
    if (data.password === null || data.password === "") {
      proceed = false;
      errorMessage += "password";
    }
    if (!proceed) {
      toast.warning(errorMessage);
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0]+\.[A-Za-z]+$/.test(data.email)) {
    } else {
      proceed = false;
      toast.warning("Please enter a valid email address!");
    }
    return proceed;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let register = { data };
    if (validate()) {
      axios.post("http://localhost:3000/auth/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: data.password
      })
        .then((Response) => {
          toast.success("Successfully registered");
          navigate("/DashboardLayout");
        })
        .catch((err) => {
          toast.error("Error registering");
        });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-80 w-72 mx-auto mt-28 md:w-[400px]">
        <ToastContainer />
        <h1 className="text-3xl font-bold text-center mb-6">Account Set-up</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap md:space-x-9">
            <input
              value={data.firstName}
              onChange={(e) => handle(e)}
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name"
              className="border border-blue-400 w-full py-2  md:w-[180px] mt-4 px-5 rounded-md outline-none"
            />
            <input
              value={data.lastName}
              onChange={(e) => handle(e)}
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last name"
              className="border border-blue-400 w-full py-2 md:w-[180px] mt-4 px-5 rounded-md outline-none"
            />
          </div>

          <input
            value={data.phone}
            onChange={(e) => handle(e)}
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="border border-blue-400 w-full py-2  mt-4 px-5 rounded-md outline-none"
          />
          <input
            value={data.email}
            onChange={(e) => handle(e)}
            id="email"
            type="text"
            name="email"
            placeholder="Enter email address"
            className="border border-blue-400 w-full py-2  mt-4 px-5 rounded-md outline-none"
          />
          <input
            value={data.password}
            onChange={(e) => handle(e)}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            className="border border-blue-400 w-full py-2 mt-4 px-5 rounded-md outline-none"
          />

          <button
            className=" w-full py-2  mt-4 px-5 rounded-md bg-orange-500 text-white font-bold hover:bg-white hover:border hover:border-black hover:text-black"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span>
            <Link
              to="/Login"
              className="text-start text-blue-500 hover:underline"
            >
              Login
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}
export default SignUp;
