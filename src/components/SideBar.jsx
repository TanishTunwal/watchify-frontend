import { FaHome, FaFire, FaVideo, FaUser } from "react-icons/fa";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
    <div className={`fixed top-0 left-0 bg-black text-white h-screen p-3 flex flex-col transition-all duration-300 overflow-hidden ${isOpen ? "w-48" : "w-16"}`}>

      <div className="flex flex-col mt-16">
        <SidebarItem icon={<FaHome />} text="Home" isOpen={isOpen} />
        <SidebarItem icon={<FaFire />} text="Trending" isOpen={isOpen} />
        <SidebarItem icon={<FaVideo />} text="Subscriptions" isOpen={isOpen} />
        <SidebarItem icon={<FaUser />} text="Profile" isOpen={isOpen} />
      </div>
    </div>
    </>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="flex items-center space-x-4 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
    <span className="text-xl">{icon}</span>
    {isOpen && <span className="text-sm">{text}</span>}
  </div>
);

export default SideBar;
