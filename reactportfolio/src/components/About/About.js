import React, { Component } from "react";
import { VscAccount } from "react-icons/vsc";

class About extends Component {
  render() {
    return (
      <div className="container mx-auto px-4 py-12 bg-blue-100">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <VscAccount className="h-48 w-full object-cover md:h-full md:w-48 text-blue-600" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Software Engineer
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Abdullah
              </h2>
              <p className="mt-2 text-gray-500">
                As a Software Engineer with extensive experience in the field, I
                am highly skilled in designing, developing, and implementing
                software solutions. My expertise lies in programming languages
                like JavaScript, Python, and Java. I am passionate about
                building efficient and scalable applications, and I constantly
                strive to improve my skills and keep up with the latest industry
                trends.
              </p>
              <div className="mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
