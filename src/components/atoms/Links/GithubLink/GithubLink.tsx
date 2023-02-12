import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubLink = () => {
  return (
    <a
      href="https://github.com/jorgelhd94"
      target="_blank"
      className="flex px-2 py-1 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md"
    >
      <FontAwesomeIcon icon={faGithub} className="w-6 h-6"></FontAwesomeIcon>
    </a>
  );
};

export default GithubLink;
