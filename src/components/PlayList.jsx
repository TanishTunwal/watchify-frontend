import React from "react";
import { MdPlaylistPlay } from "react-icons/md";
import PlaylistCard from "./PlaylistCard";

function PlayList() {
  const playlists = [
    { title: "Web Development", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQ0dgudbe1P7GgSnFw3xsTCTaZ0E4craRmA&s", videoCount: 15 },
    { title: "React Tutorials", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQ0dgudbe1P7GgSnFw3xsTCTaZ0E4craRmA&s", videoCount: 10 },
    { title: "JavaScript Basics", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQ0dgudbe1P7GgSnFw3xsTCTaZ0E4craRmA&s", videoCount: 20 },
    { title: "Machine Learning", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQ0dgudbe1P7GgSnFw3xsTCTaZ0E4craRmA&s", videoCount: 8 },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-black text-white">
      <div className="max-w-screen-xl w-full mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <MdPlaylistPlay size={28} className="text-white" />
          <h2 className="text-2xl font-bold">Playlists</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayList;
