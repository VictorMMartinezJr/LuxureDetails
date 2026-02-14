const CareCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col w-full min-h-0 gap-2 mb-6">
      <div className="flex gap-2 items-center">
        <Icon className="" />
        <h3 className="lg:text-3xl">{title}</h3>
      </div>
      <p className="text-gray-300 lg:text-2xl 2xl:w-3/4">{description}</p>
    </div>
  );
};

export default CareCard;
