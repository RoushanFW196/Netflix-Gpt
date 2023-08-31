import React, { useState } from "react";
import Header from "./Header";
import { openNotificationWithIcon } from "../utils/commonfunction";
import axios from "axios";
import { validatefields } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Auth } from "../utils/firebase.config";
const initialValues = {
  email: "",
  password: "",
  full_name: "",
};

const Login = () => {
  const [logindata, setLogindata] = useState(initialValues);
  const [isSigninForm, setisSigninForm] = useState(true);
  const [errormessage, setErrorMessage] = useState({});
  const toggleSignin = () => {
    setisSigninForm(!isSigninForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogindata({ ...logindata, [name]: value });
  };

  const handlelogin = async (data) => {
    const message = validatefields(data);
    setErrorMessage(message);

    if (
      message.emailerror != "" ||
      message.passworderror != "" ||
      message.nameerror != ""
    )
      return;

    if (isSigninForm) {
      // signin logic
      signInWithEmailAndPassword(Auth, logindata.email, logindata.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          if (user.accessToken) {
            openNotificationWithIcon(
              "success",
              "Congratulations, You have successfully Sign In.",
              3
            );
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode) {
            openNotificationWithIcon("error", errorMessage, 3);
          }
        });
    } else {
      // signup logic

      createUserWithEmailAndPassword(Auth, logindata.email, logindata.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          if (user.accessToken) {
            openNotificationWithIcon(
              "success",
              "Congrats, You have successfully Registered.",
              3
            );
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode) {
            openNotificationWithIcon("error", errorMessage, 3);
          }
        });
    }

    // const response = await axios.post(
    //   `http://localhost:1200/user/signin`,
    //   data,
    //   {
    //     headers: {
    //       crossorigin: "true",
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const respdata = await response["data"];
    // if (respdata["data"]) {
    //   openNotificationWithIcon(
    //     "success",
    //     "Congrats , You have successfully signed up.",
    //     3
    //   );
    // }
    // console.log("respdata", respdata);
  };

  return (
    <div>
      <Header />
      <div className="w-3/12 absolute bg-black opacity-80 mx-auto my-40  z-100  right-0 left-0 text-white h-[600px]">
        <form
          className="w-full max-w-sm my-5"
          onSubmit={(e) => {
            e.preventDefault();

            handlelogin(logindata);
          }}
        >
          <h2 className="font-bold text-3xl py-4 px-14">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSigninForm && (
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-2/3 m-auto">
                <input
                  className="bg-gray-900 appearance-none border-2 border-gray-200 text-white rounded w-full py-2 px-4  leading-tight "
                  id="name"
                  name="full_name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  onChange={handleChange}
                  value={logindata.full_name}
                />
                <p className="text-red-500">{errormessage.nameerror}</p>
              </div>
            </div>
          )}

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3 m-auto">
              <input
                className="bg-gray-900 appearance-none border-2 border-gray-200 text-white rounded w-full py-2 px-4  leading-tight "
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={logindata.email}
              />
              <p className="text-red-500">{errormessage.emailerror}</p>
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3 m-auto">
              <input
                className="bg-gray-900 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white leading-tight"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                onChange={handleChange}
                value={logindata.password}
              />
              <p className="text-red-500">{errormessage.passworderror}</p>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-2/3 m-auto">
              <button
                className="shadow bg-[#e50914] w-full  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                {isSigninForm ? "Sign In" : "Sign Up"}
              </button>
              <div className="flex justify-between">
                <span>
                  <input type="checkbox" />
                  Remember Me
                </span>

                <span>Need help?</span>
              </div>
            </div>
          </div>

          <div className="p-1 mx-16 my-20 py-10">
            {!isSigninForm ? (
              <h4 className="" onClick={toggleSignin}>
                Already Registered?
                <span className="text-white text-base">
                  <a href="/signup">Sign In</a>
                </span>
              </h4>
            ) : (
              <h4 className="" onClick={toggleSignin}>
                New to Netflix?
                <span className="text-white text-base">
                  <a href="/signup">Sign up now</a>
                </span>
              </h4>
            )}

            <p className="text-centre text-xs text-[#8c8c8c]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<a>Learn more</a>
            </p>
          </div>
        </form>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="No Img"
      />
    </div>
  );
};

export default Login;
