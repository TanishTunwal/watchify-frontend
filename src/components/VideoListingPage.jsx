import { FaPlayCircle } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Learn React in 10 Minutes",
    channel: "CodeWithMe",
    views: "1.2M views",
    thumbnail: "https://via.placeholder.com/320x180",
  },
  {
    id: 2,
    title: "Mastering JavaScript Closures",
    channel: "DevSimplified",
    views: "800K views",
    thumbnail: "https://via.placeholder.com/320x180",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use What?",
    channel: "WebDev Insights",
    views: "500K views",
    thumbnail: "https://via.placeholder.com/320x180",
  },
];

const VideoListView = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="hidden md:block w-[250px] bg-black-900 min-h-screen"></aside>
      <main className="flex-1 p-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col items-center bg-gray-900 rounded-xl shadow-md p-4 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 rounded-lg object-cover"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold">{video.title}</h2>
                  <p className="text-sm text-gray-400">{video.channel}</p>
                  <p className="text-sm text-gray-500">{video.views}</p>
                </div>
                <div className="mt-3">
                  <FaPlayCircle size={36} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoListView;
