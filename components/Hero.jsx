"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image src={"/hero.jpg"} alt="hero" width={1050} height={350} />
      <p className="flex justify-center ">
        Hi, welcome to my website! This website is my hobby project lab (●'◡'●)
      </p>
    </div>
  );
};

export default Hero;
