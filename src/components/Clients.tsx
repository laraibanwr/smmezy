import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// --- Local Client Logos ---
// Assuming these paths are correct relative to your component's location.
import Client1 from '../assets/clients/Client1.png';
import Client2 from '../assets/clients/Client2.png';
import Client3 from '../assets/clients/Client3.png';
import Client4 from '../assets/clients/Client4.png';
import Client5 from '../assets/clients/Client5.png';
import Client6 from '../assets/clients/Client6.png';
import Client7 from '../assets/clients/Client7.png';

// --- Data for Clients ---
// This structure now uses the imported local images.
const clientData = [
  { name: 'Client 1', logo: Client1, color: 'from-blue-500/20' },
  { name: 'Client 2', logo: Client2, color: 'from-purple-500/20' },
  { name: 'Client 3', logo: Client3, color: 'from-green-500/20' },
  { name: 'Client 4', logo: Client4, color: 'from-red-500/20' },
  { name: 'Client 5', logo: Client5, color: 'from-cyan-500/20' },
  { name: 'Client 6', logo: Client6, color: 'from-pink-500/20' },
  { name: 'Client 7', logo: Client7, color: 'from-yellow-500/20' },
  { name: 'Client 1', logo: Client1, color: 'from-blue-500/20' },
  { name: 'Client 2', logo: Client2, color: 'from-purple-500/20' },
  { name: 'Client 3', logo: Client3, color: 'from-green-500/20' },
  { name: 'Client 4', logo: Client4, color: 'from-red-500/20' },
  { name: 'Client 5', logo: Client5, color: 'from-cyan-500/20' },
  { name: 'Client 6', logo: Client6, color: 'from-pink-500/20' },
  { name: 'Client 7', logo: Client7, color: 'from-yellow-500/20' },
  { name: 'Client 1', logo: Client1, color: 'from-blue-500/20' },
  { name: 'Client 2', logo: Client2, color: 'from-purple-500/20' },
  { name: 'Client 3', logo: Client3, color: 'from-green-500/20' },
  { name: 'Client 4', logo: Client4, color: 'from-red-500/20' },
  { name: 'Client 5', logo: Client5, color: 'from-cyan-500/20' },
  { name: 'Client 6', logo: Client6, color: 'from-pink-500/20' },
  { name: 'Client 7', logo: Client7, color: 'from-yellow-500/20' },
];

const quotes = [
  "“We've learned that the best collaborations don't just meet expectations, they elevate what's possible and build lasting trust.”",
  "“Our partnerships are a reflection of mutual growth, where creativity meets purpose and results speak louder than words.”",
  "“Working with brands who share our values allows us to craft stories that resonate and endure in meaningful ways.”",
  "“Every client relationship is a journey—rooted in integrity, refined by collaboration, and driven by shared goals.”",
  "“The confidence our clients place in us isn't taken for granted—it's what fuels our drive for innovation and excellence.”",
  "“When trust and transparency lead the way, every project becomes more than just work—it becomes legacy.”",
  "“Each brand we work with helps shape who we are. Their challenges, our commitment—the results speak for themselves.”",
  "“Real success is when your clients see you not just as a vendor, but as a vital part of their vision.”",
  "“We've never aimed to collect logos. We aim to build partnerships that transform ideas into impact.”",
  "“It’s not about the size of the brand—it’s about the strength of the relationship and shared belief in possibility.”"
];

const Clients = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to cycle through the quotes every 5 seconds.
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    // Clear the interval when the component unmounts to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="clients"
      className="bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden text-white"
    >
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Clients
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Proudly partnered with forward-thinking brands worldwide
        </p>
      </div>

      {/* Conveyor Belt Logo Scroller */}
      <div className="relative w-full overflow-hidden mb-16">
        <div className="flex w-max gap-10 md:gap-16 animate-marquee">
          {[...clientData, ...clientData].map((client, idx) => (
            <div
              key={idx}
              className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center bg-gradient-to-br ${client.color} to-white/5 backdrop-blur-md border border-white/10 shadow-lg shrink-0`}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Centered Animated Quote Section */}
      <div className="px-6 flex justify-center">
        <div className="max-w-3xl text-center min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-xl md:text-2xl italic text-gray-300 leading-relaxed"
            >
              {quotes[currentQuoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Default export for use in other parts of the application
export default Clients;
