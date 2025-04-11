import React from "react";
import { heroData } from "../data/data";

const Hero = () => {
  return (
    <section
      className="bg-gray-900 text-white text-center py-20 px-4"
      id="hero"
    >
      <h1 className="text-2xl md:text-6xl font-bold mb-4">{heroData.title}</h1>
      <p className="text-lg md:text-xl mb-6">{heroData.subtitle}</p>
      <a
        href="https://www.linkedin.com/in/hanzla-mahmood-94a014335/"
        target="_blank"
      >
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300">
          {heroData.buttonText}
        </button>
      </a>
    </section>
  );
};

export default Hero;
