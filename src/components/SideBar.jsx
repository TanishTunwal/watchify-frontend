import { FaHome, FaFire, FaVideo, FaUser } from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, text: "Home" },
  { icon: <FaFire />, text: "Trending" },
  { icon: <FaVideo />, text: "Subscriptions" },
  { icon: <FaUser />, text: "Profile" },
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
          <SidebarItem key={index} icon={item.icon} text={item.text} isOpen={isOpen} />
        ))}
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => (
  <div
    className="flex items-center p-3 rounded-md hover:bg-gray-800 cursor-pointer transition-all"
    role="button"
    tabIndex={0}
    aria-label={text}
  >
    <span className="text-xl">{icon}</span>
    <span
      className={`text-sm ml-4 whitespace-nowrap transition-all duration-300 ${
        isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
      }`}
    >
      {text}
    </span>
  </div>
);

export default SideBar;
