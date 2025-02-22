import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0A0427] text-black py-12 px-4">
      {/* Hero Section */}
      <div className="bg-#A78BFA text-white w-full max-w-5xl  p-12 text-center ">
        <h2 className="text-3xl font-semibold text-white">
          Discover the{" "}
          <span className="text-[#8C3BFF]">perfect financial solution</span> for
          your business
        </h2>
        <p className="mt-3 opacity-80 max-w-xl mx-auto">
          Join thousands of global fintech leaders who trust BankUI to drive
          smarter, data-driven decisions and scalable financial growth.
        </p>
        <button className="mt-6 inline-block uppercase px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md  hover:bg-[#8C3BFF] hover:text-white z-20 transition">
          Explore Solutions
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
            Revolutionizing financial management with intuitive tools and
            real-time insights.
          </p>
        </div>

        <div className="flex flex-wrap space-x-12 mt-6 md:mt-0 justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>Our Solutions</li>
              <li>API Integrations</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>Developer Portal</li>
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
              <button className="text-[#8C3BFF] px-4 py-2 rounded-r-full text-sm hover:bg-purple-200 border-2 border-[#8C3BFF]">
                SUBSCRIBE
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
