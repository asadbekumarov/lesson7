import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { request } from "@/api";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios;
    request
      .get(`/products/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);
  console.log(data);
  return (
    <div>
      <div className="max-w-[1280px] px-4 m-auto">
        <div className="bg-[#efefef] rounded-lg mt-28 mb-28 p-5">
          <h2 className="text-2xl font-semibold">{data?.title}</h2>
          <div className="flex justify-between">
            <div className="flex items-center bg-white rounded-xl my-3">
              {data?.images?.map((url) => (
                <div className="flex flex-col" key={url}>
                  <img className="w-36 p-4" src={url} alt="" />
                  <img className="w-36 p-4" src={url} alt="" />
                  <img className="w-36 p-4" src={url} alt="" />
                </div>
              ))}
              <div>
                <img
                  className="w-[500px] rounded-lg"
                  src={data?.thumbnail}
                  alt=""
                />
              </div>
            </div>
            <div className="border-[#000] border-[5px] rounded p-2 w-96 px-5">
              <div className=" py-4 px-7 rounded-xl">
                <p className="text-2xl ">Karta bilan tolov qiling</p>
                <p className="text-5xl font-semibold text-[#232536] ">
                  ${data?.price}
                </p>
              </div>
              <div className="flex justify-between items-center border-[#000] border-[2px] rounded mb-2">
                <button className=" text-black p-8 text-[60px]">-</button>
                <h1 className="text-[60px] text-black p-8">1</h1>
                <button className=" text-black p-8 text-[60px]">+</button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <button className="bg-slate-600 text-white py-2 px-8 rounded-md">
                  1 klikda xarid qilish
                </button>
                <button className="bg-green-600 text-white py-2 px-8 rounded-md">
                  Savatga qo'shish
                </button>
                <div className="py-4 px-7">
                  <h3 className="text-2xl">Sotuvda 200ta bor</h3>
                  <h3 className="text-xl">Bu hafta 20 kishi sotib oldi</h3>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl font-medium">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
