import React from "react";
import BackgroundImage from "../assets/Background.png";
import HeroEvent from "../componets/HeroEvent";

function HomePage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[100dvh]"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <HeroEvent />
      </div>
    </>
  );
}

export default HomePage;
