import React, { useState } from "react";

const movies = [
  { id: 1, img: "/images/movie1.png", title: "No Time To Die" },
  { id: 2, img: "/images/movie2.png", title: "Spider Man" },
  { id: 3, img: "/images/movie3.png", title: "KGF" },
  { id: 4, img: "/images/movie4.png", title: "Jurassic World" },
  { id: 5, img: "/images/movie5.png", title: "BATMAN" },
  { id: 6, img: "/images/movie6.png", title: "Extraction" },
  { id: 7, img: "/images/movie7.png", title: "Sooryavanshi" },
  { id: 8, img: "/images/movie8.png", title: "Jawan" },
  { id: 9, img: "/images/movie9.png", title: "John Wick" },
  { id: 10, img: "/images/movie10.png", title: "Mission Impossible" },
  { id: 11, img: "/images/movie20.jpg", title: "X-MEN" },
  { id: 12, img: "/images/movie21.jpg", title: "Iron Man" },
  { id: 13, img: "/images/movie26.jpg", title: "Animal" },
  { id: 14, img: "/images/movie27.jpg", title: "Singham" },
  { id: 15, img: "/images/movie24.jpg", title: "Pathaan" },
];

const Search = () => {
  const [searchText, setSearchText] = useState("");

  // Filter movies
  const filteredMovies =
    searchText.trim() === ""
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-black text-white pt-35 px-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Search Movies</h1>

      {/* Search Bar */}
      <div className="flex justify-center gap-2 mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 w-72"
        />
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <p className="mt-2 text-sm text-center font-semibold">
                {movie.title}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-lg">
            Movie not found
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
