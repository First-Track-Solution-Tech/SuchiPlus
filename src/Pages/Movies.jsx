import React from "react";

const Movies = () => {
  const movieCategories = [
    {
      title: "Trending Now",
      movies: [
        { id: 1, name: "X-MEN", image: "/images/movie20.jpg" },
        { id: 2, name: "Iron Man", image: "/images/movie21.jpg" },
        { id: 3, name: "Lost Kingdom", image: "/images/movie22.jpg" },
        { id: 4, name: "Spider Man", image: "/images/movie37.jpg" },
        { id: 5, name: "Pathaan", image: "/images/movie24.jpg" },
      ],
    },
    {
      title: "Top Rated",
      movies: [
        { id: 6, name: "Jawan", image: "/images/movie25.jpg" },
        { id: 7, name: "Animal", image: "/images/movie26.jpg" },
        { id: 8, name: "Singham", image: "/images/movie27.jpg" },
        { id: 9, name: "Avatar", image: "/images/movie35.jpeg" },
        { id: 10, name: "RRR", image: "/images/movie29.jpg" },
      ],
    },
    {
      title: "New Releases",
      movies: [
        { id: 11, name: "DUNKI", image: "/images/movie30.jpg" },
        { id: 12, name: "Tiger3", image: "/images/movie31.jpg" },
        { id: 13, name: "War", image: "/images/movie32.jpg" },
        { id: 14, name: "Padmaavati", image: "/images/movie33.jpg" },
        { id: 15, name: "RAEES", image: "/images/movie34.jpg" },
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