// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  useConvertCurrencyQuery,
  useConvertCurrencyByDateQuery,
  useConvertDateQuery,
  useConvertCurrencyBaseQuery,
} from "../services/convert"; // Import the hook
import Slider from "react-slick"; // Import react-slick for the carousel
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const CurrencyConverter = () => {
  const [base, setBase] = useState("USD"); // Initialize base with an empty string for the user to select
  const [symbols, setSymbols] = useState(""); // Initialize symbols with an empty string for the user to select
  const [date, setDate] = useState(""); // State for date
  // Hooks for the different conversion options
  const { data, error, isLoading } = useConvertCurrencyQuery({ base, symbols });
  const {
    data: dataByDate,
    error: errorByDate,
    isLoading: isLoadingByDate,
  } = useConvertCurrencyByDateQuery({ base, symbols, date });

  // New hook for date-based conversion
  const { error: errorBySpecificDate, isLoading: isLoadingBySpecificDate } =
    useConvertDateQuery({ date });

  // Use hook for base currency rates (for the selected base)
  const {
    data: baseData,
    error: baseError,
    isLoading: isLoadingBase,
  } = useConvertCurrencyBaseQuery({ base });

  const handleSubmit = (e) => {
    e.preventDefault();
    // If no base or symbols are selected, show an alert
    if (!base || !symbols) {
      alert("Please select both base and symbols currencies");
      return; // Stop the form submission if fields are empty
    }
  };
  // Slider settings
  const sliderSettings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed for autoplay
    arrows: true, // Disable arrows for navigation (optional)
  };

  return (
    <div className="max-w-3xl mx-auto container p-12 pt-24">
      <h1 className="font-semibold mb-4 h2 mx-auto text-[#8C3BFF] text-center sm:text-left">
        Currency Exchange
      </h1>

      {/* Currency Conversion Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-lg">
          Filter by base currency, converted currency, and date:
        </p>

        {/* Base Currency Selector */}
        <select
          name="base"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="w-full p-2 border rounded text-black"
        >
          <option value="" disabled>
            Select Currency Type
          </option>
          <option value="USD">USD</option>
          <option value="RON">RON</option>
          <option value="JPY">JPY</option>
        </select>

        {/* Symbol Currency Selector */}
        <select
          name="symbols"
          value={symbols}
          onChange={(e) => setSymbols(e.target.value)}
          className="w-full p-2 border rounded text-black"
        >
          <option value="" disabled>
            Select Symbol Type
          </option>
          <option value="USD">USD</option>
          <option value="RON">RON</option>
          <option value="JPY">JPY</option>
        </select>

        {/* Date Input for Specific Date Conversion */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
      </form>

      {/* Loading States */}
      {isLoading ||
      isLoadingByDate ||
      isLoadingBySpecificDate ||
      isLoadingBase ? (
        <p>Loading conversion...</p>
      ) : null}

      {/* Error States */}
      {error && <p> {error.message}</p>}
      {errorByDate && <p> {errorByDate.message}</p>}
      {errorBySpecificDate && <p> {errorBySpecificDate.message}</p>}
      {baseError && (
        <p>Error fetching base currency data: {baseError.message}</p>
      )}

      {/* Data Display: Latest Conversion */}
      {data && !date && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Converted Amount:</h3>
          <p>
            {base} to {symbols}:{" "}
            {data.rates ? data.rates[symbols] : "No data available"}
          </p>
        </div>
      )}

      {/* Data Display: Conversion by Specific Date
      {dataBySpecificDate && date && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Converted Amount on {date}:</h3>
          <p>
            EUR to {symbols}:{" "}
            {dataBySpecificDate.rates && dataBySpecificDate.rates[symbols]
              ? dataBySpecificDate.rates[symbols]
              : "No data available"}
          </p>
        </div>
      )} */}

      {/* Data Display: Conversion by Date */}
      {dataByDate && date && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Converted Amount on {date}:</h3>
          <p>
            {base} to {symbols}:{" "}
            {dataByDate.rates && dataByDate.rates[symbols]
              ? dataByDate.rates[symbols]
              : "No data available"}
          </p>
        </div>
      )}
      {/* Data Display: Base Currency Conversion */}
      <div className="max-w-3xl mx-auto p-6">
        {/* <h1 className="text-3xl font-semibold mb-4">Currency Exchange</h1> */}

        {/* Data Display: Base Currency Conversion */}
        {baseData && base && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Base Currency Conversion:</h3>
            <Slider {...sliderSettings}>
              {Object.keys(baseData.rates).map((symbol) => (
                <div key={symbol} className="p-4 border rounded-lg">
                  <h4 className="text-xl font-semibold text-[#8C3BFF]">
                    {base} to {symbol}
                  </h4>
                  <p className="text-sm md:text-lg break-words">
                    Conversion Rate:{" "}
                    {baseData.rates[symbol] || "No data available"}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
