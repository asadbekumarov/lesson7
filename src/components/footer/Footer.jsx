import React from "react";
import Shapes from "../../assets/images/footer/shapes.png";
import Shapes2 from "../../assets/images/footer/shapes2.png";
import Logo from "../../assets/images/footer/Logo.svg";
import Facebook from "../../assets/images/footer/facebook.svg";
import twitter from "../../assets/images/footer/twitter.svg";
import Instagram from "../../assets/images/footer/instagram.svg";
import linkedin from "../../assets/images/footer/linkedin.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="max-w-[1280px] px-4 m-auto">
          <div>
            <img src={Shapes} alt="" />
            <div className="flex justify-between mt-8">
              <div>
                <h2 className="font-[Poppins] font-semibold text-5xl leading-[58px] text-[#232536] max-w-[452px]">
                  Let's make something special
                </h2>
                <h4 className="font-[Poppins] font-semibold text-2xl leading-6 mt-10">
                  Let's talk! 🤙
                </h4>
                <p className="font-[Poppins] font-medium text-lg leading-7 text-[#232536] mt-7">
                  020 7993 2905
                </p>
                <p className="font-[Poppins] font-medium text-lg leading-7 text-[#232536] mt-1 pb-4">
                  hi@finsweet.com
                </p>
                <hr />
              </div>
              <div className="flex justify-between gap-[60px]">
                <ul>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Home
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Service
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Company
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Career{" "}
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    News
                  </li>
                </ul>
                <ul>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Service
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Technical support
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Testing
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Development
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    AWS/Azure{" "}
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Consulting
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Information Technology
                  </li>
                </ul>
                <ul>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Resourses
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    About Us
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Testimonial
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Privacy Policy
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Terms of use
                  </li>
                  <li className="font-[Poppins] text-sm leading-5 text-[#232536] cursor-pointer hover: text-base hover:font-semibold  leading-7">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="max-w-[206px] font-[Poppins] font-medium text-sm leading-5 pt-4 mb-16 text-[#232536]">
                DLF Cybercity, Bhubaneswar, India, &52050
              </p>
              <span className="flex justify-between gap-2">
                <img src={Shapes2} alt="" />
                <p className="font-[Poppins] text-base text-2xl">Contact Us</p>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#ffe6d2]">
          <div className="max-w-[1280px] px-4 m-auto ">
            <div className="flex  justify-between">
              <div className="flex items-center gap-[42px]">
                <img className="py-7" src={Logo} alt="Logo-png" />
                <p className="font-[Poppins] fonr-medium text-base leading-6">
                  ©2021 Finsweet
                </p>
              </div>
              <div className="flex gap-7">
                <img className="w-4" src={Facebook} alt="" />
                <img className="w-4" src={twitter} alt="" />
                <img className="w-4" src={Instagram} alt="" />
                <img className="w-4" src={linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
