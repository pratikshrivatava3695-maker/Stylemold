import React from 'react';
import type { SlideData } from '../types';

interface SlideProps {
  data: SlideData;
  totalSlides: number;
}

const FunnelVisual: React.FC = () => (
    <div className="space-y-2 flex flex-col items-center font-display uppercase tracking-wider text-sm">
      <p className="font-semibold text-brand-light/70">Initial Request</p>
      <div className="w-px h-8 bg-brand-secondary"></div>
      <p className="px-6 py-2 border-2 border-brand-secondary rounded-md text-center font-bold text-brand-accent">Expert Advice</p>
      <div className="w-px h-8 bg-brand-secondary"></div>
      <p className="font-semibold text-brand-light/70">Recommendation</p>
    </div>
);

const VisualElement: React.FC<{ visual?: SlideData['visual'] }> = ({ visual }) => {
    if (!visual) return null;
    
    const renderVisual = () => {
        switch (visual) {
            case 'pain':
                return <div className="text-6xl md:text-8xl font-black text-white animate-pulse">20-35%</div>;
            case 'funnel':
                return <FunnelVisual />;
            case 'guarantee':
                return <div className="text-6xl md:text-8xl font-black text-white">&lt;10%</div>;
            case 'win-win':
                return <div className="flex items-center justify-center -space-x-12">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-accent/10 flex items-center justify-center font-bold text-lg text-white">StyleMold</div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-secondary/80 flex items-center justify-center font-bold text-lg text-white">[Brand]</div>
                </div>;
            case 'pilot':
                return <div className="text-center font-display">
                    <div className="text-6xl md:text-8xl font-black text-white/80">90</div>
                    <div className="text-xl font-bold uppercase tracking-wider">Day Pilot</div>
                </div>;
            case 'cta':
                return (
                     <a href="https://wa.me/918421413992" target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col items-center justify-center bg-brand-accent rounded-lg text-brand-dark font-display text-center p-6 transition-transform hover:scale-105 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.217.324-1.251 4.565 4.654-1.225.308.212z"/>
                        </svg>
                        <span className="text-xl font-black uppercase tracking-wider">Connect on WhatsApp</span>
                        <span className="mt-1 font-sans font-semibold">+91 84214 13992</span>
                    </a>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`w-full md:w-2/5 flex items-center justify-center rounded-lg ${visual === 'cta' ? 'p-0' : 'p-8 bg-brand-dark/30'}`}>
            {renderVisual()}
        </div>
    );
};


const Slide: React.FC<SlideProps> = ({ data, totalSlides }) => {
  return (
    <div className="flex flex-col h-full animate-fade-in">
        <header className="flex-shrink-0 mb-6">
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold bg-brand-secondary/50 text-brand-light px-3 py-1 rounded-full">Slide {data.slide} of {totalSlides}</span>
                <span className="text-sm font-semibold text-brand-light">{data.targetContact}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mt-4 uppercase tracking-wide">{data.focusTitle}</h1>
            <h2 className="text-lg md:text-xl text-brand-light/70 mt-1">{data.subTitle}</h2>
        </header>

        <div className="flex-grow flex flex-col md:flex-row gap-8 md:gap-12 animate-slide-in-up">
            <div className="w-full md:w-3/5 space-y-4">
                {data.keyContent.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-brand-light/90 text-base md:text-lg">{point}</p>
                    </div>
                ))}
            </div>

            <VisualElement visual={data.visual} />
        </div>
        
        {data.metrics.length > 0 && (
            <div className="flex-shrink-0 mt-auto pt-6">
                <div className="bg-brand-accent/5 border-l-4 border-brand-accent text-brand-light p-4 rounded-r-lg">
                    <p className="font-bold text-base md:text-lg">{data.metrics[0]}</p>
                </div>
            </div>
        )}
    </div>
  );
};

export default Slide;