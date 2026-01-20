import React, { useState } from 'react';
import { Zap, Battery, Home, Users, Gauge, Shield, Clock, Leaf } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const chargingSolutions = [
    {
      id: 'ac-chargers',
      title: 'AC Charging Stations',
      subtitle: 'Perfect for Home & Workplace',
      power: '7.4 kW - 22 kW',
      icon: Home,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Our AC charging stations are ideal for overnight charging at home or workplace. Designed for convenience and efficiency, these chargers provide reliable power for your daily commute.',
      features: [
        'Smart charging with mobile app control',
        'Energy monitoring and scheduling',
        'Weather-resistant design',
        'Compatible with all EV models',
        'Easy installation and maintenance'
      ],
      specifications: {
        'Power Output': '7.4 kW, 11 kW, 22 kW',
        'Input Voltage': '230V AC / 400V AC',
        'Connector Type': 'Type 2',
        'Protection': 'IP54 rated',
        'Warranty': '3 years'
      },
      useCases: ['Residential charging', 'Office parking', 'Hotels & restaurants', 'Shopping malls']
    },
    {
      id: 'dc-fast-chargers',
      title: 'DC Fast Chargers',
      subtitle: 'Rapid Charging for Commercial Use',
      power: '30 kW - 240 kW',
      icon: Zap,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-power DC fast chargers designed for commercial locations and highways. Deliver rapid charging to get vehicles back on the road quickly.',
      features: [
        'Ultra-fast charging capability',
        'Multiple connector options (CCS, CHAdeMO)',
        'Real-time monitoring and diagnostics',
        'Payment integration (RFID, mobile app)',
        'Remote management system'
      ],
      specifications: {
        'Power Output': '30 kW, 60 kW, 120 kW, 240 kW',
        'Input Voltage': '400V AC 3-phase',
        'Connector Type': 'CCS2, CHAdeMO',
        'Protection': 'IP55 rated',
        'Warranty': '5 years'
      },
      useCases: ['Highway charging stations', 'Commercial fleets', 'Public charging hubs', 'Retail locations']
    },
    {
      id: 'home-charging',
      title: 'Home Charging Solutions',
      subtitle: 'Convenient Overnight Charging',
      power: '3.3 kW - 7.4 kW',
      icon: Battery,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Compact and user-friendly home charging solutions that integrate seamlessly with your residence. Charge your EV overnight and wake up to a full battery.',
      features: [
        'Compact wall-mounted design',
        'WiFi connectivity for remote control',
        'Scheduled charging for off-peak rates',
        'LED status indicators',
        'Safety certifications'
      ],
      specifications: {
        'Power Output': '3.3 kW, 7.4 kW',
        'Input Voltage': '230V AC single-phase',
        'Connector Type': 'Type 2',
        'Protection': 'IP44 rated',
        'Warranty': '2 years'
      },
      useCases: ['Residential garages', 'Apartment complexes', 'Private parking', 'Home installations']
    },
    {
      id: 'fleet-solutions',
      title: 'Fleet Charging Solutions',
      subtitle: 'Scalable Infrastructure for Businesses',
      power: 'Customizable',
      icon: Users,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive charging infrastructure designed for commercial fleets. Scalable solutions with advanced management systems for optimal fleet operations.',
      features: [
        'Centralized fleet management dashboard',
        'Load balancing across multiple chargers',
        'Usage analytics and reporting',
        'Customizable charging schedules',
        'Integration with fleet management systems'
      ],
      specifications: {
        'Power Output': 'Customizable based on fleet size',
        'Charger Types': 'AC & DC options available',
        'Management': 'Cloud-based platform',
        'Scalability': 'Modular expansion',
        'Support': '24/7 technical support'
      },
      useCases: ['Taxi & ride-sharing fleets', 'Delivery services', 'Corporate vehicle fleets', 'Public transport']
    },
    {
      id: 'solar-charging',
      title: 'Solar-Powered Charging',
      subtitle: 'Sustainable Green Energy',
      power: 'Variable',
      icon: Leaf,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eco-friendly charging solutions powered by solar energy. Reduce your carbon footprint while charging your electric vehicle with clean, renewable energy.',
      features: [
        'Integrated solar panel system',
        'Battery storage for 24/7 charging',
        'Grid-tied or off-grid options',
        'Energy optimization algorithms',
        'Environmental impact tracking'
      ],
      specifications: {
        'Solar Capacity': '5 kW - 50 kW',
        'Battery Storage': 'Optional (10 kWh - 100 kWh)',
        'Charging Output': '7.4 kW - 22 kW',
        'Efficiency': '95%+',
        'Warranty': '10 years (solar), 5 years (charger)'
      },
      useCases: ['Eco-conscious homes', 'Remote locations', 'Sustainable businesses', 'Off-grid installations']
    },
    {
      id: 'smart-charging',
      title: 'Smart Charging Stations',
      subtitle: 'IoT-Enabled Intelligence',
      power: '7.4 kW - 22 kW',
      icon: Gauge,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Next-generation smart charging stations with IoT connectivity, AI-powered optimization, and seamless integration with smart home systems.',
      features: [
        'AI-powered charging optimization',
        'Voice assistant integration',
        'Automatic vehicle recognition',
        'Dynamic load management',
        'Over-the-air software updates'
      ],
      specifications: {
        'Power Output': '7.4 kW, 11 kW, 22 kW',
        'Connectivity': 'WiFi, 4G, Bluetooth',
        'Smart Features': 'AI optimization, voice control',
        'Compatibility': 'All major EV brands',
        'Warranty': '3 years'
      },
      useCases: ['Smart homes', 'Tech-forward businesses', 'Premium installations', 'Future-ready infrastructure']
    }
  ];

  const selectedSolution = chargingSolutions.find(s => s.id === selectedProduct);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 50%, #10b981 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            EV Charging Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100">
            Comprehensive charging infrastructure for every need
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">Powering India's Electric Future</span>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {!selectedProduct ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Choose Your Charging Solution
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From home charging to commercial fleet solutions, we have the perfect charging infrastructure for your needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chargingSolutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <div
                      key={solution.id}
                      onClick={() => setSelectedProduct(solution.id)}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-white opacity-90 group-hover:scale-110 transition-transform" />
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                          {solution.power}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-cyan-600 font-semibold mb-3">{solution.subtitle}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {solution.description.substring(0, 120)}...
                        </p>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-2">
                          Learn More
                          <Zap className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            selectedSolution && (
              <div className="max-w-5xl mx-auto">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Solutions
                </button>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Product Header */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    {React.createElement(selectedSolution.icon, { className: "w-32 h-32 text-white opacity-90" })}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold">
                      {selectedSolution.power}
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">{selectedSolution.title}</h2>
                    <p className="text-xl text-cyan-600 font-semibold mb-6">{selectedSolution.subtitle}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedSolution.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-blue-600" />
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedSolution.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                            <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Gauge className="w-6 h-6 text-cyan-600" />
                        Technical Specifications
                      </h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(selectedSolution.specifications).map(([key, value]) => (
                            <div key={key} className="border-l-4 border-blue-500 pl-4">
                              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{key}</p>
                              <p className="text-lg text-gray-800 font-medium">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-green-600" />
                        Ideal Use Cases
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedSolution.useCases.map((useCase, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-semibold"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg">
                        Request Quote
                      </button>
                      <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Tata Power EV Charging?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Reliable', desc: 'Industry-leading uptime and reliability' },
              { icon: Zap, title: 'Fast', desc: 'Quick charging with latest technology' },
              { icon: Leaf, title: 'Green', desc: 'Powered by renewable energy' },
              { icon: Users, title: 'Support', desc: '24/7 customer assistance' }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <item.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;