
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-3 text-white">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.667 2L12 6.667L7.333 2L2.667 6.667L12 16L21.333 6.667L16.667 2Z"/>
      <path d="M7.333 22L12 17.333L16.667 22L21.333 17.333L12 8L2.667 17.333L7.333 22Z"/>
    </svg>
    <span className="font-display font-black text-2xl tracking-wider uppercase">Stylemold</span>
  </div>
);

export default Logo;
