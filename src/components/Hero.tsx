import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 20);
    mouseY.set((clientY / innerHeight - 0.5) * 20);
  };

  const x1 = useTransform(mouseX, [-10, 10], [-15, 15]);
  const y1 = useTransform(mouseY, [-10, 10], [-15, 15]);
  const x2 = useTransform(mouseX, [-10, 10], [10, -10]);
  const y2 = useTransform(mouseY, [-10, 10], [10, -10]);
  const x3 = useTransform(mouseX, [-10, 10], [-8, 8]);
  const y3 = useTransform(mouseY, [-10, 10], [-8, 8]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute top-[25%] left-[25%] w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute bottom-[25%] right-[25%] w-80 h-80 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          style={{ x: x3, y: y3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-full blur-2xl will-change-transform"
        />

        {/* Floating Particles */}
        <motion.div
          style={{ x: x2, y: y2 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[30%] w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
        />
        <motion.div
          style={{ x: x3, y: y3 }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.2] py-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block pb-2">
            Turning Ideas
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="block"
          >
            <span className="text-white">into Impactful </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Content
            </span>
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl text-gray-200 font-medium">
            Transforming Your Vision into Digital Success
          </p>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Boost Your Brand and Elevate Your Online Presence
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
