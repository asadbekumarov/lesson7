import React, { useEffect, useState } from "react";
import { request } from "@/api";
import { useNavigate } from "react-router-dom";
import Model from "../model/Model";
export default function CompanyComponent() {
  const [data, setData] = useState({ products: [] });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    request.get("/products?limit=4").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleModal = (item) => {
    setModalData(item);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    setModalData(null);
  };
  const handleDetail = (item) => {
    setDetail(false);
  };
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
                    handleModal(item);
                    handleDetail(`/products/${item.id}`);
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
      {show ? (
        <Model className="bg-[#ccc] p-10">
          <div className="fixed bg-slate-100 p- w-56 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="flex flex-col p-4 gap-4">
              <img
                className="bg-red-400"
                src={modalData?.thumbnail}
                alt="Modal Thumbnail"
              />
              <div className="flex justify-between">
                <button
                  className="text-white py-3 px-5 rounded-md bg-[#232536]"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
                <button
                  className="text-white py-3 px-5 rounded-md bg-[#232536]"
                  onClick={() => navigate(`/products/${modalData.id}`)}
                >
                  kirish
                </button>
              </div>
            </div>
          </div>
        </Model>
      ) : (
        <></>
      )}
    </main>
  );
}
