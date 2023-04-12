import React, { Component } from "react";
import { VscAccount } from "react-icons/vsc";

class About extends Component {
  render() {
    return (
      <div className="text-lg font-medium text-blue-800 my-30 bg-blue-100">
        <br />

        <VscAccount className="inline-block text-7xl align-middle" />
        <br />
        <br />

        <p className="inline-block mr-4 text-2xl">About Me</p>
        <br />
        <p className="inline-block mr-4 text-1xl">
          I am Abdullah and I am a Software Engineer
        </p>
        <br />
        <p className="inline-block mr-4 text-1xl">
          I am Abdullah and I am a Software Engineer
        </p>
        <br />
        <p className="inline-block mr-4 text-1xl">
          I am Abdullah and I am a Software Engineer
        </p>
        <br />
        <p className="inline-block mr-4 text-1xl">
          I am Abdullah and I am a Software Engineer
        </p>
        <br />
      </div>
    );
  }
}

export default About;
