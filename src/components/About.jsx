import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faTools } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="bg-neutral-950 flex items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mx-auto">
        <motion.div
          className="border border-gray-400 rounded-lg shadow-md p-8 w-full max-w-4xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="border-b border-neutral-900 pb-4 text-center text-3xl text-teal-200 font-bold mb-8">
            About Me
          </h1>
          <p className="text-lg text-white mb-6">
            A passionate and skilled Cloud and DevOps Engineer with a strong background in infrastructure provisioning, automation, and monitoring.
          </p>
          <p className="text-lg text-white mb-6">
            Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on Azure. Successfully implemented monitoring and logging tools like Grafana and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.
          </p>
          <p className="text-lg text-white mb-6">
            With a Bachelor's degree in Computer Engineering, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps and cloud engineering projects.
          </p>
          <h2 className="text-xl text-white font-bold text-center mb-4">What I'm Doing</h2>
          <div className="flex justify-center gap-8">
            {/* Reusable component for each section */}
            <Section
              icon={faCode}
              title="DevOps"
              description="I am dedicated to enhancing delivery speed and quality through automation, striving to achieve Continuous Integration and Continuous Deployment (CI/CD) practices."
            />
            <Section
              icon={faCloud}
              title="Cloud Engineer"
              description="My focus lies in leveraging cutting-edge technologies to optimize performance, enhance security, and streamline operations in the cloud environment."
            />
            <Section
              icon={faTools}
              title="Software Development"
              description="I am dedicated to learning software development, whether for personal fulfillment or to achieve specific objectives."
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Reusable component for each section
const Section = ({ icon, title, description }) => {
  return (
    <motion.div
      className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6 flex items-center flex-col">
        <FontAwesomeIcon icon={icon} className="text-gray-700 mb-4" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
