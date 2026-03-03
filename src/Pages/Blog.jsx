import React from "react";

const Blog = () => {
  const vlogs = [
    {
      id: 1,
      title: "Behind The Scenes of SuchiPlus",
      image: "/images/movie1.png",
      desc: "Explore how we create amazing streaming experiences."
    },
    {
      id: 2,
      title: "Top 10 Movies of 2026",
      image: "/images/movie2.png",
      desc: "Check out the most popular movies this year."
    },
    {
      id: 3,
      title: "Interview with Our Developers",
      image: "/images/movie3.png",
      desc: "Meet the team behind SuchiPlus platform."
    },
    {
      id: 4,
      title: "How We Design UI/UX",
      image: "/images/movie4.png",
      desc: "A deep dive into our design process."
    },
    {
      id: 5,
      title: "Streaming Technology Explained",
      image: "/images/movie5.png",
      desc: "Learn how streaming works behind the scenes."
    },
    {
      id: 6,
      title: "Upcoming Features Sneak Peek",
      image: "/images/movie6.png",
      desc: "See what exciting features are coming next."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-800 to-blue-900 text-white pt-28 px-6">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        SuchiPlus Vlogs
      </h1>

      {/* Featured Vlog */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/banner_bg.png"
            alt="Featured Vlog"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Vlog: Inside SuchiPlus
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Take a look at how SuchiPlus works behind the scenes and how we bring
              entertainment to millions of users.
            </p>
            <button className="mt-6 bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
              Watch Now ▶
            </button>
          </div>
        </div>
      </div>

      {/* Vlog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {vlogs.map((vlog) => (
          <div
            key={vlog.id}
            className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
          >
            <img
              src={vlog.image}
              alt={vlog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{vlog.title}</h3>
              <p className="text-gray-400 text-sm">{vlog.desc}</p>
              <button className="mt-4 text-blue-400 hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © 2026 SuchiPlus. All Rights Reserved.
      </div>
    </div>
  );
};

export default Blog;
