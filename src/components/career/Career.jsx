import React from "react";
import Careers from "../../assets/images/career/image.png";
function Career() {
  return (
    <>
      <main>
        <div className="max-w-[1280px] px-4 m-auto">
          <div className="text-center flex flex-col items-center mb-24">
            <p className="font-[Poppins] font-medium  text-sm leading-5 pt-6">
              CAREER AT FINSWEET
            </p>
            <h2 className="font-[Poppins] font-semibold text-5xl leading-[58px] max-w-[684px] pt-6">
              We hired people who are Always Passionate about what they do
            </h2>
            <p className="font-[Poppins] font-normal text-base max-w-[719px] pt-6">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw .
            </p>
            <img className="mt-[64px]" src={Careers} alt="" />
            <p className="font-[Poppins] font-medium text-lg mt-[80px]">
              See Our open positions
            </p>
            <p className="mt-4">👇</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Career;
