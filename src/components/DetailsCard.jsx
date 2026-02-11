import { GoArrowRight } from "react-icons/go";

const DetailsCard = ({ title, description, image, alt }) => {
  return (
    <div className="flex flex-col gap-2 w-full min-h-0">
      <img
        src={image}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
      <h3 className="xl:text-3xl">{title}</h3>
      <p className="text-gray-500 xl:text-2xl">{description}</p>
      <a href="/" className="flex items-center gap-2">
        Learn more <GoArrowRight />
      </a>
    </div>
  );
};

export default DetailsCard;
