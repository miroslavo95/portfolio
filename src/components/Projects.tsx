import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Executive KPI Dashboard',
      description: 'Designed and deployed an executive-facing KPI dashboard at Vesper B.V. that enabled early detection of product anomalies and performance deviations, reducing response times significantly.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Tableau', 'SQL', 'Python', 'Real-time Analytics'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Cross-Functional KPI Framework',
      description: 'Led definition and implementation of cross-functional KPIs aligned with business strategy, delivering comprehensive Tableau dashboards for data-driven decision-making.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['KPI Design', 'Business Strategy', 'Tableau', 'Cross-functional'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Automated ETL Pipeline',
      description: 'Collaborated on automating file ingestion using Alteryx at PwC, reducing processing time by 40% and improving data quality for financial reporting.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Alteryx', 'ETL', 'Process Automation', 'Data Quality'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Product Feature Analytics',
      description: 'Worked closely with Product teams to evaluate feature releases using statistical analysis and behavioral analytics, directly informing roadmap priorities.',
      image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Statistical Analysis', 'A/B Testing', 'Product Analytics', 'Behavioral Data'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;