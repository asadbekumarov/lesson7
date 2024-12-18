import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "../../assets/images/hero-img/image.png";
import Bg from "../../assets/images/hero-img/bg.png";
import Logoipsum from "../../assets/images/hero-img/Logo.png";
import Logoipsum2 from "../../assets/images/hero-img/Logo2.png";
import Logoipsum3 from "../../assets/images/hero-img/Logo3.png";
import Logoipsum4 from "../../assets/images/hero-img/Logo4.png";
import Logoipsum5 from "../../assets/images/hero-img/Logo5.png";
import Bt from "../../assets/images/hero-img/btn.png";

function Hero() {
  return (
    <>
      <main className="bg-[#232536]">
        <div className="max-w-[1280px] px-4 m-auto">
          <div className="flex justify-between items-center relative">
            <div className="flex flex-col gap-7">
              <div className="bg-[#303242] w-6 h-6"></div>
              <h1 className="text-white font-[Poppins] font-semibold text-[56px] leading-[68px] max-w-[624px]">
                Transform Your Idea Into Reality with Finsweet
              </h1>
              <p className="font-[Poppins] font-normal text-base leading-6 text-[#a7a8af] max-w-[528px]">
                The entire Finsweet team knows what's good with Webflow and you
                can too with 1 week and a good attitude.
              </p>
              <button className="max-w-[219px] relative bg-[#444cfc] flex gap-4 py-5 pl-8 font-[Poppins] text-white text-base leading-6">
                Request Quote
                <IoIosArrowRoundForward className="text-lg pr-8 text-white" />
                <img className="absolute left-0 top-0" src={Bt} alt="bt-img" />
              </button>
            </div>
            <img className="mt-24 z-10" src={Image} alt="Person-img" />
            <img
              className="absolute top-24 right-[-20px] z-0"
              src={Bg}
              alt="Bg-img"
            />
          </div>
          <div className="flex justify-between items-center mt-8 pb-8">
            <span>
              <p className="font-[Poppins] font-medium text-sm leading-5 text-[#a7a8af]">
                Our Clients
              </p>
              <h4 className="font-[Poppins] font-medium text-lg leading-5 text-[#fff]">
                We've Worked with
              </h4>
            </span>
            <img src={Logoipsum} alt="Logoipsum-img" />
            <img src={Logoipsum2} alt="Logoipsum-img" />
            <img src={Logoipsum3} alt="Logoipsum-img" />
            <img src={Logoipsum4} alt="Logoipsum-img" />
            <img src={Logoipsum5} alt="Logoipsum-img" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
