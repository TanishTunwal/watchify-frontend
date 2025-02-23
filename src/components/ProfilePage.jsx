import { MdSubscriptions } from "react-icons/md";
import PlayList from "./PlayList";
import UserVideos from "./UserVideos";
import { useState, useEffect } from "react";
import TweetCards from "./TweetCards";

function ProfilePage() {
    const tabs = ["videos", "playlists", "tweets", "subscribed"];

    // Retrieve active tab from localStorage (persist after refresh)
    const getStoredTab = () => localStorage.getItem("activeTab") || "videos";
    const [activeTab, setActiveTab] = useState(getStoredTab);

    // Update localStorage whenever tab changes
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    return (
        <div className="w-screen h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
            <aside className="hidden md:block w-[250px] bg-black min-h-screen"></aside>
            <div className="w-full h-full flex flex-col overflow-y-auto">
                {/* Cover Image */}
                <img
                    className="w-full h-80 object-cover"
                    src="https://static.vecteezy.com/system/resources/thumbnails/043/100/323/small/ai-generated-background-banner-postcard-for-world-environment-day-photo.jpg"
                    alt="CoverImage"
                />

                {/* Profile Section */}
                <div className="relative flex flex-col md:flex-row items-center px-6 py-4 rounded-lg mt-[-40px] mx-4 md:mx-6 shadow-lg bg-black">
                    <img
                        className="w-24 h-24 rounded-full border-4 border-white"
                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
                        alt="Profile Avatar"
                    />
                    <div className="md:ml-4 mt-3 md:mt-0 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-semibold">Tanish Tunwal</h2>
                        <h4 className="text-gray-400">@TanishHere</h4>
                        <h4 className="text-gray-300">1,220,000 Subscribers</h4>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-auto">
                        <button className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                            <MdSubscriptions /> Subscribe
                        </button>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-0.5 bg-white"></div>

                {/* Tab Navigation */}
                <div className="w-full bg-black sticky top-0 z-10">
                    <div className="flex justify-center md:justify-start px-6 py-3 whitespace-nowrap space-x-6">
                        {tabs.map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)} 
                                className={`px-4 py-2 rounded transition duration-300 ${
                                    activeTab === tab ? "bg-gray-700" : "hover:bg-gray-700"
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-0.5 bg-white"></div>

                {/* Tab Content */}
                <div className="py-10 px-4">
                    {activeTab === "videos" && <UserVideos />}
                    {activeTab === "playlists" && <PlayList />}
                    {activeTab === "tweets" && <TweetCards />}

                    {/* Fallback messages (only when no content) */}
                    {activeTab === "tweets" && (
                        <p className="text-gray-400 mt-2">No tweets available.</p>
                    )}
                    {activeTab === "subscribed" && (
                        <p className="text-gray-400 mt-2">No subscriptions available.</p>
                    )}
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