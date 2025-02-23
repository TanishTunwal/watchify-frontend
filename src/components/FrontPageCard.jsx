import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

function FrontPageCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOptionClick = (option) => {
    console.log(option);
  };

  const handleDotsClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 pl-14">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-72 md:w-80 lg:w-96 cursor-pointer bg-black rounded-lg mb-8 p-4 flex flex-col justify-between relative"
          >
            <div className="w-full h-40 sm:h-44 md:h-48 lg:h-56 rounded-lg overflow-hidden mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCzs2TYmmdDA9LOA_odWyeDSdSMMEa7yZTg&s"
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-500 rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCzs2TYmmdDA9LOA_odWyeDSdSMMEa7yZTg&s"
                  alt="Channel"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-white text-sm md:text-base font-semibold line-clamp-2">
                  Video Title
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">Channel Name</p>
                <p className="text-gray-500 text-xs">1M views • 2 days ago</p>
              </div>
            </div>
            <div className="absolute bottom-2 right-5">
              <button
                className="text-white text-2xl"
                onClick={() => handleDotsClick(index)}
              >
                <FaEllipsisH />
              </button>

              {openIndex === index && (
                <div className="absolute z-6 top-6 right-0 bg-black text-white rounded-md shadow-lg w-40 py-2">
                  <button
                    onClick={() => handleOptionClick("Download")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleOptionClick("Add to Playlist")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Add to Playlist
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrontPageCard;
