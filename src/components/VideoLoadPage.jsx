import  { useState } from 'react';
import Image from "../images/SampleVideo_1280x720_5mb.mp4";
import { FaThumbsUp, FaShare, FaPlus } from "react-icons/fa";

function VideoLoadPage() {
    const [subscribed, setSubscribed] = useState(false);
    // const [Like,setLike] = useState(false)

    return (
        <div className='flex flex-col md:flex-row justify-start items-start text-white w-screen h-screen bg-black p-4 overflow-auto'>
            <div className='w-full md:w-[70%] lg:w-[65%] md:pl-20 pt-10'>
                <div className='container w-full h-[60vh] bg-gray-600 rounded-xl p-4'>
                    <video src={Image} controls className='w-full h-full rounded-xl'></video>
                </div>
                <div className='container mt-4 p-4 bg-gray-700 rounded-xl'>
                    <div className='flex items-center'>
                        <div className='w-14 h-14 bg-gray-500 rounded-full'></div>
                        <div className='ml-4'>
                            <p className='font-bold text-lg'>Channel Name</p>
                            <p className='text-sm text-gray-300'>Subscribers</p>
                        </div>
                        <button
                            className={`ml-auto px-4 py-2 rounded-lg ${subscribed ? 'bg-gray-500' : 'bg-red-600'}`}
                            onClick={() => setSubscribed(!subscribed)}
                        >
                            {subscribed ? "Unsubscribe" : "Subscribe"}
                        </button>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <button className='bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2'>
                            <FaThumbsUp className='text-white' /> Like
                        </button>
                        <button className='bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2'>
                            <FaShare className='text-white' /> Share
                        </button>
                        <button className='bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2'>
                            <FaPlus className='text-white' /> Add to Playlist
                        </button>
                    </div>
                    <div className='mt-4 bg-gray-800 p-3 rounded-lg text-gray-300 text-sm'>
                        <p className='font-semibold text-white'>Video Title</p>
                        <p className='mt-2'>
                            This is a sample video description. It gives an overview of the content,
                            topics covered, and any relevant details the viewer might need.
                        </p>
                        <button className='mt-2 text-blue-400 hover:underline'>Show more</button>
                    </div>
                </div>
                <div className='container mt-4 p-4 bg-gray-700 rounded-xl'>
                    <p className='font-bold mb-2 text-lg'>Comments</p>
                    <input type='text' placeholder='Add a comment...' className='w-full p-2 bg-gray-800 rounded-lg mb-4' />
                    <div className='mt-2'>
                        <div className='flex items-center mb-2'>
                            <div className='w-10 h-10 bg-gray-500 rounded-full'></div>
                            <p className='ml-2'>User 1: Nice video!</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <div className='w-10 h-10 bg-gray-500 rounded-full'></div>
                            <p className='ml-2'>User 2: Very informative.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[25%] lg:w-[30%] mt-4 md:mt-0 p-4 md:ml-6 bg-gray-800 rounded-xl'>
                <p className='font-bold mb-4 text-lg'>Suggested Videos</p>
                <div className='flex flex-col gap-4'>
                    <div className='w-full h-[10vh] bg-gray-600 rounded-lg'></div>
                    <div className='w-full h-[10vh] bg-gray-600 rounded-lg'></div>
                    <div className='w-full h-[10vh] bg-gray-600 rounded-lg'></div>
                    <div className='w-full h-[10vh] bg-gray-600 rounded-lg'></div>
                    <div className='w-full h-[10vh] bg-gray-600 rounded-lg'></div>
                    <div className='w-full h-[10vh] bg-gray-600 rounded-lg'></div>
                </div>
            </div>
        </div>
    );
}


export default VideoLoadPage