import React from "react";
import Navbar from "@/Components/Navbar";
import grid from "../public/grid.svg";

const Home = () => {
  return (
    <>
      <header
        style={{
          backgroundImage: "url('/grid.svg')",
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-[#111111]"
      >
        <div className="h-[88%]">
          <Navbar />

          <div className="flex items-center justify-center h-full ">
            <span className="bg-clip-text text-transparent font-space text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer ">
              TECH IN MOMENTUM
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
