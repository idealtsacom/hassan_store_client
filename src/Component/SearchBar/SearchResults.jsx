import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ searchResults, setShowResults }) => {
  return (
    <ul
      id="search-results"
      role="listbox"
      className="absolute top-full mt-2 w-full bg-white border rounded-md shadow-lg z-10"
    >
      {searchResults.length > 0 ? (
        searchResults.slice(0, 4).map((item) => (
          <li key={item._id} className="px-4 py-2 hover:bg-gray-100">
            <Link
              to={`/shop/category/${item._id}`}
              onClick={() => setShowResults(false)}
              className="block text-black"
            >
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img loading="lazy" src={item?.img} alt={item.name} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                </div>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <li className="p-3 text-gray-500">No results found</li>
      )}
    </ul>
  );
};

export default SearchResults;
