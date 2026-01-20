import React, { useState } from 'react';
import { Zap, MapPin, Battery, TrendingUp, Users, Leaf, Clock, Shield } from 'lucide-react';

const Home = () => {
  const [activeCard, setActiveCard] = useState(null);

  const stats = [
    { icon: MapPin, label: 'Charging Stations', value: '5000+', color: 'from-blue-500 to-cyan-600' },
    { icon: Users, label: 'Cities Covered', value: '500+', color: 'from-green-500 to-emerald-700' },
    { icon: Battery, label: 'Charging Sessions Today', value: '12.5K', color: 'from-cyan-600 to-blue-700' },
    { icon: Leaf, label: 'CO₂ Saved (Tons)', value: '25K+', color: 'from-emerald-600 to-green-800' }
  ];

  const features = [
    {
      title: 'Fast Charging Network',
      description: 'High-speed DC fast chargers across India for quick turnaround times',
      icon: Zap,
      gradient: 'from-blue-500/20 to-cyan-600/20'
    },
    {
      title: 'Mobile App Integration',
      description: 'Find stations, book slots, and pay seamlessly through our mobile app',
      icon: MapPin,
      gradient: 'from-green-500/20 to-emerald-700/20'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support for uninterrupted charging experience',
      icon: Clock,
      gradient: 'from-cyan-600/20 to-blue-700/20'
    },
    {
      title: 'Green Energy',
      description: 'Powered by renewable energy sources for sustainable mobility',
      icon: Leaf,
      gradient: 'from-emerald-600/20 to-green-800/20'
    }
  ];

  const solutions = [
    {
      title: 'AC Charging Stations',
      description: 'Perfect for overnight charging at home or workplace',
      power: '7.4 kW - 22 kW',
      icon: Battery
    },
    {
      title: 'DC Fast Chargers',
      description: 'Rapid charging for commercial and highway locations',
      power: '30 kW - 240 kW',
      icon: Zap
    },
    {
      title: 'Fleet Solutions',
      description: 'Customized charging infrastructure for commercial fleets',
      power: 'Scalable',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-600/10 to-green-500/10 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent mb-4">
                Tata Power
              </h1>
              <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EV Charging
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              India's Leading Electric Vehicle Charging Network
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Powering sustainable mobility with fast, reliable, and eco-friendly charging solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Charging Station
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 backdrop-blur-sm border border-cyan-500/20 transition-all duration-300 ${activeCard === index ? 'transform scale-105 shadow-2xl shadow-cyan-500/30' : ''
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-4xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Why Choose Tata Power EV Charging?
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Experience the future of sustainable mobility with India's most trusted EV charging network
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Charging Solutions */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
          Our Charging Solutions
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Comprehensive charging infrastructure for every need
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{solution.title}</h3>
                <p className="text-gray-400 mb-4">{solution.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>{solution.power}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-green-900/30 backdrop-blur-sm border border-cyan-500/30 p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Driving India's EV Revolution</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Reliable Infrastructure</h4>
                    <p className="text-gray-400">Extensive network of charging stations across India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Sustainable Energy</h4>
                    <p className="text-gray-400">Powered by renewable energy sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Fast Charging Technology</h4>
                    <p className="text-gray-400">Quick turnaround with advanced DC fast chargers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Battery className="w-32 h-32 mx-auto text-cyan-400 mb-4" />
                  <p className="text-3xl font-bold text-white">Powering</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                    Green Mobility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Go Electric?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of EV owners who trust Tata Power for their charging needs
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;