import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";

const footerData = {
  companyInfo: {
    name: "Hassan Store",
    description:
      "Hassan Store Electric & Electronics was founded in 2019 to provide consumers with a winning combination of quality and value.",
    logo: logo,
    socialLinks: [
      { icon: <FaFacebookSquare />, href: "https://www.facebook.com/" },
      { icon: <FaYoutube />, href: "https://www.youtube.com/" },
      { icon: <FaInstagramSquare />, href: "https://www.instagram.com/" },
    ],
  },
  companyLinks: [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Works", href: "#" },
    { name: "Careers", href: "#" },
  ],
  helpLinks: [
    { name: "Customer Support", href: "#" },
    { name: "Delivery Details", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  footerInfo: {
    copyright: "© Copyright 2024 | Hassan Store",
    credit: "Muhammad Hassan",
    creditLink: "https://github.com/",
  },
};

const Footer = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Thanks for subscribing to Hassan Store`,
      text: email,
      showConfirmButton: false,
      timer: 2500,
    });

    e.target.reset();
  };

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="flex items-center">
              <img
                loading="lazy"
                className="w-auto h-16 rounded-box"
                src={footerData.companyInfo.logo}
                alt="Hassan Store Logo"
              />
              <p className="text-2xl font-bold ml-4">
                {footerData.companyInfo.name}
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              {footerData.companyInfo.description}
            </p>

            <ul className="flex space-x-3 mt-9">
              {footerData.companyInfo.socialLinks.map(
                ({ icon, href }, index) => (
                  <li
                    key={index}
                    className="w-12 h-12 flex justify-center items-center rounded-full border-2 border-gray-300 hover:bg-black transition-all"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-black hover:text-gray-200"
                    >
                      {icon}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              {footerData.companyLinks.map(({ name, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>
            <ul className="mt-6 space-y-4">
              {footerData.helpLinks.map(({ name, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to Newsletter
            </p>
            <form
              onSubmit={handleFormSubmission}
              method="POST"
              className="mt-6"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center px-6 py-4 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-black">
          {footerData.footerInfo.copyright} |<span> </span>
          <a
            href={footerData.footerInfo.creditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 font-semibold"
          >
            {footerData.footerInfo.credit}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
