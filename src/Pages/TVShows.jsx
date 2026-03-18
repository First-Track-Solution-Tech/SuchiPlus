import React from "react";

const TVShows = () => {
  const tvCategories = [
    {
      title: "Popular Series",
      shows: [
        { id: 1, name: "Midnight Files", image: "/images/wb1.jpg" },
        { id: 2, name: "Empire Rising", image: "/images/wb2.jpg" },
        { id: 3, name: "The Unknown", image: "/images/wb3.png" },
        { id: 4, name: "Urban Legends", image: "/images/wb4.png" },
        { id: 5, name: "Skyline 2040", image: "/images/wb5.png" },
      ],
    },
    {
      title: "Top Drama",
      shows: [
        { id: 6, name: "Broken Truth", image: "/images/wb6.png" },
        { id: 7, name: "Hidden Lies", image: "/images/wb7.png" },
        { id: 8, name: "Royal Blood", image: "/images/wb8.png" },
        { id: 9, name: "The Long Road", image: "/images/wb9.png" },
        { id: 10, name: "After Dark", image: "/images/wb10.png" },
      ],
    },
    {
      title: "Sci-Fi Originals",
      shows: [
        { id: 11, name: "Future Code", image: "/images/wb11.png" },
        { id: 12, name: "Alien Protocol", image: "/images/wb12.png" },
        { id: 13, name: "Parallel World", image: "/images/wb13.png" },
        { id: 14, name: "Cyber Matrix", image: "/images/wb14.png" },
        { id: 15, name: "Dark Universe", image: "/images/wb15.jpg" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-40 px-6 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">TV Shows</h1>

      {tvCategories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {category.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {category.shows.map((show) => (
              <div
                key={show.id}
                className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={show.image}
                    alt={show.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-3 text-center text-sm bg-gray-900">
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