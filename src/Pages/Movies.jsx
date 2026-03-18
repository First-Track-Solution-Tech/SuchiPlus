import React from "react";

const Movies = () => {
  const movieCategories = [
    {
      title: "Trending Now",
      movies: [
        { id: 1, name: "Shadow War", image: "/images/movie1.png" },
        { id: 2, name: "Cyber City", image: "/images/movie2.png" },
        { id: 3, name: "Lost Kingdom", image: "/images/movie3.png" },
        { id: 4, name: "Dark Mission", image: "/images/movie4.png" },
        { id: 5, name: "Silent Storm", image: "/images/movie5.png" },
      ],
    },
    {
      title: "Top Rated",
      movies: [
        { id: 6, name: "Red Horizon", image: "/images/movie6.png" },
        { id: 7, name: "Infinite Loop", image: "/images/movie7.png" },
        { id: 8, name: "The Final Code", image: "/images/movie8.png" },
        { id: 9, name: "Neon Night", image: "/images/movie9.png" },
        { id: 10, name: "Last Empire", image: "/images/movie10.png" },
      ],
    },
    {
      title: "New Releases",
      movies: [
        { id: 11, name: "Quantum Edge", image: "/images/movie1.png" },
        { id: 12, name: "Sky Hunter", image: "/images/movie2.png" },
        { id: 13, name: "The Awakening", image: "/images/movie3.png" },
        { id: 14, name: "Zero Gravity", image: "/images/movie4.png" },
        { id: 15, name: "Crimson Tide", image: "/images/movie5.png" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-40 px-6 pb-20">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Movies
      </h1>

      {movieCategories.map((category, index) => (
        <div key={index} className="mb-12">
          
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {category.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            
            {category.movies.map((movie) => (
              <div
                key={movie.id}
                className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer group"
              >
                {/* Movie Poster */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-3 text-center text-sm bg-gray-900">
                  {movie.name}
                </div>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;