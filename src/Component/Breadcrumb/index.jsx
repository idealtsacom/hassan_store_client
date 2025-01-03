import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = ({ categories }) => {
  const location = useLocation();

  // Function to generate breadcrumb links based on the current URL path
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbs = pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;

      return {
        name: value.charAt(0).toUpperCase() + value.slice(1), // Capitalize the first letter of each segment
        path: to,
      };
    });

    return breadcrumbs;
  };

  // Render the breadcrumb links
  const breadcrumbs = getBreadcrumbs();

  return (
    <nav
      className="flex px-5 py-3 text-gray-700  rounded-lg bg-white dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {breadcrumbs
          .slice(
            0,
            categories && categories.length > 0
              ? breadcrumbs.length - 2
              : breadcrumbs.length
          )
          .map((breadcrumb, index) => (
            <li key={breadcrumb.path}>
              <div className="flex items-center">
                {
                  <svg
                    className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                }
                <Link
                  to={breadcrumb.path}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {breadcrumb.name}
                </Link>
              </div>
            </li>
          ))}
        {categories && categories.length > 0 ? (
          <li>
            <div className="flex items-center">
              {
                <svg
                  className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              }

              {categories.map((item, index) => (
                <>
                  <span className="text-sm font-medium text-gray-700 border rounded-2xl px-1  dark:text-gray-400 dark:hover:text-white">
                    {item}
                  </span>
                  {index < categories.length - 1 && (
                    <span className="px-1">,</span>
                  )}
                </>
              ))}
            </div>
          </li>
        ) : null}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
