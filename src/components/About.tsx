import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate BI Expert with over 5 years of experience transforming data chaos into clarity. Specialized in BI strategy, KPI management, data visualization and storytelling, I help businesses stop guessing and start knowing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's optimizing decision-making or streamlining processes, I thrive on transforming complex data into clear, actionable intelligence. Because let's face it—gut feelings are great for picking dinner, but not for business strategy!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Tableau</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">SQL</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">BigQuery</span>
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Statistical Analysis</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Palette className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Data Visualization</h3>
              </div>
              <p className="text-gray-600">Creating compelling dashboards and visualizations that tell data stories and drive business decisions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">BI Strategy & KPIs</h3>
              </div>
              <p className="text-gray-600">Defining cross-functional KPIs aligned with business strategy and implementing comprehensive BI solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Statistical Analysis</h3>
              </div>
              <p className="text-gray-600">Performing advanced statistical analysis, A/B testing, and behavioral analytics to inform business decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;