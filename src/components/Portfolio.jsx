import React, { useState } from "react";
import { FiCode, FiBook, FiAward } from "react-icons/fi";
import p1 from "../assets/p1.png";
import ai from "../assets/ai.jpg";
import project2 from "../assets/projects/project-2.jpg";

const Portfolio = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const projects = [
    {
      title: "DevSecOps Pipeline for Netflix Clone on Kubernetes",
      description:
        "Implemented a secure and automated DevSecOps pipeline for deploying a Netflix clone application on Kubernetes. The pipeline includes stages for code linting, security scanning, testing, and automated deployment.",
      stack: "Kubernetes, Docker, Jenkins, GitHub, Terraform",
      image: p1,
      icon: <FiCode />,
      link: "https://com", // Add the link to your project here
    },
    {
      title: "AI Interview Bot",
      description:
        "Developed an AI-powered chatbot for conducting interviews. The chatbot uses natural language processing (NLP) techniques to understand and respond to interview questions. It provides real-time feedback and evaluation to candidates.",
      stack: "Python, TensorFlow, Natural Language Processing (NLP), Dialogflow",
      image: ai.jpg,
      icon: <FiBook />,
      link: "https://.com", // Add the link to your project here
    },
    {
      title: "Deploy Website on Azure Blob Storage using Terraform",
      description:
        "Deployed a static website on Azure Blob Storage using Terraform for infrastructure provisioning and management. Configured CDN (Content Delivery Network) for improved performance and scalability.",
      stack: "Azure Blob Storage, Terraform, Azure CDN",
      image: project2,
      icon: <FiAward />,
      link: "https://example.com", // Add the link to your project here
    },
    // Add more projects here
  ];

  const contentMap = {
    All: [...projects],
    Projects: projects,
    Certifications: [], // No certifications provided in this example
  };

  const renderProjectCards = (content) => {
    return content.map((item, index) => (
      <a
        key={index}
        href={item.link} // Link to project
        target="_blank" // Open in new tab
        rel="noopener noreferrer" // Security measure
        className="flex justify-center items-center transition-transform duration-300 hover:scale-105"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto mb-6">
          <div className="p-4">
            <div className="flex items-center mb-2">
              <div className="mr-2 text-blue-500">{item.icon}</div> {/* Adjusted margin */}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover mb-2 rounded-lg" // Adjusted height and margin
            />
            <p className="text-gray-700 text-sm mb-2">{item.description}</p> {/* Adjusted font size */}
            <p className="text-gray-700 text-sm">{item.stack}</p> {/* Adjusted font size */}
          </div>
        </div>
      </a>
    ));
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Portfolio</h2>
      <div className="flex justify-center mb-4">
        <button
          className={`mr-4 ${
            selectedOption === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleOptionChange("All")}
        >
          All
        </button>
        <button
          className={`mr-4 ${
            selectedOption === "Projects"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleOptionChange("Projects")}
        >
          Projects
        </button>
        <button
          className={`mr-4 ${
            selectedOption === "Certifications"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleOptionChange("Certifications")}
        >
          Certifications
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {renderProjectCards(contentMap[selectedOption])}
      </div>
    </section>
  );
};

export default Portfolio;
