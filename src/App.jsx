import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Model from "./sections/Model.jsx";
import Demo from "./sections/Demo.jsx";
import CurrencyConverter from "./sections/Test.jsx";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Model />
      <Pricing />
      <Faq />
      <CurrencyConverter />
      <Testimonials />
      <Download />
      <Demo />
      {/* <CurrencyConverter /> */}
      <Footer />
    </main>
  );
};

export default App;
