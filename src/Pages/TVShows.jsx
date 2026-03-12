import React from "react";

const TVShows = () => {
  const tvCategories = [
    {
      title: "Popular Series",
      shows: [
        { id: 1, name: "Squid Game3", image: "/images/korean1.jpg" },
        { id: 2, name: "Bussiness Proposal", image: "/images/korean2.jpg" },
        { id: 3, name: "Squid Game", image: "/images/korean3.jpg" },
        { id: 4, name: "Vincenzo", image: "/images/korean4.jpg" },
        { id: 5, name: "Skyline 2040", image: "/images/korean5.jpg" },
      ],
    },
    {
      title: "Top Drama",
      shows: [
        { id: 6, name: "Decendents", image: "/images/korean6.jpg" },
        { id: 7, name: "Hidden Lies", image: "/images/korean7.jpg" },
        { id: 8, name: "Sweet Home", image: "/images/korean8.jpg" },
        { id: 9, name: "hotel Del Luna", image: "/images/korean9.jpg" },
        { id: 10, name: "Romance", image: "/images/korean10.jpg" },
      ],
    },
    {
      title: "Sci-Fi Originals",
      shows: [
        { id: 11, name: "the Thriler", image: "/images/korean11.jpg" },
        { id: 12, name: "School Drama", image: "/images/korean12.jpg" },
        { id: 13, name: "Fantacsy", image: "/images/korean13.jpg" },
        { id: 14, name: "SCI-FI", image: "/images/korean14.jpg" },
        { id: 15, name: "Myster Thriller", image: "/images/korean15.jpg" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-40 px-6 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">TV Shows</h1>

      {tvCategories.map((category, index) => (
        <div key={index} className="mb-15">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {category.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {category.shows.map((show) => (
              <div
                key={show.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={show.image}
                  alt={show.name}
                  className="w-full h-64 object-cover"
                />

                {/* Title */}
                <div className="p-3 text-center text-sm">
                  {show.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TVShows;