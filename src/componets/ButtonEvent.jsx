import React from "react";

function ButtonEvent({ children }) {
  return (
    <>
      <button className="bg-gradient-to-r from-whiteText/40 to-transparent px-8 py-2 border border-whiteText border-opacity-40 rounded-xl font-poppins font-semibold text-base transition duration-700 hover:transition hover:duration-700 hover:bg-gradient-to-r hover:from-transparent hover:to-whiteText/40">
        {children}
      </button>
    </>
  );
}

export default ButtonEvent;
