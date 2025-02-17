import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UserAvatarLogo() {
  const navigate = useNavigate(); // Hook to get the navigate function

  const handleSignInClick = () => {
    navigate("/login"); // Navigates to the login page
  };

  return (
    <div className="ml-auto flex items-center space-x-4 border-4">
      <button
        onClick={handleSignInClick}
        className="hidden sm:flex items-center px-4 py-2 text-blue-500 border border-blue-500 rounded-full transition"
      >
        Sign In
      </button>
      <FaUserCircle className="w-8 h-8 text-white cursor-pointer" />
    </div>
  );
}

export default UserAvatarLogo;
