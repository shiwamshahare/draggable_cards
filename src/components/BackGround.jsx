import React from "react";

const BackGround = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <div className="h-20 w-full flex justify-center font-semibold items-center text-[2vw] text-zinc-400 p-12">
        Document
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[11vw] leading-none tracking-tight font-bold text-slate-200">
        Docs.
      </h1>
    </div>
  );
};

export default BackGround;
