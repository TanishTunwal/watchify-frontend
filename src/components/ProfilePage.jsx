import { MdSubscriptions } from "react-icons/md";
import VideoCard from "./VideoCard";

function ProfilePage() {
    return (
        <div className="w-screen h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="hidden md:block w-[250px] bg-black min-h-screen"></aside>

            {/* Main Content */}
            <div className="w-full h-full flex flex-col overflow-y-auto">
                {/* Cover Image */}
                <img
                    className="w-full h-80 object-cover"
                    src="https://static.vecteezy.com/system/resources/thumbnails/043/100/323/small/ai-generated-background-banner-postcard-for-world-environment-day-photo.jpg"
                    alt="CoverImage"
                />

                {/* Profile Section */}
                <div className="relative flex flex-col md:flex-row items-center px-6 py-4 rounded-lg mt-[-40px] mx-4 md:mx-6 shadow-lg bg-black">
                    {/* Profile Avatar */}
                    <img
                        className="w-24 h-24 rounded-full border-4 border-white"
                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
                        alt="Profile Avatar"
                    />

                    {/* User Info */}
                    <div className="md:ml-4 mt-3 md:mt-0 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-semibold">Tanish Tunwal</h2>
                        <h4 className="text-gray-400">@TanishHere</h4>
                        <h4 className="text-gray-300">1,220,000 Subscribers</h4>
                    </div>

                    {/* Subscribe Button */}
                    <div className="mt-4 md:mt-0 md:ml-auto">
                        <button className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                            <MdSubscriptions /> Subscribe
                        </button>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full overflow-x-auto text-white">
                    <div className="flex justify-center md:justify-start px-6 py-3 whitespace-nowrap space-x-6">
                        <button className="px-4 py-2 rounded transition duration-300 hover:bg-gray-700">Videos</button>
                        <button className="px-4 py-2 rounded transition duration-300 hover:bg-gray-700">Playlists</button>
                        <button className="px-4 py-2 rounded transition duration-300 hover:bg-gray-700">Tweets</button>
                        <button className="px-4 py-2 rounded transition duration-300 hover:bg-gray-700">Subscribed</button>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-white"></div>

                {/* No Videos Uploaded Message */}
                <div className="flex flex-col justify-center items-center text-center py-10 px-4">
                    <h2 className="text-xl font-semibold">No videos uploaded</h2>
                    <p className="text-gray-400 mt-2">
                        This page has yet to upload a video. Search another page in order to find more videos.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 pl-14 pb-10">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;




{/* <img
          className="w-full h-80 "
          src="https://static.vecteezy.com/system/resources/thumbnails/043/100/323/small/ai-generated-background-banner-postcard-for-world-environment-day-photo.jpg"
          alt="CoverImage"
        />

<img
            className="w-50 h-50 rounded-full border-4 border-white"
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" // Your base64 image
            alt="Profile Avatar"
          /> */}