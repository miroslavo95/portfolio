import React from 'react';
import { Calendar, MapPin, Award, Users, TrendingUp, Target } from 'lucide-react';

const AboutPage = () => {
  const scrollToExperience = (index: number) => {
    const element = document.getElementById(`experience-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToEducation = (type: 'bachelor' | 'master') => {
    const element = document.getElementById(`education-${type}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const experiences = [
    {
      title: 'BI Expert - Senior Analyst',
      company: 'Vesper B.V.',
      location: 'Amsterdam, Netherlands',
      period: 'May 2022 - Present',
      achievements: [
        'Led definition and implementation of cross-functional KPIs aligned with business strategy; delivered Tableau dashboards to support data-driven decision-making and quasi-real-time insights using SQL and Python.',
        'Worked closely with Product teams to evaluate feature releases using statistical analysis and behavioral analytics, directly informing roadmap priorities.',
        'Designed and deployed an executive-facing KPI dashboard that enabled early detection of product anomalies and performance deviations, proactively surfacing critical issues to leadership and reducing response times.',
        'Managed the development of a centralized BI database to improve company-wide analytics and collaborated with development teams to improve data collection systems, achieving near real-time analytics.',
        'Set and managed OKRs for the BI function while hiring and mentoring team members through coaching, performance reviews, and professional development.'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'PwC',
      location: 'Milan, Italy',
      period: 'Feb 2020 - Apr 2022',
      achievements: [
        'Collaborated on automating file ingestion using Alteryx, reducing processing time by 40%.',
        'Developed Tableau dashboards to track app usage metrics, enabling faster decision-making.',
        'Worked with auditors and consultants to optimize data models, improving financial reporting.',
        'Mentored junior analysts, improving team proficiency in BI tools.'
      ]
    },
    {
      title: 'Marketing Analyst & International Recruitment Intern',
      company: 'LUISS Guido Carli University',
      location: 'Rome, Italy',
      period: 'Sep 2018 - Feb 2020',
      achievements: [
        'Advanced from Marketing Analyst & Course Support (Sep 2018 - Jan 2020) to International Recruitment & Marketing Intern (Aug 2019 - Feb 2020), demonstrating career progression within the organization.',
        'Served as the primary analytical resource for an advanced marketing course, teaching 50+ students to monitor and analyze social media data to derive strategic insights.',
        'Translated complex datasets from platforms like YouTube into clear performance reports, highlighting key trends and providing data-backed recommendations for campaign optimization.',
        'Facilitated a semester-long Markstrat marketing simulation, guiding students in using market data to inform product development, pricing, and communication strategies.',
        'Provided data-driven support for marketing campaigns by analysing lead generation data and web traffic, contributing to more effective audience targeting and channel selection.',
        'Performed market intelligence research by analysing competitors\' digital marketing tactics and value propositions, delivering reports that shaped campaign development.',
        'Optimised the university\'s digital footprint by updating website content and managing social media channels, improving the prospective student journey.'
      ]
    },
    {
      title: 'Marketing Communication Coordinator',
      company: 'TEDxLuiss',
      location: 'Rome, Italy (Hybrid)',
      period: 'Sep 2018 - Mar 2019',
      achievements: [
        'Directed a team of 4 marketing volunteers, setting strategic goals, managing timelines, and leading all communication efforts for a major university event.',
        'Spearheaded the event\'s communication strategy, acting as the primary liaison between the TEDx team, university offices, and creative teams to ensure brand alignment.',
        'Oversaw the full lifecycle of the event\'s marketing plan, from initial campaign development and social media execution to post-event analysis and reporting.',
        'Drove promotional efforts for the Student Speaker Contest, successfully increasing its visibility and attracting a diverse pool of high-quality applicants.'
      ]
    }
  ];

  const personalInterests = [
    'Passionate chess player - strategic thinking translates well to data analysis',
    'Enthusiastic houseplant gardener (~30 plants with my girlfriend) - patience and attention to detail',
    'Data analysis challenges on Kaggle and DataCamp - continuous learning',
    'Cooking enthusiast, currently mastering pizza dough - precision and experimentation',
    'Personal development books - always growing professionally and personally',
    'Board games and backpack traveling - problem-solving and adaptability'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                A passionate BI Expert with over 5 years of experience transforming data chaos into clarity. 
                I specialize in BI strategy, KPI management, data visualization and storytelling to help businesses 
                stop guessing and start knowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Philosophy</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Whether it's optimizing decision-making or streamlining processes, I thrive on transforming 
                    complex data into clear, actionable intelligence. Because let's face it—gut feelings are 
                    great for picking dinner, but not for business strategy!
                  </p>
                  <p>
                    My approach combines technical expertise with business acumen, ensuring that every dashboard, 
                    KPI, and analysis directly contributes to strategic objectives and measurable outcomes.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <TrendingUp className="text-blue-500 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold text-gray-900 mb-2">5+ Years</h3>
                  <p className="text-gray-600">BI Experience</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Target className="text-purple-500 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold text-gray-900 mb-2">40%</h3>
                  <p className="text-gray-600">Process Improvement</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Users className="text-green-500 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold text-gray-900 mb-2">Cross-functional</h3>
                  <p className="text-gray-600">Team Leadership</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Award className="text-orange-500 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold text-gray-900 mb-2">110/110</h3>
                  <p className="text-gray-600">Cum Laude MSc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronological Roadmap */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">My Journey</h2>
            <div className="relative pb-8">
              {/* Timeline Container */}
              <div className="relative w-full h-96">
                {/* Horizontal Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                
                {/* Timeline Events */}
                
                {/* 2013-2016: Bachelor's (Below) */}
                <div className="absolute cursor-pointer" style={{ left: '2%', top: '60%' }} onClick={() => scrollToEducation('bachelor')}>
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-0.5 h-8 bg-blue-500 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-48 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Bachelor's Degree</h4>
                    <p className="text-blue-600 font-medium text-xs mb-2">Università degli studi di Napoli</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Sep 2013 - Dec 2016</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Naples, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2017: Move to Rome (Below) */}
                <div className="absolute cursor-pointer" style={{ left: '14%', top: '60%' }}>
                  <div className="w-4 h-4 bg-purple-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-0.5 h-8 bg-purple-500 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-purple-50 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-40 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Relocated to Rome</h4>
                    <p className="text-purple-600 font-medium text-xs mb-2">New chapter begins</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Aug 2017</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Rome, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2017-2019: MSc (Below) */}
                <div className="absolute cursor-pointer" style={{ left: '26%', top: '60%' }} onClick={() => scrollToEducation('master')}>
                  <div className="w-4 h-4 bg-green-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-0.5 h-8 bg-green-500 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-52 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">MSc Marketing - Data Analytics</h4>
                    <p className="text-blue-600 font-medium text-xs mb-2">LUISS Guido Carli</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Sep 2017 - Oct 2019</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Rome, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2018-2019: TEDx (Above) */}
                <div className="absolute cursor-pointer" style={{ left: '20%', top: '10%' }} onClick={() => scrollToExperience(3)}>
                  <div className="w-4 h-4 bg-red-500 rounded-full absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="w-0.5 h-8 bg-red-500 absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-52 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Marketing Communication Coordinator</h4>
                    <p className="text-blue-600 font-medium text-xs mb-2">TEDxLuiss</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Sep 2018 - Mar 2019</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Rome, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2018-2020: LUISS Intern (Above) */}
                <div className="absolute cursor-pointer" style={{ left: '32%', top: '10%' }} onClick={() => scrollToExperience(2)}>
                  <div className="w-4 h-4 bg-teal-500 rounded-full absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="w-0.5 h-8 bg-teal-500 absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-56 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Marketing Analyst & Recruitment Intern</h4>
                    <p className="text-blue-600 font-medium text-xs mb-2">LUISS Guido Carli University</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Sep 2018 - Feb 2020</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Rome, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2020: Move to Milan (Below) */}
                <div className="absolute cursor-pointer" style={{ left: '44%', top: '60%' }}>
                  <div className="w-4 h-4 bg-orange-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-0.5 h-8 bg-orange-500 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-orange-50 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-40 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Relocated to Milan</h4>
                    <p className="text-orange-600 font-medium text-xs mb-2">Career advancement</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Feb 2020</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Milan, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2020-2022: PwC (Above) */}
                <div className="absolute cursor-pointer" style={{ left: '50%', top: '10%' }} onClick={() => scrollToExperience(1)}>
                  <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="w-0.5 h-8 bg-blue-600 absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-48 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Data Analyst</h4>
                    <p className="text-blue-600 font-medium text-xs mb-2">PwC</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>Feb 2020 - Apr 2022</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Milan, Italy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2022: Move to Amsterdam (Below) */}
                <div className="absolute cursor-pointer" style={{ left: '68%', top: '60%' }}>
                  <div className="w-4 h-4 bg-green-600 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-0.5 h-8 bg-green-600 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-green-50 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-44 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Relocated to Amsterdam</h4>
                    <p className="text-green-600 font-medium text-xs mb-2">International move</p>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>May 2022</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Amsterdam, Netherlands</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2022-Present: Vesper (Above) */}
                <div className="absolute cursor-pointer" style={{ left: '80%', top: '10%' }} onClick={() => scrollToExperience(0)}>
                  <div className="w-4 h-4 bg-purple-600 rounded-full absolute top-full left-1/2 transform -translate-x-1/2 mt-2 animate-pulse"></div>
                  <div className="w-0.5 h-8 bg-purple-600 absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-56 border-l-4 border-purple-600 hover:scale-105">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">BI Expert - Senior Analyst</h4>
                    <p className="text-blue-600 font-medium text-xs mb-1">Vesper B.V.</p>
                    <div className="flex items-center text-xs text-green-600 font-medium mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      <span>Current Position</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={12} className="mr-1" />
                        <span>May 2022 - Present</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>Amsterdam, Netherlands</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} id={`experience-${index}`} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 scroll-mt-20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
            <div className="max-w-6xl mx-auto space-y-8">
              <div id="education-master" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">MSc Marketing - Data Analytics & Metrics</h3>
                    <p className="text-xl text-blue-600 font-semibold">LUISS Guido Carli</p>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>Sep 2017 - Oct 2019</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>Rome, Italy</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Specialized in data analytics and marketing metrics with a focus on statistical analysis, 
                  consumer behavior, and data-driven marketing strategies. Graduated with highest honors, 
                  demonstrating excellence in analytical thinking and research methodologies.
                </p>
              </div>
              
              <div id="education-bachelor" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor's Degree - Business Administration</h3>
                    <p className="text-xl text-blue-600 font-semibold">Università degli studi di Napoli, Federico II</p>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>Sep 2013 - Dec 2016</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>Naples, Italy</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive foundation in business fundamentals including finance, management, marketing, 
                  and operations. Developed strong analytical and problem-solving skills through coursework in 
                  statistics, economics, and strategic planning. This solid business foundation provided the 
                  groundwork for my later specialization in data analytics and business intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Highlights</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">TEDx Leadership</h3>
                  <p className="opacity-90 leading-relaxed">
                    Led marketing communications for one of Italy's premier student-run TEDx events, 
                    managing brand strategy and cross-functional team coordination.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Teaching & Mentoring</h3>
                  <p className="opacity-90 leading-relaxed">
                    Taught 50+ students advanced marketing analytics, translating complex datasets 
                    into strategic insights and facilitating data-driven decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Beyond the Data</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalInterests.map((interest, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-700 leading-relaxed">{interest}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These diverse interests fuel my creativity and problem-solving approach in data analysis. 
                From the strategic thinking required in chess to the patience needed for gardening, 
                each hobby contributes to my analytical mindset and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Languages</h2>
            <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇮🇹</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Italian</h3>
                <p className="text-gray-600">Native</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇬🇧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">English</h3>
                <p className="text-gray-600">Proficient</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇪🇸</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spanish</h3>
                <p className="text-gray-600">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;