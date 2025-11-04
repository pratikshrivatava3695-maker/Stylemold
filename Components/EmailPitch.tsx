
import React, { useState } from 'react';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-md bg-brand-secondary hover:bg-opacity-80 transition-all text-white"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};


const EmailPitch: React.FC = () => {
    const subjectLines = [
        { title: 'Best', text: 'B2B Proposal: Zero Inventory Risk Sales Channel with <10% Return Rate.' },
        { title: 'Direct', text: 'Partnership Inquiry: Low-Return Customer Acquisition Proposal for [Brand Name].' },
        { title: 'Data-Driven', text: 'Data-Backed Proposal: Monetizing Style Consultation into High-Intent Sales.' },
    ];

    const emailBody = [
        { title: 'The Problem', text: "We know returns are the silent killer of e-commerce profits, especially in India's fashion segment." },
        { title: 'The Solution', text: "StyleMold operates as a high-intent, human-powered sales filter. We don't advertise your product; we prescribe it, ensuring a perfect match before the click." },
        { title: 'The Value Proposition', text: "By routing our pre-qualified customers to your checkout, we directly lower your reverse logistics cost and dramatically increase your true customer lifetime value. You get a guaranteed sale that sticks." },
        { title: 'The Ask', text: "We request a 15-minute call to present our data-backed proposal for a 90-day pilot that guarantees a superior profit margin compared to your current marketplace channels." }
    ];
    
    const fullEmailText = `Subject: ${subjectLines[0].text}\n\n${emailBody.map(p => p.text).join('\n\n')}`;


    return (
        <div className="animate-fade-in h-full flex flex-col">
            <header className="mb-6">
                 <h1 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-wide">Strategic B2B Email Pitch</h1>
                 <p className="text-lg text-brand-light/70 mt-1">Copy these snippets for your outreach email.</p>
            </header>
            
            <div className="flex-grow overflow-y-auto pr-2 space-y-6">
                <div className="relative p-4 bg-brand-dark/30 rounded-lg">
                    <h3 className="text-xl font-display font-bold mb-3 text-brand-accent uppercase">High-Conversion Subject Lines</h3>
                     <CopyButton textToCopy={subjectLines.map(s => s.text).join('\n')} />
                    <div className="space-y-3">
                        {subjectLines.map((line) => (
                            <div key={line.title} className="p-3 bg-brand-primary/50 rounded">
                                <span className="font-semibold text-brand-light/70 mr-2">{line.title}:</span>
                                <span>{line.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative p-4 bg-brand-dark/30 rounded-lg">
                    <h3 className="text-xl font-display font-bold mb-3 text-brand-accent uppercase">Core Pitch Sentences (Email Body)</h3>
                    <CopyButton textToCopy={fullEmailText} />
                    <div className="space-y-4">
                        {emailBody.map((paragraph) => (
                             <div key={paragraph.title}>
                                <h4 className="font-bold text-brand-light/90">{paragraph.title}:</h4>
                                <p className="text-brand-light/70">{paragraph.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailPitch;
