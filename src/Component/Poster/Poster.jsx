import React from "react";
import { Link } from "react-router-dom";

const Poster = () => {
  const posterData = {
    welcomeText: {
      firstPart: "Welcome to",
      secondPart: "Hassan",
      thirdPart: "Store",
    },
    headline: "We choose Quality Over Quantity",
    subHeadline: "",
    buttonText: "Shop Now",
    loginText: "Already joined with us?",
    loginLinkText: "Log in",
    shopLink: "shop",
    loginLink: "/login",
  };

  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 animate-fadeIn ">
            <div className="text-center lg:text-left w-full ">
              <p className="text-2xl font-semibold tracking-wider uppercase">
                <span className="font-bold">
                  {posterData.welcomeText.firstPart}{" "}
                </span>
                <span className="text-green-500">
                  {posterData.welcomeText.secondPart}
                </span>
                <span className="text-red-500">
                  {posterData.welcomeText.thirdPart}
                </span>
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-4xl xl:text-4xl">
                {posterData.headline}
              </h1>

              <p
                dir="rtl"
                className="font-urdu my-4 text-base lg:mt-8 sm:text-xl text-blue-600  text-right"
              >
                {posterData.subHeadline}
              </p>

              <Link
                to={posterData.shopLink}
                title=""
                className="bg-teal-600 btn  text-white hover:scale-105 hover:bg-teal-500 transition duration-300 border-none p-3 mb-4"
              >
                {posterData.buttonText}
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

              <p className="mt-5 text-gray-600">
                {posterData.loginText}{" "}
                <Link
                  to={posterData.loginLink}
                  title=""
                  className="text-blue-500 transition-all duration-200 hover:underline"
                >
                  {posterData.loginLinkText}
                </Link>
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              {/* Placeholder for image or other content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poster;
