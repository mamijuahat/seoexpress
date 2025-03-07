
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nightwatch-dark-blue text-white/80">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nightwatch</h3>
            <p className="mb-6">
              The all-in-one website monitoring solution for SEO, performance, and uptime tracking.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-white/60" />
                <a href="mailto:support@nightwatch.io" className="text-white/60 hover:text-white transition-colors">
                  support@nightwatch.io
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-white/60" />
                <a href="tel:+11234567890" className="text-white/60 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-2">Office</h4>
              <address className="not-italic text-white/60">
                1234 Market Street<br />
                San Francisco, CA 94103<br />
                United States
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nightwatch. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
