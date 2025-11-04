import React, { useState } from 'react';
import type { SlideData } from './types';
import Slide from './components/Slide';
import Logo from './components/Logo';

const slides: SlideData[] = [
  {
    slide: 1,
    focusTitle: "The E-Commerce Pain Point",
    subTitle: "Problem: Returns crush profitability.",
    keyContent: [
      "High return rates are the silent killer of e-commerce profits, especially in India's competitive fashion segment.",
      "They erode margins through reverse logistics costs, create deadstock, and result in a frustrating customer experience."
    ],
    metrics: ["Industry Average: Returns cost the Indian fashion industry 20-35% of revenue."],
    targetContact: "B2B/Wholesale Head",
    visual: 'pain',
  },
  {
    slide: 2,
    focusTitle: "The StyleMold Solution",
    subTitle: "The Service: A high-intent, human-powered sales filter.",
    keyContent: [
      "We don't just advertise your product; we prescribe it after a thorough consultation.",
      "Our expert stylists engage with customers to understand their precise size, budget, and aesthetic needs.",
      "This ensures a perfect, pre-vetted match before the customer ever clicks 'buy'."
    ],
    metrics: [],
    targetContact: "B2B/Wholesale Head",
    visual: 'funnel',
  },
  {
    slide: 3,
    focusTitle: "The Guarantee: <10% Return Rate",
    subTitle: "The Proof: We drive high-conversion sales that stick.",
    keyContent: [
        "Our model is built on purchase-intent, not just browsing interest.",
        "By matching product to a pre-qualified customer, we significantly reduce the primary drivers of returns: poor fit and mismatched expectations."
    ],
    metrics: ["StyleMold's conversion rate is projected to be 2-3x higher than typical channels, with a return rate under 10%."],
    targetContact: "Merchandising/Finance Head",
    visual: 'guarantee',
  },
  {
    slide: 4,
    focusTitle: "Our Partnership Model (Win-Win)",
    subTitle: "The Proposal: Zero Customer Acquisition Cost (CAC) & Flexible Sourcing.",
    keyContent: [
      "You gain a new, high-performance sales channel with zero upfront marketing spend.",
      "We offer two paths to partner:",
      "1. Affiliate Model: Low-risk, high-volume sales. We earn a commission on successful, non-returned sales.",
      "2. Wholesale Model: High-margin, secured inventory. We purchase curated stock for our clients."
    ],
    metrics: [],
    targetContact: "Sales/Business Development",
    visual: 'win-win',
  },
  {
    slide: 5,
    focusTitle: "Next Step: Pilot Program",
    subTitle: "Call to Action: Let's prove our model's value together.",
    keyContent: [
      "We propose a 90-day pilot program to validate our low-return model on a select batch of your products.",
      "Let's target high-margin SKUs to demonstrate the immediate impact on your bottom line.",
      "We request a 15-minute call to finalize the details and begin."
    ],
    metrics: [],
    targetContact: "Sales/Business Development",
    visual: 'pilot',
  },
  {
    slide: 6,
    focusTitle: "Let's Connect",
    subTitle: "Take the next step. Let's talk.",
    keyContent: [
      "We are ready to demonstrate the immediate impact on your bottom line with a tailored 90-day pilot program.",
      "Let's schedule a 15-minute call to discuss how StyleMold can become your highest-performing, zero-risk sales channel.",
      "Click the button to connect with us directly on WhatsApp."
    ],
    metrics: [],
    targetContact: "Founder / Decision Maker",
    visual: 'cta',
  },
];

const totalSteps = slides.length; 

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans text-brand-light p-4 overflow-hidden">
      <div className="w-full max-w-5xl bg-brand-primary shadow-2xl rounded-xl border border-brand-secondary/30 overflow-hidden flex flex-col">
        <header className="p-6 md:p-8 border-b border-brand-secondary/30">
          <Logo />
        </header>
        <main className="p-6 md:p-12 relative min-h-[65vh] md:min-h-[70vh] flex flex-col flex-grow">
          <Slide key={currentStep} data={slides[currentStep]} totalSlides={slides.length} />
        </main>
        <footer className="bg-brand-dark/50 p-4 flex items-center justify-between border-t border-brand-secondary/30 mt-auto">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-6 py-2 text-sm font-semibold rounded-full bg-brand-secondary text-white hover:bg-opacity-80 disabled:bg-opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Prev
          </button>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentStep === index ? 'bg-brand-accent scale-125' : 'bg-brand-secondary/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps - 1}
            className="px-6 py-2 text-sm font-semibold rounded-full bg-brand-accent text-brand-dark hover:bg-opacity-80 disabled:bg-brand-secondary disabled:bg-opacity-50 disabled:text-white/50 disabled:cursor-not-allowed transition-all"
          >
            {currentStep === totalSteps - 2 ? 'Finish' : 'Next'}
          </button>
        </footer>
      </div>
       <p className="text-center text-xs text-gray-500 mt-4">StyleMold B2B Pitch Deck Generator</p>
    </div>
  );
};

export default App;