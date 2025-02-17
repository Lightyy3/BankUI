// import { smallSphere, stars } from "../assets";
import { pricing } from "../constants";
import check from "../assets/svg/check.svg";

// import PricingList from "./PricingList";
// import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <div className="overflow-hidden bg-[#0A0427] mt-24" id="pricing">
      <div className="container relative z-2">
        <h1 className="text-center text-2xl font-semibold text-white leading-tight md:text-4xl lg:text-5xl p-4 mb-24">
          Get started with <span className="text-[#8C3BFF]">Brainwave</span> -
          Pay once, use forever
        </h1>

        <div className="relative mt-10">
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
              <div
                key={item.id}
                className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
              >
                <h4 className="h4 mb-4 text-[#8C3BFF]">{item.title}</h4>

                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                  {item.description}
                </p>

                <div className="flex items-center h-[5.5rem] mb-6">
                  {item.price && (
                    <>
                      <div className="h3">$</div>
                      <div className="text-[5.5rem] leading-none font-bold">
                        {item.price}
                      </div>
                    </>
                  )}
                </div>

                <a
                  className="inline-block px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md transition hover:bg-[#8C3BFF] hover:text-white  w-full mb-6 "
                  href={
                    item.price ? "/pricing" : "mailto:alex.dinu98@yahoo.com"
                  }
                  // white={!!item.price}
                >
                  {item.price ? "Get started" : "Contact us"}
                </a>

                <ul>
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start py-5 border-t border-n-6"
                    >
                      <img src={check} width={24} height={24} alt="Check" />
                      <p className="body-2 ml-4">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* <LeftLine />
          <RightLine /> */}
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b text-[#8C3BFF]"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
