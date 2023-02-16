import React from "react";
import { useState, useEffect, useMemo } from "react";
import ChartDOW from "./ChartDOW";
export default function Chart() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch("/src/data.json");
        const data = await response.json();
        setData(data);
        setCurrent(data[2]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const maxAmount = useMemo(() => getMax(data), [data]);
  function getMax(arr) {
    const sorted = [...arr].sort((a, b) => {
      return b.amount - a.amount;
    });
    return sorted[0];
  }
  if (loading) {
    return <div>Loading!</div>;
  }
  if (error) {
    return <div className="text-red-800">Something Went Wrong</div>;
  }
  return (
    <div className="bg-white p-5 rounded-lg w-full mt-4">
      <h1 className="font-bold text-2xl text-darkBrown">
        Spending - Last 7 days
      </h1>
      <div className="flex gap-3 items-center h-[230px] bg-white py-12 lg:h-[210px]">
        {data.map(({ day, amount }) => (
          <ChartDOW
            key={day}
            day={day}
            amount={amount}
            maxAmount={maxAmount.amount}
            current={day === current.day}
            setCurrent={setCurrent}
          ></ChartDOW>
        ))}
      </div>
      <hr className="border-t-paleOrange opacity-40" />
      <div className="flex justify-between mt-6">
        <div>
          <p className="text-paleOrange">Total this month</p>
          <span className="text-3xl font-bold text-darkBrown block mt-1">
            $478.33
          </span>
        </div>
        <div className="self-end flex flex-col items-end">
          <span className="text-darkBrown font-bold">+2.4%</span>
          <p className="text-paleOrange">from last month</p>
        </div>
      </div>
    </div>
  );
}
