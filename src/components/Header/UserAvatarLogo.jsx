import { FaUserCircle } from "react-icons/fa";

function UserAvatarLogo() {
  return (
    <div className="ml-auto flex items-center space-x-4">

      <button className="flex items-center px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-100 transition">
        Sign In
      </button>

      <FaUserCircle className="w-8 h-8 text-white cursor-pointer" />
    </div>
  );
}

export default UserAvatarLogo;
