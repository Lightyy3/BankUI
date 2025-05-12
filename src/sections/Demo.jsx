/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import { copy, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="mt-16 container">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-center md:h2 mb-4 md:mb-8 mx-auto text-3xl font-bold">
          Explore the capabilities of our AI by providing a link
          <h3 className="text-center">
            <span className="text-[#8C3BFF]">
              and receive a concise summary in a blink of an eye.
            </span>
          </h3>
        </h2>

        <form
          className="relative flex items-center justify-center rounded-lg shadow-lg pl-8 mx-auto"
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px" }} // Optional: to restrict the width of the form
        >
          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className="w-full pl-14 pr-20 py-4 text-lg text-black rounded-lg focus:outline-none ring-8 ring-[#8C3BFF] focus:ring-black transition duration-300"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="absolute right-4 text-6xl text-[#8C3BFF] focus:outline-none transition duration-300 p-8 bg-transparent rounded-full shadow-lg hover:shadow-xl z-10"
            style={{ top: "50%", transform: "translateY(-50%)" }} // Center vertically within the form
          >
            <p className="flex items-center justify-center text-5xl mb-2 z-10">
              ↵
            </p>
          </button>
        </form>

        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto scrollbar-hidden">
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="flex items-center p-3  rounded-lg shadow-sm  cursor-pointer"
            >
              {/* Copy Button with Image on the Left */}
              <div
                className="copy_btn p-2"
                onClick={() => handleCopy(item.url)}
              >
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className="w-6 h-6 object-contain filter invert  "
                />
              </div>

              {/* Link Text */}
              <p className="flex-1 font-satoshi text-[#8C3BFF] font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center mx-auto">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-white text-center">
            Well, that wasnt supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-white">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-[#8C3BFF] text-xl mx-auto">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-md text-white">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
