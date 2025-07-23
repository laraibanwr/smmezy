import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animationFrame = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    });
  };

  const x1 = useTransform(mouseX, [-10, 10], [-10, 10]);
  const y1 = useTransform(mouseY, [-10, 10], [-10, 10]);

  useEffect(() => {
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const totalShapes = 35;
  const shapes = ['circle', 'square', 'triangle'];

  const renderShape = (i: number) => {
    const size = Math.floor(Math.random() * 40) + 20;
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    const top = `${Math.floor(Math.random() * 100)}%`;
    const left = `${Math.floor(Math.random() * 100)}%`;

    const commonStyle: any = {
      top,
      left,
      width: size,
      height: size,
      x: x1,
      y: y1,
      position: 'absolute',
      willChange: 'transform',
    };

    if (shape === 'triangle') {
      return (
        <motion.div
          key={`triangle-${i}`}
          style={{
            ...commonStyle,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        />
      );
    }

    const rounded = shape === 'circle' ? 'rounded-full' : 'rounded-none';

    return (
      <motion.div
        key={`${shape}-${i}`}
        style={commonStyle}
        className={`border border-white/10 ${rounded}`}
      />
    );
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(totalShapes)].map((_, i) => renderShape(i))}
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.2] py-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block pb-2">
            Turning Ideas
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
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
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl text-gray-200 font-medium">
            Transforming Your Vision into Digital Success
          </p>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Boost Your Brand and Elevate Your Online Presence
          </p>

          <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-300 font-medium shadow-sm"
            >
              View Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold shadow-lg transition duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
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
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
