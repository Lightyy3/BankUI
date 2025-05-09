import { logos } from "../constants/index.jsx";
import { BackgroundCircles, BottomLine } from "../components/design/Hero.jsx";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <>
      <div
        className="flex items-center justify-center h-screen bg-[#0A0427] relative text-white text-center "
        ref={parallaxRef}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Financial <span className="text-[#8C3BFF]"> Solutions</span> <br />{" "}
            Engineered to Tackle Climate Change.
          </h1>
          <button
            className="inline-block mt-8 px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md transition hover:bg-[#8C3BFF] hover:text-white z-20"
            // onClick={}
          >
            DISCOVER US
          </button>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-30 left-48 text-yellow-400 text-2xl">
          ✨
        </div>
        <div className="absolute top-45 right-48 text-white text-2xl">✶</div>
        <div className="absolute bottom-24 left-1/3 text-white text-2xl">
          ↗
        </div>
        <div className="absolute bottom-24 left-2/3 text-yellow-400 text-2xl">
          ☀
        </div>
        {/* Dotted Background */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          // ref={parallaxRef}
        >
          <div className="w-[80%] h-[80%] rounded-full border-dotted border-2 border-white opacity-30"></div>
        </div>
        <ScrollParallax isAbsolutelyPositioned>
          {/* Desktop version */}
          <ul className="hidden xl:flex absolute left-1/2 bottom-16 transform -translate-x-1/2 px-4 py-2 bg-n-9/40 backdrop-blur-lg border border-n-1/10 rounded-2xl space-x-4">
            {heroIcons.map((icon, index) => (
              <li className="p-3 flex justify-center items-center" key={index}>
                <img src={icon} width={24} height={25} alt={`Icon ${index}`} />
              </li>
            ))}
          </ul>

          {/* Mobile version */}
          <ul className="xl:hidden absolute left-0 bottom-28 sm:bottom-16 px-4 py-2 bg-n-9/40 backdrop-blur-lg border border-n-1/10 rounded-2xl flex space-x-3 overflow-x-auto">
            {heroIcons.map((icon, index) => (
              <li className="p-3 flex justify-center items-center" key={index}>
                <img src={icon} width={24} height={25} alt={`Icon ${index}`} />
              </li>
            ))}
          </ul>
        </ScrollParallax>
      </div>
      <section className="relative bg-[#0A0427] text-white py-16 px-6 md:px-12 lg:px-24 sm:mt-[-4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-[#8C3BFF]">Scale Fintech</span> <br />
              <span className="text-white underline"> Safe And Secure</span>
              <img src="/images/arrow.svg" width={100} height={100} />
            </h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Deliver your fintech products to customers with fast, reliable,
              and seamless processes.{" "}
              <span className="font-semibold text-[#8C3BFF]">
                {" "}
                Secure, highly customizable, and built for growth.{" "}
              </span>{" "}
              BankUI is the ideal partner to scale your financial products
              globally.
            </p>

            {/* CTA Button */}
            <div className="mt-8 relative z-20">
              <a
                href="/consultation"
                className="inline-block px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md transition hover:bg-[#8C3BFF] hover:text-white"
              >
                CONSULTATION
              </a>
            </div>
          </div>

          {/* Right Side - Card Images */}
          <div className="relative flex justify-center">
            <img
              src="/images/1.svg"
              alt="Card Large"
              className="w-80 md:w-[420px] lg:w-[480px] shadow-lg"
            />
            <BackgroundCircles
              className="relative mt-32 md:mt-0 sm:mt-40"
              style={{ position: "relative", top: "8rem" }}
            />
          </div>
        </div>

        <div className="mt-36">
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
        <BottomLine />
      </section>
    </>
  );
};

export default Hero;
