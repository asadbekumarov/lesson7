import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/header/Logo.svg";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="bg-[#232536] flex justify-center flex-col items-center p-8 w-96 px-4 rounded-lg">
        <img className="py-7" src={Logo} alt="Logo-png" />
        <div className="flex justify-between gap-3 py-4">
          <button
            className="text-white bg-[#444cfc] py-1 px-2  rounded-xl font-[Poppins] font-medium text-base"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
          <button
            className="text-white bg-[#444cfc] py-1 px-2  rounded-xl font-[Poppins] font-medium text-base"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
        <div>
          <p className="text-white  font-[Poppins] font-medium text-base">
            Email
          </p>
          <input className="bg-slate-400 mb-3" type="text" />
          <p className="text-white  font-[Poppins] font-medium text-base">
            Password
          </p>
          <input className="bg-slate-400 mb-3" type="password" />
        </div>
        <button className="text-white bg-[#444cfc] py-2 px-5 rounded-xl font-[Poppins] font-medium text-base">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
