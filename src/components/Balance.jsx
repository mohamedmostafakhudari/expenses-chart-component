import React from "react";

export default function Balance() {
  return (
    <div className="bg-softRed p-5 rounded-[14px] flex justify-between items-center">
      <div className="text-white">
        <p>My balance</p>
        <span className="font-bold text-3xl block mt-2">$921.48</span>
      </div>
      <div className="">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="max-h-[40px] lg:max-h-[50px]"
        />
      </div>
    </div>
  );
}
