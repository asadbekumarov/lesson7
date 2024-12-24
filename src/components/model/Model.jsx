import React from "react";

const Model = ({ children }) => {
  return (
    <>
      <div className="bg-slate-500">
        <div className="w-96">{children}</div>
      </div>
    </>
  );
};

export default Model;
