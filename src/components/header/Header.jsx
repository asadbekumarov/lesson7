import React from "react";
import Logo from "../../assets/images/header/Logo.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="bg-[#232536] py-7">
        <div className="max-w-[1280px] px-4 m-auto">
          <div className="flex justify-between">
            <img src={Logo} alt="Logo-png" />
            <div>
              <ul className="flex gap-8">
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base cursor-pointer">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base cursor-pointer	">
                  <NavLink
                    to={"/company"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Company
                  </NavLink>
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base cursor-pointer	">
                  <NavLink
                    to={"/career"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Career
                  </NavLink>
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  <NavLink
                    to={"/blog"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  <NavLink
                    to={"/contact us"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <button className="flex items-center gap-2 text-[#FFD3AF] font-[Poppins] font-medium text-base hover:text-[#ffb06f]">
                  <NavLink
                    to={"/career"}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#a7a8af]"
                    }
                  >
                    Clone project{" "}
                  </NavLink>
                  <IoIosArrowRoundForward className="text-lg text-white" />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
