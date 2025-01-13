// import React, { useEffect, useState } from "react";
// import { request } from "@/api";
// import { useNavigate } from "react-router-dom";
// import Model from "../model/Model";
// import Rating from "@mui/material/Rating";
// import { PlusOutlined } from "@ant-design/icons";
// import { Image, Upload } from "antd";

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// export default function CompanyComponent() {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");
//   const [fileList, setFileList] = useState([
//     {
//       uid: "-1",
//       name: "image.png",
//       status: "done",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//       uid: "-2",
//       name: "image.png",
//       status: "done",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//       uid: "-3",
//       name: "image.png",
//       status: "done",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//       uid: "-4",
//       name: "image.png",
//       status: "done",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//       uid: "-xxx",
//       percent: 50,
//       name: "image.png",
//       status: "uploading",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//       uid: "-5",
//       name: "image.png",
//       status: "error",
//     },
//   ]);
//   const [data, setData] = useState({ products: [] });
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [modalData, setModalData] = useState(null);
//   const [detail, setDetail] = useState(null);
//   useEffect(() => {
//     request.get("/products?limit=4").then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   const handleModal = (item) => {
//     setModalData(item);
//     setShow(true);
//   };

//   const handleCloseModal = () => {
//     setShow(false);
//     setModalData(null);
//   };
//   const handleDetail = (item) => {
//     setDetail(false);
//   };
//   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
//   const uploadButton = (
//     <button
//       style={{
//         border: 0,
//         background: "none",
//       }}
//       type="button"
//     >
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </button>
//   );
//   return (
//     <main>
//       <div className="max-w-[1280px] px-4 m-auto">
//         <div className="mt-24 mb-24 flex flex-col">
//           <div className="flex justify-between items-start">
//             <div>
//               <div className="bg-[#FFD3AF] w-6 h-6"></div>
//               <p className="font-[Poppins] font-medium text-sm leading-5 pt-6">
//                 Company
//               </p>
//               <h2 className="font-[Poppins] font-semibold text-5xl leading-[58px] max-w-[684px] pt-5">
//                 Award-winning Company seen and used by millions around the
//                 world.
//               </h2>
//               <p className="font-[Poppins] font-normal text-base max-w-[719px] pt-6">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The Maker is a decentralized.
//               </p>
//             </div>
//           </div>
//           <div className="flex  justify-between gap-3 mt-[64px]">
//             {data.products.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-64 p-4 flex flex-col items-start  border border-stone-600	rounded-md"
//               >
//                 <img
//                   onClick={() => {
//                     handleModal(item);
//                     handleDetail(`/products/${item.id}`);
//                   }}
//                   src={item.thumbnail}
//                   alt={item.title}
//                   className="mb-4 p-1 bg-[#232536] rounded-md scale-95 cursor-pointer hover:scale-100 transition-transform"
//                 />
//                 <Upload
//                   action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//                   listType="picture-card"
//                   fileList={fileList}
//                   onPreview={handlePreview}
//                   onChange={handleChange}
//                 >
//                   {fileList.length >= 8 ? null : uploadButton}
//                 </Upload>
//                 {previewImage && (
//                   <Image
//                     wrapperStyle={{
//                       display: "none",
//                     }}
//                     preview={{
//                       visible: previewOpen,
//                       onVisibleChange: (visible) => setPreviewOpen(visible),
//                       afterOpenChange: (visible) =>
//                         !visible && setPreviewImage(""),
//                     }}
//                     src={previewImage}
//                   />
//                 )}
//                 <div className="flex justify-start flex-col items-start">
//                   <p className="font-[Poppins] text-start font-medium text-lg">
//                     {item.title}
//                   </p>
//                   <hr />
//                   <p className="text-xl">${item.price}</p>
//                   <Rating
//                     name="half-rating"
//                     defaultValue={2.5}
//                     precision={0.5}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {show ? (
//         <Model className="bg-[#ccc] p-10">
//           <div className="fixed bg-slate-100 p- w-56 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
//             <div className="flex flex-col p-4 gap-4">
//               <img
//                 className="bg-red-400"
//                 src={modalData?.thumbnail}
//                 alt="Modal Thumbnail"
//               />
//               <div className="flex justify-between">
//                 <button
//                   className="text-white py-3 px-5 rounded-md bg-[#232536]"
//                   onClick={() => setShow(false)}
//                 >
//                   Close
//                 </button>
//                 <button
//                   className="text-white py-3 px-5 rounded-md bg-[#232536]"
//                   onClick={() => navigate(`/products/${modalData.id}`)}
//                 >
//                   kirish
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Model>
//       ) : (
//         <></>
//       )}
//     </main>
//   );
// }
import React, { useEffect, useState } from "react";
import { request } from "@/api";
import { useNavigate } from "react-router-dom";
import Model from "../model/Model";
import Rating from "@mui/material/Rating";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function CompanyComponent() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const [data, setData] = useState({ products: [] });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    request.get("/products?limit=4").then((res) => {
      setData(res.data);
    });
  }, []);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleModal = (item) => {
    setModalData(item);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    setModalData(null);
  };

  const handleDetail = (path) => {
    navigate(path);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

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
                className="w-64 p-4 flex flex-col items-start  border border-stone-600 rounded-md"
              >
                <img
                  onClick={() => {
                    handleModal(item);
                    handleDetail(`/products/${item.id}`);
                  }}
                  src={item.thumbnail}
                  alt={item.title}
                  className="mb-4 p-1 bg-[#232536] rounded-md scale-95 cursor-pointer hover:scale-100 transition-transform"
                />
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                {previewImage && (
                  <Image
                    wrapperStyle={{
                      display: "none",
                    }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) =>
                        !visible && setPreviewImage(""),
                    }}
                    src={previewImage}
                  />
                )}
                <div className="flex justify-start flex-col items-start">
                  <p className="font-[Poppins] text-start font-medium text-lg">
                    {item.title}
                  </p>
                  <hr />
                  <p className="text-xl">${item.price}</p>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {show && (
        <Model className="bg-[#ccc] p-10">
          <div className="fixed bg-slate-100 p- w-56 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="flex flex-col p-4 gap-4">
              <img
                className="bg-red-400"
                src={modalData?.thumbnail || "https://via.placeholder.com/150"}
                alt="Modal Thumbnail"
              />
              <div className="flex justify-between">
                <button
                  className="text-white py-3 px-5 rounded-md bg-[#232536]"
                  onClick={handleCloseModal}
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
      )}
    </main>
  );
}
