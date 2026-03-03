import React from "react";

const trendingMovies = [
  { id: 1, img: "/images/movie1.png", badge: "Recently added" },
  { id: 2, img: "/images/movie2.png", badge: "Recently added" },
  { id: 3, img: "/images/movie3.png", badge: "Top 10" },
  { id: 4, img: "/images/movie4.png", badge: "Recently added" },
  { id: 5, img: "/images/movie5.png", badge: "Recently added" },
  { id: 6, img: "/images/movie6.png", badge: "Top 10" },
  { id: 7, img: "/images/movie7.png", badge: "Recently added" },
  { id: 8, img: "/images/movie8.png", badge: "Recently added" },
  { id: 9, img: "/images/movie9.png", badge: "Top 10" },
  { id: 10, img: "/images/movie10.png", badge: "Recently added" },
];

const TrendingSection = () => {
  return (
    <section className="bg-black px-10 py-16 text-white">
      {/* Scrollbar Hide Style (inside same file) */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <h2 className="text-3xl font-bold mb-4">Trending Now</h2>

      <div className="flex gap-4 mb-10">
        <select className="bg-black border border-gray-600 px-4 py-2 rounded">
          <option>India</option>
          <option>Global</option>
        </select>

        <select className="bg-black border border-gray-600 px-4 py-2 rounded">
          <option>Movies</option>
          <option>TV Shows</option>
        </select>
      </div>

      {/* Manual Scroll without visible scrollbar */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            className="relative min-w-[250px] group transition-transform duration-500 hover:scale-105"
          >
            <img
              src={movie.img}
              alt="movie"
              className="w-[250px] h-[350px] rounded-xl object-cover"
            />

            <span className="absolute top-3 left-3 text-3xl font-extrabold text-white bg-black/60 px-2 py-1 rounded-md">
              {movie.id}
            </span>

            {movie.badge && (
              <span className="absolute bottom-3 left-3 bg-red-600 text-xs px-2 py-1 rounded">
                {movie.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* More Reasons Section */}
      <h2 className="text-3xl font-bold mt-20 mb-8">
        More reasons to join
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-b from-blue-900 to-black p-10 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Enjoy on your TV</h3>
          <p className="text-gray-300 text-sm">
            Watch on smart TVs, PlayStation, Xbox and more.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-black p-10 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Download your shows
          </h3>
          <p className="text-gray-300 text-sm">
            Save favourites and watch offline.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-black p-10 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Watch everywhere</h3>
          <p className="text-gray-300 text-sm">
            Stream on phone, tablet and TV.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-black p-10 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Kids profiles
          </h3>
          <p className="text-gray-300 text-sm">
            Safe space for children.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;