import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Bt from "../../assets/images/hero-img/btn.png";

function Service() {
  return (
    <>
      <main className="bg-[#ffe6d2]">
        <div className="max-w-[1280px] px-4 m-auto">
          <div className="flex justify-between items-center">
            <div className="mb-24">
              <p className="font-[Poppins] font-medium text-sm leading-5 text-[#232536] pt-24">
                Our Services
              </p>
              <h2 className="font-[Poppins] font-semibold text-5xl leading-[68px] text-[#232536] max-w-[622px] pt-3">
                We Build Software Solutionthat Solve Clients Business Challenges
              </h2>
              <p className="font-[Poppins] font-normal text-base leading-6 text-[#232536] max-w-[624px] pt-6">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic.
              </p>
              <button className="max-w-[219px] relative bg-[#444cfc] flex gap-4 py-5 mt-10 pl-8 font-[Poppins] text-white text-base leading-6">
                Request Quote
                <IoIosArrowRoundForward className="text-lg pr-8 text-white" />
                <img className="absolute left-0 top-0" src={Bt} alt="bt-img" />
              </button>
            </div>
            <div>
              <h4 className="pb-4 font-[Poppins] font-semibold text-[#232536] leading-9 max-w-[294px] text-2xl">
                Technical support
              </h4>
              <h4 className="font-[Poppins] font-semibold text-[#232536] leading-9 max-w-[294px] text-2xl">
                Development
              </h4>
              <h4 className="pt-4 font-[Poppins] font-semibold text-[#232536] leading-9 max-w-[294px] text-2xl">
                AWS/Azure
              </h4>
              <h4 className="pt-4 font-[Poppins] font-semibold text-[#232536] leading-9 max-w-[294px] text-2xl">
                Consulting
              </h4>
              <h4 className="pt-4 font-[Poppins] font-semibold text-[#232536] leading-9 max-w-[294px] text-2xl">
                Information Technology
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Service;
