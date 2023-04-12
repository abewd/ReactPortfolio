import React from "react";
import Image from "../../Assets/images/photo1.jpeg";
import Image2 from "../../Assets/images/photo2.jpeg";
import Image3 from "../../Assets/images/photo3.jpg";

function Portfolio(props) {
  const Projects = [
    {
      name: "Project 1",
      link: "https://github.com/abewd",
      image: Image,
    },
    {
      name: "Project 2",
      link: "https://github.com/abewd",
      image: Image2,
    },
    {
      name: "Project 3",
      link: "https://github.com/abewd",
      image: Image3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-blue-100">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Projects.map((item) => (
          <div
            key={item.name}
            className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              className="h-48 w-full object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {item.name}
              </div>
              <div className="mt-4">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
