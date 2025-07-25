import { useState } from "react";

export default function SearchTask({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleClick(event) {
    event.preventDefault();
    onSearch(searchTerm);
  }
  return (
    <form action="" className="">
      <div className="flex">
        <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-96 lg:min-w-md">
          <input
            value={searchTerm}
            onChange={() => setSearchTerm(event.target.value)}
            type="search"
            id="search-dropdown"
            placeholder="Search Task"
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            required
          />
          <button
            type="submit"
            onClick={handleClick}
            className="absolute right-2 top-0 h-full rounded-e-lg cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
