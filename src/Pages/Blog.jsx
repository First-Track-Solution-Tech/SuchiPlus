import React from "react";
import { FaFire, FaArrowRight } from "react-icons/fa";

const Blog = () => {

  const blogs = [
    {
      id: 1,
      title: "Inside SuchiPlus Streaming Technology",
      desc: "Discover the technology that powers smooth and high quality streaming.",
      image: "/images/Blog1.jpg",
      category: "Technology"
    },
    {
      id: 2,
      title: "Top Movies Everyone Is Watching",
      desc: "Explore the most watched movies on SuchiPlus this month.",
      image: "/images/Blog2.jpg",
      category: "Movies"
    },
    {
      id: 3,
      title: "Meet Our Development Team",
      desc: "A behind the scenes look at the people building SuchiPlus.",
      image: "/images/Blog3.jpg",
      category: "Interview"
    },
    {
      id: 4,
      title: "Designing the SuchiPlus Experience",
      desc: "How our UI/UX team builds a simple and elegant experience.",
      image: "/images/Blog4.jpg",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 px-6">

      {/* Page Title */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-3">SuchiPlus Blog</h1>
        <p className="text-gray-400">Stories, technology and updates from our team</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer">Technology</li>
              <li className="hover:text-blue-400 cursor-pointer">Movies</li>
              <li className="hover:text-blue-400 cursor-pointer">Design</li>
              <li className="hover:text-blue-400 cursor-pointer">Interview</li>
              <li className="hover:text-blue-400 cursor-pointer">Updates</li>
            </ul>
          </div>

          {/* Trending */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <FaFire />
              <h3 className="text-lg font-semibold">Trending</h3>
            </div>

            <ul className="space-y-4 text-sm text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Why Streaming Platforms Are Growing Fast
              </li>

              <li className="hover:text-white cursor-pointer">
                Best Movies Coming in 2026
              </li>

              <li className="hover:text-white cursor-pointer">
                Future of Online Entertainment
              </li>

            </ul>

          </div>

        </div>

        {/* Blog Content */}
        <div className="md:col-span-3 space-y-10">

          {/* Featured Blog */}
          <div className="relative rounded-2xl overflow-hidden group">

            <img
              src="/images/BlogBanner.jpg"
              alt="featured"
              className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <div className="absolute bottom-8 left-8 max-w-lg">
              <h2 className="text-3xl font-bold mb-2">
                Behind the Scenes of SuchiPlus
              </h2>

              <p className="text-gray-300 mb-4">
                Learn how our engineers and designers build a seamless
                streaming experience for millions of viewers.
              </p>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                Read Story <FaArrowRight />
              </button>
            </div>

          </div>

          {/* Blog List */}
          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="flex flex-col md:flex-row gap-6 bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-blue-500 transition"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-60 h-40 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-center">

                <span className="text-xs text-blue-400 mb-2">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {blog.desc}
                </p>

                <button className="text-blue-400 flex items-center gap-2 hover:text-blue-300">
                  Read Article <FaArrowRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-6 pb-10">
© SuchiPlus, Copyright ©2026, First Track Solution Technologies. All rights reserved      </div>

    </div>
  );
};

export default Blog;