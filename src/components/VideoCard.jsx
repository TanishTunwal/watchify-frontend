function VideoCard() {
  return (
    <div
            className="w-full sm:w-72 md:w-80 lg:w-96 cursor-pointer bg-black rounded-lg mb-8 p-4 flex flex-col justify-between relative"
          >
            {/* Video Thumbnail */}
            <div className="w-full h-40 sm:h-44 md:h-48 lg:h-56 rounded-lg overflow-hidden mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCzs2TYmmdDA9LOA_odWyeDSdSMMEa7yZTg&s"
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Info */}
            <div className="flex items-center space-x-3">
              {/* Channel Avatar */}
              <div className="w-10 h-10 bg-gray-500 rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCzs2TYmmdDA9LOA_odWyeDSdSMMEa7yZTg&s"
                  alt="Channel"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Video Details */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-white text-sm md:text-base font-semibold line-clamp-2">
                  Video Title
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">Channel Name</p>
                <p className="text-gray-500 text-xs">1M views • 2 days ago</p>
              </div>
            </div>
        </div>
  )
}

export default VideoCard