"use client";
import "./loading.css"
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <span className="relative w-[82px] h-[18px]">
        <span className="absolute left-1/2 top-0 w-[16px] h-[16px] bg-[#3b82f6] rounded-full animate-jump"></span>
        <span className="absolute left-1/2 top-full w-[16px] h-[16px] bg-transparent text-white shadow-[32px_-20px_#3b82f6,-32px_-20px_#3b82f6] animate-split"></span>
      </span>
    </div>
  );
};

export default Loader;
