
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Nightwatch has revolutionized how we monitor our website performance. The real-time alerts and comprehensive dashboard give us the insights we need to stay ahead.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechFlow",
    avatar: "SJ",
    rating: 5
  },
  {
    quote: "As an SEO agency, we rely on accurate data. Nightwatch delivers precise rank tracking and comprehensive analytics that have helped us improve our clients' results significantly.",
    author: "Michael Chen",
    role: "SEO Specialist, Rank Masters",
    avatar: "MC",
    rating: 5
  },
  {
    quote: "The performance monitoring tools are top-notch. We've reduced our page load times by 40% after implementing the recommendations from Nightwatch.",
    author: "Emily Rodriguez",
    role: "Web Developer, Creative Solutions",
    avatar: "ER",
    rating: 4
  },
  {
    quote: "Moving from multiple tools to Nightwatch has streamlined our workflow and saved us thousands. The all-in-one approach is exactly what we needed.",
    author: "David Wilson",
    role: "CTO, E-commerce Plus",
    avatar: "DW",
    rating: 5
  },
  {
    quote: "The customer support team is responsive and knowledgeable. They've helped us set up custom monitoring for our specific needs, which has been invaluable.",
    author: "Olivia Barnes",
    role: "Operations Manager, Global Retail",
    avatar: "OB",
    rating: 5
  },
  {
    quote: "Nightwatch's intuitive interface makes it easy for our entire team to understand website performance, not just the technical staff.",
    author: "James Lee",
    role: "Digital Marketing Lead, Innovative Inc",
    avatar: "JL",
    rating: 4
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-nightwatch-dark py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by <span className="gradient-text">Thousands</span> of Companies
          </h2>
          <p className="text-lg text-white/70">
            See what our customers have to say about their experience with Nightwatch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-white/80 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                
                <div className="flex items-center space-x-4 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-nightwatch-purple text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
