import { FaSearch, FaMicrophone } from "react-icons/fa";

function Search() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="relative flex w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-4 py-2 pr-12 text-sm text-white bg-black border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-10 flex items-center justify-center text-gray-400 bg-gray-800 rounded-r-full  ">
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
      
      <button className="ml-3 p-2 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
        <FaMicrophone className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Search;
