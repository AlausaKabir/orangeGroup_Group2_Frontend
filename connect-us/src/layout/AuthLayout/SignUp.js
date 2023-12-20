import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // const [id, idChange] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const navigate = useNavigate();

  const validate = () => {
    let proceed = true;
    let errorMessage = "Please enter your ";
    if (firstName === null || firstName === "") {
      proceed = false;
      errorMessage += "first Name,";
    }
    if (lastName === null || lastName === "") {
      proceed = false;
      errorMessage += " last Name,";
    }
    if (phoneNumber === null || phoneNumber === "") {
      proceed = false;
      errorMessage += " phone Number,";
    }
    if (email === null || email === "") {
      proceed = false;
      errorMessage += "email Address and ";
    }
    if (password === null || password === "") {
      proceed = false;
      errorMessage += "password";
    }
    if (!proceed) {
      toast.warning(errorMessage);
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0]+\.[A-Za-z]+$/.test(email)) {
    } else {
      proceed = false;
      toast.warning("Please enter a valid email address!");
    }
    return proceed;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let register = { firstName, lastName, email, password, phoneNumber };
    if (validate()) {
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(register),
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              placeholder="First name"
              className="border border-blue-400 w-full py-2  md:w-[180px] mt-4 px-5 rounded-md outline-none"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="lastName"
              placeholder="Last name"
              className="border border-blue-400 w-full py-2 md:w-[180px] mt-4 px-5 rounded-md outline-none"
            />
          </div>

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="border border-blue-400 w-full py-2  mt-4 px-5 rounded-md outline-none"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Enter email address"
            className="border border-blue-400 w-full py-2  mt-4 px-5 rounded-md outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter password"
            className="border border-blue-400 w-full py-2 mt-4 px-5 rounded-md outline-none"
          />

          <button
            type="submit"
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
