import { GoArrowUpRight } from "react-icons/go";
import care from "../assets/care.png";
import { careData } from "../data/careData";
import CareCard from "./CareCard";

const Care = () => {
  return (
    <div className="my-20 gap-2 flex flex-col md:flex-row  ">
      {/* Text and image */}
      <div className="md:flex-1 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-7xl 2xl:w-[70%] text-center">
          We will take good care of your car
        </h2>
        <img
          src={care}
          alt="Care section car"
          className="transform xl:max-h-120"
        />
      </div>

      <hr />

      {/* Cards */}
      <div className="mt-10 md:mt-0 md:flex-1 flex flex-col justify-between">
        {careData.map((d) => {
          return (
            <CareCard
              key={d.title}
              icon={d.icon}
              title={d.title}
              description={d.description}
            />
          );
        })}
        <a className="flex gap-2 text-2xl">
          Get a quote now <GoArrowUpRight className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Care;
