import React from "react";
import { useMemo } from "react";
export default function ChartDOW({
  day,
  amount,
  maxAmount,
  current,
  setCurrent,
}) {
  const height = useMemo(
    () => calcHeightPercent(amount, maxAmount),
    [amount, maxAmount]
  );
  return (
    <div onClick={() => setCurrent({ day, amount })} className="h-full flex-1">
      <div className="h-full flex flex-col justify-end">
        <div
          className={`${
            current ? "bg-cyan" : "bg-softRed"
          } ease-in-out duration-200 rounded relative group`}
          style={{
            height: height + "%",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 rounded duration-200 ease-in-out cursor-pointer group-hover:opacity-30"></div>
          {/* tag */}
          <div className="text-white bg-darkBrown p-1 px-2 rounded text-[13px] text-center font-bold absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 duration-200 ease-in-out group-hover:opacity-100">
            ${amount}
          </div>
        </div>
      </div>
      <span className="text-paleOrange block mt-1 text-center">{day}</span>
    </div>
  );
}

function calcHeightPercent(amount, maxAmount) {
  return (amount / maxAmount) * 100;
}
