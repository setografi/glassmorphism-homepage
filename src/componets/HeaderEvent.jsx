import React from "react";

export default function HeaderEvent() {
  return (
    <>
      <nav className="absolute top-0 left-0 grid grid-flow-col justify-between items-center z-20">
        <div className="flex justify-center items-center">
          <a className="font-saira font-bold text-3xl text-whiteText" href="">
            Boost
          </a>
        </div>

        <ul className="flex flex-row justify-center items-center">
          <li>
            <a
              className="font-ouicksan font-bold text-base text-whiteText"
              href=""
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-ouicksan font-bold text-base text-whiteText"
              href=""
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-ouicksan font-bold text-base text-whiteText"
              href=""
            >
              Team
            </a>
          </li>
          <li>
            <a
              className="font-poppins font-semibold text-base text-whiteText"
              href=""
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
