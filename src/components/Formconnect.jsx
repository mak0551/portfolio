import React from "react";
import Footer from './Footer';
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

export default function Formconnect() {
  const Navigate = useNavigate();
  function Goback(){
    Navigate('/Contact')
  }
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <form
        action=""
        className="flex flex-col  rounded-xl border border-pink-800 p-8"
      >
        <h5 className="form">Enter your name</h5>
        <input className="input" type="text" />
        <h5 className="form">Enter your email</h5>
        <input className="input" type="email" />
        <h5 className="form">Your interest</h5>
        <input className="input" type="text" />
        <input
          type="submit"
          value={"submit"}
          className="bg-pink-800 mt-4 rounded-2xl text-white leading-loose mb-2"
        />
      <Btn element={Goback} contain={"Go Back"} color={"bg-blue-600"} height={'h-[30px]'} />
      </form>
      <Footer />
    </div>
  );
}
