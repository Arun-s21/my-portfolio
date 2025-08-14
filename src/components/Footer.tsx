'use client';

import Link from 'next/link';

// Helper component for SVG icons to keep the main component clean
const Icon = ({ children, viewBox = "0 0 24 24" }: { children: React.ReactNode, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox={viewBox}
    fill="currentColor"
    className="h-6 w-6"
  >
    {children}
  </svg>
);

export default function Footer() {
  return (
    // This container is fixed to the bottom, centered
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2">
      {/* THE FIX: 
        - Changed bg-white/70 to bg-white for a solid background.
        - Removed backdrop-blur-sm to remove the glass effect.
      */}
      <div className="bg-white border border-slate-200 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-8">
          
          {/* GitHub Link */}
          <a href="https://github.com/Arun-s21" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
            <Icon>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
            </Icon>
          </a>
          
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/arun-singh-a39a41256/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
            <Icon>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </Icon>
          </a>

          {/* X (Twitter) Link */}
          <a href="https://x.com/ActionRamen" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
            <Icon viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </Icon>
          </a>

        </div>
      </div>
    </footer>
  );
}
