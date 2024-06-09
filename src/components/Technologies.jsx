import React from 'react';
import { SiTerraform, SiJenkins, SiKubernetes, SiAzuredevops, SiMongodb, SiMysql, SiAnsible,SiMicrosoftazure,SiDocker } from 'react-icons/si';

const Technologies = () => {
  const technologies = [
    { icon: <SiMicrosoftazure />, name: 'Azure Cloud',  color: 'azure' },
    { icon: <SiJenkins />, name: 'CICD',  color: 'red' },
    { icon: <SiDocker />, name: 'Docker',  color: 'red' },
    { icon: <SiKubernetes />, name: 'Kubernetes' ,color: 'yellow' },
    { icon: <SiTerraform />, name: 'Terraform',  color: 'green' },
    { icon: <SiAnsible />, name: 'Ansible', color: 'purple' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'green' },
    { icon: <SiMysql />, name: 'MySQL', color: 'blue' },
    { icon: <SiAzuredevops />, name: 'Azure DevOps', color: 'blue' },

  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg shadow-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      
      {/* Technologies Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {tech.icon}
              <div className="flex flex-col">
                <div>{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.proficiency}</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className={`bg-${tech.color}-500 h-2.5 rounded-full`} style={{ width: `${tech.proficiency}` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
