"use client"
import React from "react";
const Loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
    <div
      className="animate-spin w-[35px] h-[35px]">
      <div className="h-full w-full border-4 border-t-purple-500
       border-b-purple-700 rounded-full">
      </div>
    </div>
  </div>
  );
};

export default Loading;
