import { FaHome, FaFire, FaVideo, FaHistory, FaListUl, FaClock, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: <FaHome />, To: "/", text: "Home" },
  { icon: <FaFire />, To: "/trending", text: "Trending" },
  { icon: <FaVideo />, To: "/subscriptions", text: "Subscriptions" },
  { icon: <FaHistory />, To: "/history", text: "History" },
  { icon: <FaClock />, To: "/watch-later", text: "Watch Later" },
  { icon: <FaThumbsUp />, To: "/liked-videos", text: "Liked Videos" },
  { icon: <FaListUl />, To: "/playlists", text: "Playlists" },
];

const SideBar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 bg-black text-white h-screen p-4 flex flex-col transition-all duration-300 overflow-hidden shadow-lg ${
        isOpen ? "w-56" : "w-16"
      }`}
    >
      <nav className="flex flex-col mt-16 space-y-2">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} To={item.To} isOpen={isOpen} />
        ))}
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, text, To, isOpen }) => (
  <Link to={To} className="flex items-center p-3 rounded-md hover:bg-gray-800 cursor-pointer transition-all">
    <span className="text-xl">{icon}</span>
    <span
      className={`text-sm ml-4 whitespace-nowrap transition-all duration-300 ${
        isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
      }`}
    >
      {text}
    </span>
  </Link>
);

export default SideBar;
