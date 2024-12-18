import React from "react";
import Logo from "../../assets/images/header/Logo.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
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
                  Home
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  Service
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  Company
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  Career
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  Blog
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  Contact us
                </li>
                <li className="text-[#a7a8af] font-[Poppins] font-medium text-base hover:text-white cursor-pointer	">
                  Contact us
                </li>
                <button className="flex items-center gap-2 text-[#FFD3AF] font-[Poppins] font-medium text-base hover:text-[#ffb06f]">
                  Clone project
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
