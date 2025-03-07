
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-nightwatch-dark py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-nightwatch-dark-blue to-nightwatch-dark opacity-50"></div>
      
      {/* Purple glowing orb */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-nightwatch-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-nightwatch-light-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Your Website to the <span className="gradient-text">Next Level?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Nightwatch for their website monitoring and performance optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-nightwatch-purple hover:bg-nightwatch-light-purple text-white px-8 py-6 text-lg glow">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-6 text-lg">
              Schedule Demo
            </Button>
          </div>
          
          <p className="mt-6 text-white/60">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
