import React from "react";
import { useNavigate } from "react-router-dom";
export default function Projects() {
  const Navigate = useNavigate();
  function Goback() {
    Navigate("/");
  }
  return (
    <div className="h-[50vh] flex flex-col py-16 justify-center items-center">
      <h1 className="text-5xl animate-bounce">Coming Soon Stay Tuned</h1>
      <button
        onClick={Goback}
        className="bg-blue-600 px-4 h-[50px] rounded-full text-white tracking-wide mt-12"
      >
        Go back
      </button>
    </div>
  );
}
