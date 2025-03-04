import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import UserAvatarLogo from "./UserAvatarLogo.jsx";

function MyNavbar() {
  return (
    <header className="bg-black h-14 w-full flex items-center px-4 justify-between fixed top-0 left-0 right-0 z-20">
      <Logo />
      <div className="flex-1 flex justify-center">
        <Search />
      </div>
      <UserAvatarLogo />
    </header>
  );
}

export default MyNavbar;
