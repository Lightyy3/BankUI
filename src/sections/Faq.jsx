import check from "../assets/svg/check.svg";
import { collabContent, collabText } from "../constants";

const Faq = () => {
  return (
    <div className="container lg:flex mt-72">
      <div className="max-w-[25rem]">
        <h2 className="h2 mb-4 md:mb-8">
          AI Chat App for <span className="text-[#8C3BFF]"> seamless</span>{" "}
          collaboration
        </h2>

        <ul className="max-w-[22rem] mb-10 md:mb-14">
          {collabContent.map((item) => (
            <li className="mb-3 py-3" key={item.id}>
              <div className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <h6 className="body-2 ml-5">{item.title}</h6>
              </div>
              {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
            </li>
          ))}
        </ul>

        <a className="inline-block  px-6 py-3 border-2 uppercase border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md  hover:bg-[#8C3BFF] hover:text-white z-20 transition">
          Try it now
        </a>
      </div>

      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
          {collabText}
        </p>

        <div className="relative left-1/2 flex w-[22rem] aspect-square  rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
            <img
              src="../images/15.svg"
              className="w-80 h-80 object-cover"
              alt="Scary robot"
            />
          </div>

          {/* <LeftCurve />
            <RightCurve /> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
