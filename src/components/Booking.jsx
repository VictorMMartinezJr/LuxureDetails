import { GoArrowUpRight } from "react-icons/go";
import booking from "../assets/booking.png";

const Booking = () => {
  return (
    <div
      className="relative min-h-[50vh] grid place-items-center content-center 2xl:min-h-[70vh] 2xl:place-items-end 2xl:content-start"
      style={{
        background: `url(${booking})`,
        backgroundPosition: "center  center",
        backgroundSize: "cover",
      }}
    >
      <div className="z-10 absolute inset-0 bg-black opacity-70 2xl:opacity-0"></div>

      <div className="relative z-30 flex flex-col items-center gap-8 text-center xl:mt-4 2xl:items-start 2xl:transform 2xl:text-start 2xl:translate-x-1/2">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl 2xl:w-[50%] 2xl:text-start ">
          Book your luxury car detailing today
        </h2>
        <p className="text-gray-300 xl:text-2xl 2xl:text-3xl 2xl:w-1/2">
          Click the link below. Fill out the details and we'll get back to you
          in less than 24 hours.
        </p>
        <a className="flex gap-2 text-2xl 2xl:text-3xl">
          Get a quote now <GoArrowUpRight className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Booking;
