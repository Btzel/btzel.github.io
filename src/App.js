import React, { useState } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "Multiplayer Tank Game",
      description: "A real-time multiplayer tank battle game built with Unity, featuring dynamic gameplay and player interaction. Players can control tanks in an arena-style environment and engage in exciting battles.",
      githubUrl: "https://github.com/Btzel/multiplayer-tank-game",
      demoUrl: "#",
      tags: ["Unity", "C#", "Multiplayer", "Game Development", "Networking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Burak Tüzel</h1>
            <nav className="space-x-4">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-3 py-2 rounded-md ${
                  activeTab === 'projects' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-3 py-2 rounded-md ${
                  activeTab === 'about' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                About
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'projects' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="mb-4 space-y-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://raw.githubusercontent.com/Btzel/multiplayer-tank-game/main/Images/Ingame1.png" 
                      alt="Tank Game Gameplay Screenshot 1" 
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://raw.githubusercontent.com/Btzel/multiplayer-tank-game/main/Images/Ingame2.png" 
                      alt="Tank Game Gameplay Screenshot 2" 
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {project.title === "Multiplayer Tank Game" && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Intelligent Bot System with strategic movement and targeting
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Real-time multiplayer combat with smooth networking
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Advanced bot AI featuring pathfinding and combat decisions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Dynamic battle arena with obstacles and strategy elements
                      </li>
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demoUrl}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-6">
              Highly motivated fresh graduate computer engineer with a strong interest in developing modern software solutions in the field. 
              Skilled in Python, C#, with practical experience in building Computer Vision, Machine Learning, Natural Language Processing, 
              Game Development projects. Eager to contribute to innovative projects while continuously learning and taking an active role in the industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">Python</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">C#</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">Computer Vision</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">Machine Learning</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">NLP</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">Game Development</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-gray-700">Computer Engineering Graduate</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Btzel"
                className="flex items-center text-gray-700 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-1" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/burak-tuzel21082001sftwr/"
                className="flex items-center text-gray-700 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="w-5 h-5 mr-1" />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
