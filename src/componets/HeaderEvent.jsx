import React from "react";

export default function HeaderEvent() {
  return (
    <>
      <nav className="grid grid-flow-col justify-between items-center px-12 py-10">
        <div className="flex justify-center items-center">
          <a className="font-saira font-bold text-3xl text-whiteText" href="">
            Boost
          </a>
        </div>

        <ul className="flex flex-row justify-center items-center gap-14">
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
          <li className="px-8 py-2 border border-whiteText border-opacity-40 rounded-xl">
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
