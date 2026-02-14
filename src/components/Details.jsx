import { details } from "../data/details";
import DetailsCard from "./DetailsCard";

const Details = () => {
  return (
    <div className="overflow-hidden">
      <div className="md:flex md:justify-between md:items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          Love in Every Detail
        </h2>
        <p className="text-gray-500 md:w-1/2 xl:text-2xl xl:w-[30%]">
          Immerse yourself in luxury with our bespoke detailing packages
          tailored to your car's unique needs.
        </p>
      </div>
      <div className="md:flex md:gap-4">
        {details.map((d) => {
          return (
            <DetailsCard
              key={d.title}
              title={d.title}
              description={d.description}
              image={d.image}
              alt={d.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Details;
