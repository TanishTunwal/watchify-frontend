import React from "react";

function TweetCards() {
    const tweets = [
            { content: "React is awesome! 🚀", author: "John Doe" },
            { content: "Tailwind CSS makes styling so easy!", author: "Jane Smith" },
          ];
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      {tweets.length === 0 ? (
        <p className="text-gray-400 text-center">No tweets available</p>
      ) : (
        tweets.map((tweet, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-800 transition">
            <p className="text-white">{tweet.content}</p>
            <p className="text-gray-500 text-sm mt-2">- {tweet.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TweetCards;
