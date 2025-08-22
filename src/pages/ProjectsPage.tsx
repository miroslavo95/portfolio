import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Database, BarChart3, Zap } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Executive KPI Dashboard',
      company: 'Vesper B.V.',
      period: '2023 - Present',
      category: 'Dashboard',
      description: 'Designed and deployed an executive-facing KPI dashboard that enabled early detection of product anomalies and performance deviations, reducing response times significantly.',
      detailedDescription: 'This comprehensive dashboard provides real-time insights into key business metrics, featuring automated anomaly detection algorithms that alert leadership to critical issues before they impact business operations. The solution integrates data from multiple sources and presents complex information in an intuitive, actionable format.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Tableau', 'SQL', 'Python', 'Real-time Analytics', 'Anomaly Detection'],
      impact: [
        'Reduced incident response time by 60%',
        'Improved executive decision-making speed',
        'Enabled proactive issue identification',
        'Streamlined cross-functional communication'
      ],
      technologies: ['Tableau', 'Python', 'SQL', 'BigQuery', 'Airflow'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Cross-Functional KPI Framework',
      company: 'Vesper B.V.',
      period: '2022 - 2023',
      category: 'Strategy',
      description: 'Led definition and implementation of cross-functional KPIs aligned with business strategy, delivering comprehensive Tableau dashboards for data-driven decision-making.',
      detailedDescription: 'Developed a holistic KPI framework that aligns departmental metrics with overall business objectives. This project involved stakeholder interviews, metric definition workshops, and the creation of a centralized dashboard ecosystem that provides both high-level executive views and detailed operational insights.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['KPI Design', 'Business Strategy', 'Tableau', 'Cross-functional', 'OKRs'],
      impact: [
        'Aligned 5 departments with unified metrics',
        'Improved strategic decision-making',
        'Increased data-driven culture adoption',
        'Enhanced cross-team collaboration'
      ],
      technologies: ['Tableau', 'SQL', 'Excel', 'PowerPoint', 'Miro'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Automated ETL Pipeline',
      company: 'PwC',
      period: '2021 - 2022',
      category: 'Automation',
      description: 'Collaborated on automating file ingestion using Alteryx, reducing processing time by 40% and improving data quality for financial reporting.',
      detailedDescription: 'Designed and implemented an end-to-end ETL pipeline that automates the ingestion, transformation, and loading of financial data from multiple sources. The solution includes data validation, error handling, and automated reporting capabilities that significantly improved the efficiency and accuracy of financial reporting processes.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Alteryx', 'ETL', 'Process Automation', 'Data Quality', 'Financial Reporting'],
      impact: [
        '40% reduction in processing time',
        'Improved data quality and consistency',
        'Reduced manual errors by 85%',
        'Enhanced audit trail capabilities'
      ],
      technologies: ['Alteryx', 'SQL Server', 'Excel', 'PowerQuery', 'VBA'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Product Feature Analytics',
      company: 'Vesper B.V.',
      period: '2022 - Present',
      category: 'Analytics',
      description: 'Worked closely with Product teams to evaluate feature releases using statistical analysis and behavioral analytics, directly informing roadmap priorities.',
      detailedDescription: 'Established a comprehensive product analytics framework that combines A/B testing, cohort analysis, and user behavior tracking to evaluate feature performance. This data-driven approach has become integral to product decision-making, helping prioritize development efforts and optimize user experience.',
      image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Statistical Analysis', 'A/B Testing', 'Product Analytics', 'Behavioral Data', 'User Experience'],
      impact: [
        'Improved feature adoption rates by 35%',
        'Reduced development waste through data-driven prioritization',
        'Enhanced user experience metrics',
        'Accelerated product iteration cycles'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'Google Analytics', 'Mixpanel'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Centralized BI Database',
      company: 'Vesper B.V.',
      period: '2023 - Present',
      category: 'Infrastructure',
      description: 'Managed the development of a centralized BI database to improve company-wide analytics and collaborated with development teams to achieve near real-time analytics.',
      detailedDescription: 'Led the architecture and implementation of a centralized data warehouse that serves as the single source of truth for all business intelligence needs. The project involved data modeling, ETL pipeline design, and close collaboration with engineering teams to ensure data quality and real-time availability.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Data Warehouse', 'ETL', 'Real-time Analytics', 'Data Architecture', 'BigQuery'],
      impact: [
        'Unified data access across all departments',
        'Achieved near real-time analytics capabilities',
        'Improved data consistency and reliability',
        'Reduced time-to-insight by 50%'
      ],
      technologies: ['BigQuery', 'Airflow', 'dbt', 'Python', 'SQL'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Engagement Analytics',
      company: 'LUISS Guido Carli',
      period: '2019 - 2020',
      category: 'Marketing',
      description: 'Leveraged insights on social media engagement metrics to boost online marketing campaigns performance during my internship.',
      detailedDescription: 'Developed a comprehensive social media analytics framework that tracked engagement patterns, audience behavior, and campaign performance across multiple platforms. The insights generated led to significant improvements in marketing campaign effectiveness and audience targeting strategies.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Social Media Analytics', 'Marketing Campaigns', 'Engagement Metrics', 'Audience Analysis'],
      impact: [
        'Increased campaign engagement by 45%',
        'Improved audience targeting accuracy',
        'Enhanced content strategy effectiveness',
        'Reduced marketing spend waste by 30%'
      ],
      technologies: ['Google Analytics', 'Facebook Analytics', 'Excel', 'R', 'Tableau'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  const categories = ['All', 'Dashboard', 'Strategy', 'Automation', 'Analytics', 'Infrastructure', 'Marketing'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dashboard': return BarChart3;
      case 'Strategy': return TrendingUp;
      case 'Automation': return Zap;
      case 'Analytics': return Database;
      case 'Infrastructure': return Database;
      case 'Marketing': return Users;
      default: return BarChart3;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Featured Projects</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                A comprehensive showcase of my business intelligence projects, from executive dashboards 
                to automated ETL pipelines, demonstrating real-world impact and technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => {
                const IconComponent = getCategoryIcon(project.category);
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 p-2 rounded-full">
                          <IconComponent className="text-blue-500" size={20} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {project.period}
                        </div>
                      </div>
                      
                      <p className="text-blue-600 font-semibold mb-4">{project.company}</p>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{project.detailedDescription}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Impact:</h4>
                        <ul className="space-y-2">
                          {project.impact.map((item, impactIndex) => (
                            <li key={impactIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                          <Github size={18} className="mr-2" />
                          Code
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Project Impact Summary</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-blue-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">6+</h3>
                <p className="text-gray-600">Major Projects</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-green-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">40%</h3>
                <p className="text-gray-600">Average Efficiency Gain</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
                <p className="text-gray-600">Companies Impacted</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-orange-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                These projects represent just a glimpse of what's possible when data chaos meets clarity. 
                Let's discuss how we can unlock insights from your data and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Start a Project
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Discuss Your Needs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;