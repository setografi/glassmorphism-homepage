import React from "react";
import HeaderEvent from "../componets/HeaderEvent";
import HeroEvent from "../componets/HeroEvent";

function HomePage() {
  return (
    <>
      <div className="relative w-[62.5rem] h-screen mx-auto flex justify-center items-center">
        <div className="bg-gradient-to-r from-whiteText/40 to-transparent border border-whiteTwo border-opacity-40 rounded-3xl">
          <HeaderEvent />
          <HeroEvent />
        </div>{" "}
      </div>
    </>
  );
}

export default HomePage;
