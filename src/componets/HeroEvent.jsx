import React from "react";
import ButtonEvent from "./ButtonEvent";
import RocketImage from "../assets/Rocket.svg";
import LineCloud from "../assets/LineCloud.svg";
import CloudImage from "../assets/Cloud.svg";

export default function HeroEvent() {
  return (
    <>
      <div className="flex items-center">
        <div className="px-12 pt-20 pb-32 pr-[28rem]">
          <div>
            <h1 className="font-ouicksan font-bold text-whiteText text-3xl">
              Boost Within One Click
            </h1>
            <p className="mt-5">
              There Are Multiple Program Running In your Background,
              <br /> Taking Up A Lot Of Resources.{" "}
            </p>
          </div>

          <div className="mt-5">
            <ButtonEvent>Boost</ButtonEvent>
          </div>
        </div>

        <div className="">
          <div className="absolute top-56 right-52">
            <img width={100} src={RocketImage} alt="Rocket" />
          </div>

          <div className="absolute bottom-[3rem] right-12 z-10">
            <img className="w-[40rem]" src={LineCloud} alt="Line Cloud" />
          </div>

          <div className="absolute bottom-10 right-9">
            <img
              className="w-[40rem] shadow-img"
              src={CloudImage}
              alt="Cloud"
            />
          </div>
        </div>

        {/* Responsif di LG dan XL */}
        {/* <div className="">
          <div className="absolute lg:top-64 xl:top-96 right-52">
            <img width={100} src={RocketImage} alt="Rocket" />
          </div>

          <div className="absolute lg:bottom-[5.5rem] xl:bottom-[13.5rem] right-12 z-10">
            <img className="w-[40rem]" src={LineCloud} alt="Line Cloud" />
          </div>

          <div className="absolute lg:bottom-20 xl:bottom-52 right-9">
            <img
              className="w-[40rem] shadow-img"
              src={CloudImage}
              alt="Cloud"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
