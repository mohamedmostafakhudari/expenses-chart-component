import { useState } from "react";
import Chart from "./components/Chart";
import Balance from "./components/Balance";
function App() {
  return (
    <main className="font-body bg-[#f7e9dc] relative">
      <div className="container mx-auto min-h-screen grid items-center px-4 max-w-[450px] lg:items-center">
        <div className="">
          <Balance />
          <Chart />
        </div>
      </div>
      <footer className="absolute bg-softRed bottom-0 w-full text-center text-white py-3">
        Made With &lt;3 by{" "}
        <span className="text-lg text-black font-bold">Mohamed Mostafa</span>
      </footer>
    </main>
  );
}

export default App;
