import React from "react";
import controller from "../assets/controller.png";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <p>Are You Ready To Play The Game?</p>
      <p>The next generation of players begins woth a Play Stattion 5</p>
      <img src={controller} alt="controller-img" />
    </div>
  );
};

export default Hero;
