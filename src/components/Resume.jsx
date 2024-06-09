import React from 'react';

const Resume = () => {
  return (
    <section className="p-4 ">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-3xl font-bold mb-6">Kiran Waghmare</h2>
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <div>
            <p className="text-gray-600">Email: waghmarek749@gmail.com</p>
            <p className="text-gray-600">Phone: (+91)-8779450943</p>
          </div>
          <div>
            <p className="text-gray-600">Location: Mumbai, India</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Professional Summary:</h3>
          <p className="text-gray-700">Results-driven BE Computer Engineer adept in DevOps methodologies, CI/CD pipelines, and automation tools. Eager to leverage expertise to optimize development processes and drive operational efficiency. Seeking to contribute as a DevOps Engineer in a forward-thinking organization.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>B.E Computer Engineering (SPPU) | PK Technical Campus, Pune (Dec 2021 – June 2024)</li>
            <li>Diploma Computer Engineering, Mumbai | Maratha Mandir's Babasaheb Gawde Institute of Technology | 81.94% (Aug’17-June 2021)</li>
            <li>SSC | Airport High School, Mumbai (MSBHSE) | 67.40% | 2017</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Technical Skills:</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <div>CI/CD Tool: Jenkins, Azure DevOps</div>
            <div>Build Tool: Maven</div>
            <div>Security Tools: OWASP Dependency Check, TRIVY</div>
            <div>Containerization Tool: Docker</div>
            <div>Cloud Platform: Azure Cloud</div>
            <div>Ticketing Tool: JIRA</div>
            <div>Operating System: Windows, Linux</div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Projects:</h3>
          <div>
            <h4 className="font-semibold mb-1">Project 1</h4>
            <p className="text-gray-700">Tools & Technology Used: Azure CLI, Ubuntu Server, Jenkins, Grafana Prometheus, SonarQube, Docker Hub.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Implemented a robust DevSecOps pipeline for Netflix clone deployment on Kubernetes using Azure CLI and Ubuntu Server VM.</li>
              <li>Streamlined CI/CD workflows with Jenkins for automated building, testing, and deployment.</li>
              <li>Implemented monitoring with Grafana and Prometheus for real-time insights and proactive issue resolution.</li>
              <li>Enforced code quality and security standards with SonarQube.</li>
              <li>Implemented real-time notifications and optimized resource management.</li>
              <li>Secured Docker image deployment to Docker Hub for seamless accessibility.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-1">Project 2</h4>
            <p className="text-gray-700">Tools & Technology Used: Backend: Python, FastAPI Frontend: React, Vite APIs: OpenAI, Azure Speech Testing: Postman</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed robust backend API with Python and FastAPI.</li>
              <li>Created responsive frontend components using React and Vite.</li>
              <li>Integrated OpenAI for natural language processing.</li>
              <li>Implemented Azure Speech for text-to-speech functionality.</li>
              <li>Conducted thorough API testing with Postman.</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <div>
            <p className="text-gray-700">Web Development and Design Intern | Milestone Inc, Mumbai (Feb '23 - Mar '23)</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Led the design and content creation for a business website using ReactJS, NodeJS, HTML, and TailwindCSS.</li>
              <li>Ensured alignment with company branding and objectives through collaborative efforts.</li>
              <li>Implemented responsive design principles for enhanced user experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
