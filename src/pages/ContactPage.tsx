import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar, Clock, Globe, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      subject: '', 
      message: '', 
      projectType: 'consultation' 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      description: 'Best for detailed project discussions',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+31 6 1234 5678',
      description: 'Available for urgent consultations',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Amsterdam, Netherlands',
      description: 'Open to remote and on-site work',
      color: 'bg-purple-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      description: 'Professional networking and updates',
      color: 'bg-blue-600'
    }
  ];

  const services = [
    {
      title: 'BI Strategy Consultation',
      description: 'Strategic planning for business intelligence initiatives and KPI frameworks',
      duration: '2-4 weeks',
      icon: '📊'
    },
    {
      title: 'Dashboard Development',
      description: 'Custom Tableau dashboards and data visualization solutions',
      duration: '1-3 weeks',
      icon: '📈'
    },
    {
      title: 'Data Analysis Projects',
      description: 'Statistical analysis, A/B testing, and behavioral analytics',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      title: 'ETL & Automation',
      description: 'Process automation and data pipeline development',
      duration: '2-6 weeks',
      icon: '⚙️'
    },
    {
      title: 'Team Training',
      description: 'BI tools training and data literacy workshops',
      duration: '1-2 days',
      icon: '🎓'
    },
    {
      title: 'Data Audit',
      description: 'Comprehensive review of existing data infrastructure and processes',
      duration: '1-2 weeks',
      icon: '🔎'
    }
  ];

  const availability = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM CET', available: true },
    { day: 'Saturday', hours: 'Limited availability', available: false },
    { day: 'Sunday', hours: 'Emergency only', available: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Let's Transform Your Data Together</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to turn data chaos into clarity? I'm here to help you unlock the power of your data 
                and drive business intelligence initiatives that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`${method.color} p-3 rounded-lg mr-4`}>
                      <method.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                  </div>
                  <p className="text-gray-900 font-medium mb-2">{method.value}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Services */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Project</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="consultation">BI Consultation</option>
                        <option value="dashboard">Dashboard Development</option>
                        <option value="analysis">Data Analysis</option>
                        <option value="automation">ETL & Automation</option>
                        <option value="training">Team Training</option>
                        <option value="audit">Data Audit</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Brief description of your project"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your data challenges, goals, and timeline..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Offered</h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">{service.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          <div className="flex items-center text-sm text-blue-600">
                            <Clock size={16} className="mr-1" />
                            <span>Typical duration: {service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Availability & Response Times</h2>
                <div className="space-y-4 mb-8">
                  {availability.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                      <div className="flex items-center">
                        <Calendar className="text-blue-500 mr-3" size={20} />
                        <span className="font-medium text-gray-900">{slot.day}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 mr-3">{slot.hours}</span>
                        <div className={`w-3 h-3 rounded-full ${slot.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Times</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <MessageSquare className="text-blue-500 mr-2" size={16} />
                      Email inquiries: Within 24 hours
                    </li>
                    <li className="flex items-center">
                      <Phone className="text-green-500 mr-2" size={16} />
                      Phone calls: Same day callback
                    </li>
                    <li className="flex items-center">
                      <Calendar className="text-purple-500 mr-2" size={16} />
                      Project proposals: 2-3 business days
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Me?</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Results-Driven Approach</h3>
                    <p className="text-gray-600">Every project is focused on delivering measurable business impact, not just pretty dashboards.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 Proven Track Record</h3>
                    <p className="text-gray-600">5+ years of experience with companies like Vesper B.V. and PwC, delivering 40%+ efficiency improvements.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🤝 Collaborative Partnership</h3>
                    <p className="text-gray-600">I work closely with your team to ensure solutions are adopted and sustainable long-term.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🌍 Remote-First</h3>
                    <p className="text-gray-600">Based in Amsterdam but available for remote work across Europe and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Don't let data chaos hold your business back. Let's schedule a consultation to discuss 
                how we can transform your data into actionable intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:your.email@example.com"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  Email Me Directly
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <Linkedin size={20} className="mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;