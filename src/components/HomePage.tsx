import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Code, Palette, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
              BI Expert & Senior Data Analyst
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I turn data chaos into clarity—no magic wand needed, just BI expertise. Transforming complex data into actionable intelligence that drives business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/projects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View My Work
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('preview-about')}
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Preview */}
      <section id="preview-about" className="py-20 bg-gray-50">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate BI Expert with over 5 years of experience transforming data chaos into clarity. Currently at Vesper B.V. in Amsterdam, I specialize in BI strategy, KPI management, and data visualization.
                </p>
                <p className="text-gray-600">
                  From automating ETL processes at PwC to designing executive dashboards that detect anomalies in real-time, I help businesses make data-driven decisions with confidence.
                </p>
                <Link 
                  to="/about"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                >
                  Learn more about my journey <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

              <div className="grid gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-3">
                    <Palette className="text-blue-500 mr-3" size={20} />
                    <h3 className="font-semibold text-gray-900">Data Visualization</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Creating compelling dashboards with Tableau and advanced analytics</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-3">
                    <Code className="text-purple-500 mr-3" size={20} />
                    <h3 className="font-semibold text-gray-900">BI Strategy & KPIs</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Defining cross-functional KPIs aligned with business strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tableau</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="text-sm text-gray-600">95%</span>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Python</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-sm text-gray-600">90%</span>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SQL</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="text-sm text-gray-600">92%</span>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="text-sm text-gray-600">88%</span>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/skills"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
              >
                View all skills and tools <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-900">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Executive KPI Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Executive KPI Dashboard</h3>
                  <p className="text-gray-300 mb-4">Real-time dashboard enabling early detection of product anomalies and performance deviations at Vesper B.V.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Tableau</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">SQL</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Python</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="ETL Automation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Automated ETL Pipeline</h3>
                  <p className="text-gray-300 mb-4">Reduced processing time by 40% through automated file ingestion using Alteryx at PwC.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Alteryx</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">ETL</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Automation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/projects"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                View all projects <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl text-white text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Based in Amsterdam, I'm passionate about turning data chaos into clarity. Let's discuss how we can unlock insights from your data!
                </p>
                <div className="flex justify-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <Mail className="mr-2" size={20} />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>Amsterdam, Netherlands</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Me <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;