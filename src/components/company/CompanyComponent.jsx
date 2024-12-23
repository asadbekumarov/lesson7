import React, { useEffect, useState } from "react";
import { request } from "@/api";
import { useNavigate } from "react-router-dom";
// import { log } from "console";
export default function CompanyComponent() {
  const [data, setData] = useState({ products: [] });
  const navigate = useNavigate();
  useEffect(() => {
    request.get("/products?limit=4").then((res) => {
      setData(res.data);
      console.log(res.data.products);
    });
  }, []);
  // console.log(data.products);
  return (
    <main>
      <div className="max-w-[1280px] px-4 m-auto">
        <div className="mt-24 mb-24 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <div className="bg-[#FFD3AF] w-6 h-6"></div>
              <p className="font-[Poppins] font-medium text-sm leading-5 pt-6">
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
          </div>
          <div className="flex  justify-between gap-3 mt-[64px]">
            {data.products.map((item) => (
              <div
                key={item.id}
                className="w-64 p-4 flex flex-col items-start  border border-stone-600	rounded-md"
              >
                <img
                  onClick={() => {
                    console.log(`Navigating to /products/${item.id}`);
                    navigate(`/products/${item.id}`);
                  }}
                  src={item.thumbnail}
                  alt={item.title}
                  className="mb-4 p-1 bg-[#232536] rounded-md"
                />
                <div className="flex justify-start flex-col items-start">
                  <p className="font-[Poppins] text-start font-medium text-lg">
                    {item.title}
                  </p>
                  <hr />
                  <p className="text-xl">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
