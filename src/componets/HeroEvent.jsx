import React from "react";
import ButtonEvent from "./ButtonEvent";
import RocketImage from "../assets/Rocket.svg";
import LineCloud from "../assets/LineCloud.svg";

export default function HeroEvent() {
  return (
    <>
      <div className="relative top-0 left-0 w-[62.5rem] bg-gradient-to-r from-whiteText to-transparent border-2 border-whiteTwo rounded-3xl z-10">
        <div className="grid grid-flow-col items-center">
          <div>
            <div>
              <h1>Boost Within One Click</h1>
              <p>
                There Are Multiple Program Running In your Background, Taking Up
                A Lot Of Resources.{" "}
              </p>
            </div>
            <ButtonEvent />
          </div>

          <div>
            <div className="">
              <img width={100} src={RocketImage} alt="" />
            </div>
            <img src={LineCloud} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
