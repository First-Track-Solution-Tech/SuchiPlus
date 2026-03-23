import React from "react";

const TVShows = () => {
  const tvCategories = [
    {
      title: "Popular Series",
      shows: [
        { id: 1, name: "Squid Game", image: "/images/wb1.jpg" },
        { id: 2, name: "Decendents Of The Sun", image: "/images/wb2.jpg" },
        { id: 3, name: "Romance", image: "/images/wb3.png" },
        { id: 4, name: "RED ONE", image: "/images/wb21.jpg" },
        { id: 5, name: "Harry Porter", image: "/images/wb22.jpg" },
      ],
    },
    {
      title: "Top Drama",
      shows: [
        { id: 6, name: "School Drama", image: "/images/wb5.png" },
        { id: 7, name: "Cyber Net", image: "/images/wb23.jpg" },
        { id: 8, name: "World of Ancients", image: "/images/wb24.jpg" },
        { id: 9, name: "Ground's Hero", image: "/images/wb25.jpg" },
        { id: 10, name: "River of Hope", image: "/images/wb26.jpg" },
      ],
    },
    {
      title: "Sci-Fi Originals",
      shows: [
        { id: 11, name: "A story of Resilience ", image: "/images/wb27.jpg" },
        { id: 12, name: "Fear Lives In Dark", image: "/images/wb28.jpg" },
        { id: 13, name: "A Love Story That Soars", image: "/images/wb29.jpg" },
        { id: 14, name: "One Man One Mission", image: "/images/wb30.jpg" },
        { id: 15, name: "All of Us are DEAD", image: "/images/wb15.jpg" },
      ],
    },
     {
      title: "Sci-Fi Originals",
      shows: [
        { id: 11, name: "Fantacy", image: "/images/wb6.png" },
        { id: 12, name: "SCI-FI", image: "/images/wb7.png" },
        { id: 13, name: "Mystery Threller", image: "/images/wb8.png" },
        { id: 14, name: "Period Drama", image: "/images/wb12.png" },
        { id: 15, name: "Comedy Series", image: "/images/wb11.png" },
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