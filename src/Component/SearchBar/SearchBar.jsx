import React, { useState, useEffect, useRef } from "react";
import useItems from "../../Hooks/useItems";
import { debounce } from "lodash";
import SearchResults from "./SearchResults"; // Import the new SearchResults component

const SearchBar = () => {
  const [items] = useItems(); // Fetch items using your custom hook
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Debounced function to filter items based on search query
  const filterItems = debounce((query, items) => {
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
    } else {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredItems);
      setShowResults(true);
    }
  }, 300);

  // Handle query changes
  useEffect(() => {
    filterItems(query, items);
  }, [query, items]);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    setShowResults(false);
    // You can add a redirection logic here if required.
  };

  // Close search results when clicking outside the search box
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-6 flex justify-center items-center relative bg-white">
      <form
        onSubmit={handleSearch}
        className="flex items-center relative w-full"
        ref={searchRef}
      >
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Product..."
            type="search"
            id="default-search"
            className=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-600 focus:border hover:border hover:border-gray-600  focus:border-gray-50 rounded-lg"
            required
            aria-describedby="search-results"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        {showResults && (
        <SearchResults
          searchResults={searchResults}
          setShowResults={setShowResults}
        />
      )}
      </form>

      {/* Pass the searchResults and setShowResults props to the SearchResults component */}
 
    </nav>
  );
};

export default SearchBar;
