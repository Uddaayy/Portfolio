import React from 'react';
import { Menu, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">Uday Prabhas</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Compute Science Student
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate about building scalable web applications and solving complex problems
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <a href="https://github.com/Uddaayy/" className="text-gray-500 hover:text-gray-700">
                  <Github className="h-6 w-6" />
                </a>
                <a href="www.linkedin.com/in/uday-prabhas" className="text-gray-500 hover:text-gray-700">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:udayprabhas005@gmail.com" className="text-gray-500 hover:text-gray-700">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
            <div className="space-y-12">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Salesforce Developer Virtual Internship</h3>
                    <p className="text-gray-600">Salesforce</p>
                  </div>
                  <span className="text-gray-500">Nov 2024 - Jan 2025</span>
                </div>
                <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                  <li>Acquired in-depth knowledge of Salesforce CRM platform, including customization, automation, and integration.</li>
                  <li>Developed expertise in using Salesforce tools like Flow, Apex, SOQL, and Lightning Web Components (LWC).</li>
                  <li> Workedonthe FoodConnect project, leveraging Salesforce to create solutions for food distribution and community
                  support.</li>
                </ul>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Datapro MERN Workshop</h3>
                    <p className="text-gray-600">Datapro</p>
                  </div>
                  <span className="text-gray-500">Aug - Sep 2024</span>
                </div>
                <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                  <li> Acquired strong skills in the MERN (MongoDB, Express.js, React, Node.js) stack, enabling full-stack web devel
                  opment proficiency.</li>
                  <li> Successfully built a project that integrates food reviews and nutritional insights using React.js and MongoDB</li>
                  <li>Collaborated with cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">HTML/CSS</p>
                  <p className="text-gray-600">React</p>
                  <p className="text-gray-600">JavaScript</p>
                  <p className="text-gray-600">Tailwind CSS</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Backend</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Node.js</p>
                  <p className="text-gray-600">Express</p>
                  <p className="text-gray-600">MongoDB</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Languages & Tools</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">C/C++</p>
                  <p className="text-gray-600">Java and Python(Basics)</p>
                  <p className="text-gray-600">Git/Github</p>
                  <p className="text-gray-600">Docker</p>
                  <p className="text-gray-600">VSCode</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Foodie Application</h3>
                <p className="text-gray-600 mb-4">
                A Website based on MERN STACK for user knowledge.
                </p>
                <p className="text-gray-600 mb-4">
                Facilitating users to bookmark the food they want to have.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="https://food-eta-five.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Zomato Listing and Searching Application</h3>
                <p className="text-gray-600 mb-4">
                A MERN STACK-based project for restaurant discovery and filtering.
                </p>
                <p className="text-gray-600 mb-4">
                Implemented restaurant search with filters based on location, cuisine, price, and images.
                </p>
                <p className="text-gray-600 mb-4">
                Enabled restaurant listings with pagination and detailed restaurant information.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="https://github.com/industry-ready-2026/webapp-Uddaayy" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Food Connect</h3>
                <p className="text-gray-600 mb-4">
                Implemented automated workflows, data models, and user interfaces using Apex, Visualforce, and Process Builder.


                </p>
                <p className="text-gray-600 mb-4">
                Developed a cloud-based platform using Salesforce to connect food donors with NGOs and individuals in need.
                </p>
                <p className="text-gray-600 mb-4">
                Enabled real-time inventory tracking, donor-NGO matching, and streamlined food distribution.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="https://github.com/Uddaayy/Salesforce-Virtual-Internship" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">URL Shortener</h3>
                <p className="text-gray-600 mb-4">
                A Web application that facilitates the user by shortening the URL.
                </p>
                <p className="text-gray-600 mb-4">
                Tools used: Reactjs, MongoDB, Nodejs, Express.
                </p>
            
                <div className="flex items-center space-x-4">
                  <a href="https://github.com/Uddaayy/ShortURL" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>© 2022-26 Uday Prabhas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;