import { GoArrowUpRight } from "react-icons/go";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="h-[92vh] w-full flex flex-col justify-around items-center text-xl my-4">
      {/* Hero Text */}
      <div className="w-full flex flex-col items-center text-center gap-5 xl:gap-10">
        <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          Luxury car detailing
        </h1>
        <p className="text-gray-500 xl:text-2xl xl:w-[40%]">
          Experience the prestige of a professional detailed car, radiating
          elegance and refinement at every turn.
        </p>
        <button className="flex gap-2 xl:text-2xl">
          Let's connect <GoArrowUpRight />
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full min-h-0 flex items-center justify-center">
        <img
          src={hero}
          alt="Luxury car"
          className="object-contain max-h-full max-w-full "
        />
      </div>
    </div>
  );
};

export default Hero;
