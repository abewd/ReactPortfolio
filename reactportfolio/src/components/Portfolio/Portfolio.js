import React from "react";
import Project from "../Project/Project";
import Image from "../../Assets/images/photo1.jpeg";
import Image2 from "../../Assets/images/photo2.jpeg";
import Image3 from "../../Assets/images/photo3.jpg";

function Portfolio(props) {
  var Projects = [
    {
      name: "project1",
      link: "https://github.com/abewd",
      image: Image,
    },
    {
      name: "project2",
      link: "https://github.com/abewd",
      image: Image2,
    },
    {
      name: "project3",
      link: "https://github.com/abewd",
      image: Image3,
    },
  ];
  return (
    <div className="project-container">
      {Projects.map((item) => {
        return <Project item={item} />;
      })}
    </div>
  );
}

export default Portfolio;
