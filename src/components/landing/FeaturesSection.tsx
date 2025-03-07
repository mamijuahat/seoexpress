
import React from 'react';
import { ArrowRight, BarChart2, Clock, Search, Globe, AlertCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Search className="h-10 w-10 text-nightwatch-light-purple" />,
    title: 'SEO Monitoring',
    description: 'Track your website rankings across search engines and get notified about changes.',
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-nightwatch-light-blue" />,
    title: 'Performance Analytics',
    description: 'Monitor your website speed and performance metrics to identify bottlenecks.',
  },
  {
    icon: <Clock className="h-10 w-10 text-nightwatch-light-purple" />,
    title: 'Uptime Monitoring',
    description: 'Get instant alerts when your website goes down to minimize downtime.',
  },
  {
    icon: <Globe className="h-10 w-10 text-nightwatch-light-blue" />,
    title: 'Global Monitoring',
    description: 'Check your website from multiple locations around the world.',
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-nightwatch-light-purple" />,
    title: 'Instant Alerts',
    description: 'Receive notifications via email, SMS, or Slack when issues are detected.',
  },
  {
    icon: <Shield className="h-10 w-10 text-nightwatch-light-blue" />,
    title: 'Security Checks',
    description: 'Automatically scan for security vulnerabilities and get recommendations.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-nightwatch-dark py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            All-in-One <span className="gradient-text">Monitoring Solution</span>
          </h2>
          <p className="text-lg text-white/70">
            Everything you need to monitor, analyze, and optimize your website's performance and visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-nightwatch-purple hover:bg-nightwatch-light-purple text-white px-8 py-6">
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
