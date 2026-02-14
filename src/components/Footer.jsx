const Footer = () => {
  return (
    <footer className="my-20 flex flex-col items-center text-center gap-6 xl:flex-row xl:items-stretch">
      <div className="flex flex-col gap-6 xl:flex-1 xl:text-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">LuxureDetails</h2>
        <p className="text-gray-500 xl:text-2xl xl:w-3/4">
          Experience the prestige of a professionally detailed car, radiating
          elegance and refinement at every turn.
        </p>
      </div>

      <div className="flex flex-col gap-10 md:flex-row xl:flex-1 xl:justify-center">
        <ul className="flex flex-col gap-4">
          <li className="text-gray-300 mb-2 text-2xl">Website</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="text-gray-300 mb-2 text-2xl">Contact</li>
          <li>Get a quote</li>
          <li>Contact form</li>
          <li>Email us</li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="text-gray-300 mb-2 text-2xl">Social Media</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
