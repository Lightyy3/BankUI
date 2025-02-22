/* eslint-disable react/jsx-no-undef */
import {
  // LucidePenTool,
  // LucideBox,
  // LucidePaintBucket,
  LucideCreditCard,
  LucideLock,
  LucideRefreshCw,
  LucideTrendingUp,
  LucideShieldAlert,
  LucideDollarSign,
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <LucideDollarSign size={32} className="text-white" />,
      title: "Secure Payment Solutions",
      description:
        "A wide range of secure payment integrations that ensure smooth and compliant transactions for your fintech products.",
      imageUrl: "./src/assets/payment.svg",
    },
    {
      icon: <LucideTrendingUp size={32} className="text-white" />,
      title: "Real-Time Financial Insights",
      description:
        "Access real-time analytics and reports to drive informed financial decisions and stay ahead in the market.",
      imageUrl: "./src/assets/insights.svg",
    },
    {
      icon: <LucideShieldAlert size={32} className="text-white" />,
      title: "Enhanced Security Measures",
      description:
        "Built-in security features that ensure the protection of sensitive financial data, meeting the highest compliance standards.",
      imageUrl: "./src/assets/security.svg",
    },
    {
      icon: <LucideCreditCard size={32} className="text-white" />,
      title: "Global Payment Solutions",
      description:
        "Seamlessly integrate global payment gateways for fast and secure transactions across borders.",
      imageUrl: "./src/assets/payment.svg",
    },
    {
      icon: <LucideLock size={32} className="text-white" />,
      title: "Advanced Security Features",
      description:
        "State-of-the-art encryption and compliance tools that ensure your fintech products stay secure and protected.",
      imageUrl: "./src/assets/security.svg",
    },
    {
      icon: <LucideRefreshCw size={32} className="text-white" />,
      title: "Real-time Updates",
      description:
        "Instant transaction processing and real-time data synchronization to keep your financial operations running smoothly.",
      imageUrl: "./src/assets/updates.svg",
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
