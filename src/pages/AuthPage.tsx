import React, { useState } from "react";
import WelcomeImg from "../assets/bg-login.jpg";
import LoginForm from "../components/molecules/Auth/LoginForm/LoginForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full overflow-hidden">
        <img
          src={WelcomeImg}
          alt="Welcome Picture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-7/12 overflow-scroll overflow-x-hidden py-12 relative">
        <div className="w-5/6 sm:w-1/2 mx-auto text-center lg:px-2">
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {showLogin ? "Welcome" : "Register"} to G.M.S!!
            </h2>
            <p className="mt-3 text-gray-800">
              {showLogin ? "Are you new?" : "Do you have an account?"}{" "}
              <a href="#" className="text-blue-400" onClick={toggleLogin}>
                {showLogin ? "Sign up" : "Sign In"}
              </a>
            </p>
          </div>

          <div className="py-12">{showLogin && <LoginForm />}</div>
          {/* <RegisterForm toogleLogin={toogleLogin} /> */}

          <p className="text-sm my-12 text-center">
            Created by{" "}
            <a
              className="hover:font-semibold"
              href="https://github.com/jorgelhd94"
              target="_blank"
              rel="noreferrer"
            >
              <b>JCode</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
