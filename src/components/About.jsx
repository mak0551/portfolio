import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "./Btn";

export default function About() {
  const Navigate = useNavigate();
  function Goback() {
    Navigate("/");
  }
  function Viewresume() {
    Navigate("/Viewresume");
  }
  const imgobj = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqSwXQE9onxwY__FyuOMjYKoM8AaCukPcDQ&s",
    },
    {
      img: "data:image/png;base64,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",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
    },
    {
      img: "https://externlabs.com/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      img: "data:image/png;base64,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",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&s",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      img: "https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg",
    },
  ];
  return (
    <div className="px-6 h-fit">
      <h1 className="text-3xl mt-6 font-mono font-black underline">About Me</h1>
      <br />
      <p className="text-xl font-mono">
        <span className="font-mono font-black text-pink-900">
          Hi, I'm Mohammed Ahmed Khan
        </span>{" "}
        a passionate and motivated 'MERN stack developer' with a strong
        foundation in web development. I recently completed my Btech in computer
        science engineering from JNTUH university, where I developed a deep
        interest in building dynamic and responsive web applications.
      </p>
      <p className="text-xl font-mono max-lg:hidden">
        enjoy the process of transforming ideas into real-world applications,
        using the power of MongoDB, Express.js, React.js, and Node.js. I'm
        committed to writing clean, efficient code and always strive to improve
        the user experience in the applications I build. I love working in a
        team environment where I can share knowledge, collaborate on innovative
        solutions, and continue to grow as a developer.
      </p>
      <h1 className="text-3xl mt-6 font-mono font-black underline">Skills</h1>
      <div className="overflow-hidden">
        <div className=" marquee flex">
          {imgobj.map((data) => {
            return (
              <img className="h-20 mx-10 rounded-md" src={data.img} alt="" />
            );
          })}
          {imgobj.map((data) => {
            return (
              <img className="h-20 mx-10 rounded-md" src={data.img} alt="" />
            );
          })}
          {imgobj.map((data) => {
            return (
              <img className="h-20 mx-10 rounded-md" src={data.img} alt="" />
            );
          })}
        </div>
      </div>
      <div className="fontmono border flex flex-col text-xl">
        <ol>
          <li className="my-4">
            <strong className="fontmono">Frontend Development</strong>
            <ul>
              <li className="fontmono">HTML5</li>
              <li className="fontmono">CSS3</li>
              <li className="fontmono">JavaScript</li>
              <li className="fontmono">Tailwind CSS</li>
              <li className="fontmono">Bootstrap</li>
              <li className="fontmono">Wordpress</li>
              <li className="fontmono">React.js</li>
            </ul>
          </li>
          <li className="my-4">
            <strong className="fontmono">Backend Development</strong>
            <ul>
              <li className="fontmono">Node.js</li>
              <li className="fontmono">Express.js</li>
              <li className="fontmono">RESTful APIs</li>
              <li className="fontmono">Authentication (JWT, OAuth)</li>
            </ul>
          </li>
          <li className="my-4">
            <strong className="fontmono">Database Management</strong>
            <ul>
              <li className="fontmono">MongoDB</li>
              <li className="fontmono">Mongoose</li>
              <li className="fontmono">MySQL</li>
            </ul>
          </li>
          <li className="my-4">
            <strong className="fontmono">Version Control</strong>
            <ul>
              <li className="fontmono">Git</li>
              <li className="fontmono">GitHub</li>
            </ul>
          </li>
          <li className="my-4">
            <strong className="fontmono">Tools & Utilities</strong>
            <ul>
              <li className="fontmono">npm </li>
              <li className="fontmono">Postman </li>
              <li className="fontmono">VS Code </li>
              <li className="fontmono">Render </li>
              <li className="fontmono">Netlify </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="w-full flex justify-center my-2 gap-2 ">
        <Btn
          element={Viewresume}
          contain={"View resume"}
          color={"bg-pink-800"}
        />
        <Btn element={Goback} contain={"Go back"} color={"bg-blue-600"} />
      </div>
    </div>
  );
}
