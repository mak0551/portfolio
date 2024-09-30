import React from "react";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

export default function Viewresume() {
  const Navigate = useNavigate();
  function Goback() {
    Navigate("/About");
  }
  return (
    <div className="flex flex-col gap-6">
      {/* <iframe src="/makresume.pdf" className="h-[80vh] w-full"/> */}
      {/* <embed src="/makresume.pdf" type="application/pdf" className="h-[70vh] w-full" /> // better way is object agar pdf nai open hui toh message de sakte download karo bol k*/}
      <object
        data="/makresume.pdf"
        type="application/pdf"
        className="h-[70vh] w-full"
      >
        <p>
          Your browser does not support viewing PDFs. You can{" "}
          <a
            href="/makresume.pdf"
            download="makresume"
            className="text-blue-600"
          >
            download the PDF
          </a>
          instead.
        </p>
      </object>
      <div className="flex gap-2 justify-center items-center">
        <a
          href="/makresume.pdf"
          download="makresume"
          className={`content-center bg-pink-800 px-4 h-[50px] rounded-full text-white tracking-wide`}
        >
          Download resume
        </a>
        <Btn element={Goback} contain={"Go back"} color={"bg-blue-600"} />
      </div>
    </div>
  );
}
