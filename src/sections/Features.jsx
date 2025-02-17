import { LucidePenTool, LucideBox, LucidePaintBucket } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <LucidePenTool size={32} className="text-white" />,
      title: "800+ Design Resources",
      description:
        "Hundreds of component examples for all your website needs that meet accessibility criteria.",
      // backgroundUrl: "./src/assets/file02.svg",
      imageUrl: "./src/assets/file02.svg",
    },
    {
      icon: <LucideBox size={32} className="text-white" />,
      title: "New Products Daily",
      description:
        "Hundreds of component examples for all your website needs that meet accessibility criteria.",
    },
    {
      icon: <LucidePaintBucket size={32} className="text-white" />,
      title: "Dark Mode",
      description:
        "All components include a dark variant that lets you style your site differently when dark mode is enabled.",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-[#0A0427] py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            // style={{
            //   backgroundImage: `url(${feature.backgroundUrl})`,
            // }}
            className="bg-purple-300 bg-opacity-5  p-6 rounded-xl border border-white/20  flex flex-col items-start "
          >
            <div className="bg-purple-300 bg-opacity-5   p-3 rounded-lg mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#8C3BFF]">
              {feature.title}
            </h3>
            <p className="text-sm opacity-80">{feature.description}</p>
            {/* <a
              className="inline-block px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md transition hover:bg-[#8C3BFF] hover:text-white mt-12  w-full mb-6 "
              href={feature.price ? "/pricing" : "mailto:alex.dinu98@yahoo.com"}
              // white={!!item.price}
            >
              {feature.price ? "Get started" : "Contact us"}
            </a> */}
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-[#0E0C15]">
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  {feature.imageUrl && (
                    <img
                      src={feature.imageUrl}
                      width={380}
                      height={362}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
