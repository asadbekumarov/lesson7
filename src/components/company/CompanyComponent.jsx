import React from "react";
import Img from "../../assets/images/company/Shapes (1).png";
import Humans from "../../assets/images/company/image.png";
import Shapes from "../../assets/images/company/Shapes (2).png";

export default function CompanyComponent() {
  return (
    <>
      <main>
        <div className="max-w-[1280px] px-4 m-auto">
          <div className="mt-24 mb-24 flex justify-between flex-col">
            <div className="flex justify-between items-start">
              <div>
                <div className="bg-[#FFD3AF] w-6 h-6"></div>
                <p className="font-[Poppins] font-medium  text-sm leading-5 pt-6">
                  Company
                </p>
                <h2 className="font-[Poppins] font-semibold text-5xl leading-[58px] max-w-[684px] pt-5">
                  Award-winning Company seen and used by millions around the
                  world.
                </h2>
                <p className="font-[Poppins] font-normal text-base max-w-[719px] pt-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The Maker is a decentralized.
                </p>
              </div>
              <img src={Img} alt="Img" />
            </div>
            <div className="flex justify-between gap-3 mt-[64px] relative z-50">
              <img src={Humans} alt="" />
              <img src={Humans} alt="" />
              <img src={Humans} alt="" />
              <img
                className="absolute right-[-42px] top-[-24px] z-[-99]"
                src={Shapes}
                alt="shapes-img"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
