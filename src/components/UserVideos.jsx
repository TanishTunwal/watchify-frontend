import React from 'react'
import VideoCard from './VideoCard'

function UserVideos() {
    return (
        <>
            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 pl-14 pb-10">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </>
    )
}

export default UserVideos