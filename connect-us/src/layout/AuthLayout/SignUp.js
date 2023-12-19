import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-80 w-72 md:w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6">Account Set-up</h1>
        <form>
          <div className="flex flex-wrap md:space-x-9">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
              className="border border-blue-400 w-full py-2  md:w-[180px] mt-4 px-10 rounded-md outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
              className="border border-blue-400 w-full py-2 md:w-[180px] mt-4 px-10 rounded-md outline-none"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
            className="border border-blue-400 w-full py-2  mt-4 px-10 rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            className="border border-blue-400 w-full py-2  mt-4 px-10 rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            className="border border-blue-400 w-full py-2 mt-4 px-10 rounded-md outline-none"
          />

          <button
            type="submit"
            className=" w-full py-2  mt-4 px-10 rounded-md bg-orange-500 text-white font-bold hover:bg-white hover:border hover:border-black hover:text-black"
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
};

export default SignUp;
