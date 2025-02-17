import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0A0427] text-black py-12 px-4">
      {/* Hero Section */}
      <div className="bg-#A78BFA text-white w-full max-w-5xl  p-12 text-center ">
        <h2 className="text-3xl font-semibold text-white">
          Find the <span className="text-[#8C3BFF]"> perfect asset</span> from
          the world
        </h2>
        <p className="mt-3 opacity-80 max-w-xl mx-auto">
          More than 700 people around the world support the work of thousands of
          digital creatives, all united behind a set of core values that put our
          creative community first.
        </p>
        <button className="mt-6 inline-block uppercase px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md  hover:bg-[#8C3BFF] hover:text-white z-20 transition">
          Go to Market
        </button>
        {/* <div className="absolute bottom-6 right-10 text-white text-3xl">↗</div> */}
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-6xl mt-16 text-white flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start px-4 sm:px-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <img src="/images/logo.svg" alt="BankUI Logo" className="h-8" />
            <h3 className="text-lg font-semibold">
              Bank <span className="text-[#8C3BFF]">UI</span>
            </h3>
          </div>
          <p className="text-sm mt-2 opacity-80 max-w-xs mx-auto md:mx-0">
            Market design is the process of designing markets to achieve
            specific goals.
          </p>
        </div>

        <div className="flex flex-wrap space-x-12 mt-6 md:mt-0 justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>Featured Product</li>
              <li>UI Kits</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold">Link</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>All-Access Pass</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="text-center md:text-left mt-5 sm:mt-0">
            <h4 className="font-semibold">Newsletter</h4>
            <div className="flex justify-center mt-2 md:justify-start">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 border text-black border-gray-300 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="text-[#8C3BFF] px-4 py-2 rounded-r-full text-sm hover:bg-purple-600 border-2 border-[#8C3BFF]">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ul className="flex justify-center gap-8 mt-16 ">
        {socials.map(({ id, url, icon, title }) => (
          <li key={id}>
            <a href={url} className="social-icon">
              <img src={icon} alt={title} className="w-auto h-auto" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
