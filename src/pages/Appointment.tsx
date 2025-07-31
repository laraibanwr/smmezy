/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Appointment = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const interval = setInterval(() => {
      if (window.Calendly && calendlyRef.current) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/smmezy/30min?hide_gdpr_banner=1&primary_color=ea580c&text_color=ffffff&background_color=0d1117',
            parentElement: calendlyRef.current,
          });

          setIsLoading(false);
          clearInterval(interval);
        } catch (error) {
          console.error('Calendly init failed:', error);
        }
      }
    }, 200);

    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-20 flex items-center justify-center">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="loader"></div>
        </div>
      )}

      <div
        ref={calendlyRef}
        className={`w-full max-w-6xl calendly-inline-widget rounded-2xl overflow-hidden transition-opacity duration-1000 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </section>
  );
};

export default Appointment;