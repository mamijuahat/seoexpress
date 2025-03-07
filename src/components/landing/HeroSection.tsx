
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient min-h-screen pt-24 pb-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80')] bg-cover opacity-5"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-nightwatch-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-nightwatch-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            {/* Animated label above the main heading */}
            <div className="inline-block animate-slide-up">
              <span className="bg-nightwatch-purple/20 text-nightwatch-light-purple text-sm md:text-base px-4 py-2 rounded-full backdrop-blur-sm border border-nightwatch-purple/30">
                #1 Website Monitoring Tool
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Monitor Your Website <span className="gradient-text">Performance & Rankings</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Get actionable insights with powerful monitoring tools for SEO, performance, and uptime. All in one integrated platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-nightwatch-purple hover:bg-nightwatch-light-purple text-white px-8 py-6 text-lg glow">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-6 text-lg">
                Schedule Demo
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-white/60 mb-4">Trusted by 50,000+ businesses worldwide</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-white/40 font-semibold text-lg">COMPANY</div>
                <div className="text-white/40 font-semibold text-lg">COMPANY</div>
                <div className="text-white/40 font-semibold text-lg">COMPANY</div>
                <div className="text-white/40 font-semibold text-lg">COMPANY</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="bg-nightwatch-dark-blue rounded-xl overflow-hidden screenshot-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
                  alt="Nightwatch Dashboard" 
                  className="w-full h-auto rounded-xl opacity-80"
                />
              </div>
              
              {/* Feature highlights */}
              <div className="absolute -bottom-6 -left-6 bg-nightwatch-purple/90 backdrop-blur-md p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Real-time monitoring</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-nightwatch-light-blue/90 backdrop-blur-md p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Detailed analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
