import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "./Btn";
import Footer from "./Footer";
export default function Contact() {
  const Navigate = useNavigate();
  function Goback() {
    Navigate("/Formconnect");
  }
  function Gotohome() {
    Navigate("/");
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[80vh] ">
      <h1 className="text-2xl text-center ">
        Interested in collaborating with me?
      </h1>
      <p className="fontmono font-bold text-xl">I'm always open to work</p>
      <div className="flex gap-2">
        <Btn
          element={Goback}
          contain={"Start a conversation"}
          color={"bg-pink-800"}
        />
        <Btn element={Gotohome} contain={"Go to Home"} color={"bg-blue-600"} />
      </div>
      <Footer />
    </div>
  );
}
