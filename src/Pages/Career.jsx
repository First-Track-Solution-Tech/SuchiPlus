import React from "react";

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Bangalore",
      type: "Full Time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part Time",
    },
    {
      id: 4,
      title: "Digital Marketing Executive",
      location: "Delhi",
      type: "Full Time",
    },
  ];

  return (
    <div className="min-h-screenbg-gradient-to-r from-blue-800 via-black to-blue-900 text-white px-6 pt-28">
      <h1 className="text-4xl font-bold text-center mb-10">Careers</h1>

      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Join our team and help us build amazing entertainment experiences for
        millions of users around the world.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-400">Location: {job.location}</p>
            <p className="text-gray-400 mb-4">Type: {job.type}</p>

            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;