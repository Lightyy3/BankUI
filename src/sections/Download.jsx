/* eslint-disable react/no-unescaped-entities */

import check from "../assets/svg/check.svg";
import { services } from "../constants";

const Download = () => {
  return (
    <section>
      <div className="container">
        <h1 className="mb-24 text-4xl font-bold">
          BankUI unlocks the <span className="text-[#8C3BFF]">power</span> of
          AI-driven financial solutions
        </h1>

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right invisible md:visible"
                src="../images/12.svg"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] mx-auto md:mx-0 md:ml-auto items-center">
              <h4 className="h4 mb-4">
                {" "}
                <span className="text-[#8C3BFF]">Smartest</span> AI
              </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                BankUI empowers your fintech solutions with AI-driven automation
                and real-time insights.
              </p>
              <ul className="body-2">
                {services.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="../images/14.svg"
                  className="h-80 w-full mt-20 object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">AI-powered Financial Tools</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Leverage advanced AI to optimize your financial operations and
                  boost decision-making. Start now!
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">
                  AI-driven{" "}
                  <span className="text-[#8C3BFF]">Financial Insights</span>
                </h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Unlock powerful AI-driven analytics to optimize your financial
                  strategies. What will you achieve?
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="../images/13.svg"
                  className="w-80 h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Download;
