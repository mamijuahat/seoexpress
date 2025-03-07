
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from '@/components/ui/switch';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small websites and blogs",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "5 websites",
        "100 keyword rankings",
        "Daily rank tracking",
        "Basic notifications",
        "Email support",
      ],
      highlightFeature: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      description: "For growing businesses and ecommerce",
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "20 websites",
        "500 keyword rankings",
        "Hourly rank tracking",
        "Advanced notifications",
        "Priority email support",
        "API access",
        "Team collaboration",
      ],
      highlightFeature: true,
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      mostPopular: true,
    },
    {
      name: "Enterprise",
      description: "For large businesses and agencies",
      monthlyPrice: 199,
      annualPrice: 165,
      features: [
        "Unlimited websites",
        "2,000+ keyword rankings",
        "Real-time monitoring",
        "Custom reporting",
        "Premium support with SLA",
        "Advanced API access",
        "White-label reports",
        "Dedicated account manager",
      ],
      highlightFeature: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-nightwatch-dark to-nightwatch-dark-blue py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">
            No hidden fees. No complicated contracts. Just straightforward pricing plans.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${isAnnual ? 'text-white/70' : 'text-white'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-nightwatch-purple"
            />
            <span className={`text-sm font-medium flex items-center ${isAnnual ? 'text-white' : 'text-white/70'}`}>
              Annual
              <span className="ml-2 bg-nightwatch-purple/20 text-nightwatch-purple text-xs font-bold px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`border border-white/10 bg-white/5 backdrop-blur-sm relative ${
                plan.mostPopular ? 'ring-2 ring-nightwatch-purple' : ''
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-nightwatch-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-white/70">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-white/70 ml-2">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-nightwatch-light-purple mt-1">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-start ${
                        plan.highlightFeature && featureIndex === 0 ? 'text-nightwatch-light-purple font-medium' : 'text-white/80'
                      }`}
                    >
                      <Check className="h-5 w-5 mr-2 flex-shrink-0 text-nightwatch-light-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === 'default'
                      ? 'bg-nightwatch-purple hover:bg-nightwatch-light-purple text-white'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Need a custom plan?</h3>
          <p className="text-white/70 mb-6">
            Contact our sales team for a tailored solution that fits your specific requirements.
          </p>
          <Button className="bg-white text-nightwatch-dark hover:bg-white/90">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
