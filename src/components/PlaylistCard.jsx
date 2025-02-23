function PlaylistCard({ title, thumbnail, videoCount }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300 overflow-hidden">
      <div className="w-full aspect-video overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src={thumbnail} alt={title} />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{videoCount} videos</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
