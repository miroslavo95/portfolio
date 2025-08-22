import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Tableau', level: 95, color: 'bg-orange-500' },
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'SQL', level: 92, color: 'bg-green-500' },
    { name: 'Statistical Analysis', level: 88, color: 'bg-purple-500' },
    { name: 'BigQuery', level: 85, color: 'bg-blue-600' },
    { name: 'Data Storytelling', level: 90, color: 'bg-teal-500' },
    { name: 'KPI Management', level: 88, color: 'bg-indigo-500' },
    { name: 'A/B Testing', level: 82, color: 'bg-pink-500' },
  ];

  const tools = [
    'Tableau', 'Looker Studio', 'Google Analytics', 'Alteryx', 'Airflow', 'AWS', 'PowerQuery', 'Kaggle'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-center transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Education & Languages</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  MSc Marketing - Data Analytics, LUISS Guido Carli (110/110 cum laude)
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Italian (Native), English (Proficient), Spanish (Intermediate)
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  TEDxLuiss Marketing Communication Director (2018-2019)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;