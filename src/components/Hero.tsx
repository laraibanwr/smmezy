import { motion, useReducedMotion } from 'framer-motion';
import heroVideo from '../assets/hero.mp4';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Overlay to slightly darken the video for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* ✅ Hero Text */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-8">
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.2] py-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block pb-2">
            Turning Ideas
          </span>
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="block"
          >
            <span className="text-white">into Impactful </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Results
            </span>
          </motion.span>
        </motion.h1>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl text-gray-200 font-medium">
            Transforming Your Vision into Digital Success
          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Boost Your Brand and Elevate Your Online Presence
          </p>

          {/* ✅ Buttons */}
          <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-300 font-medium shadow-sm"
            >
              View Services
            </motion.button>
            <motion.button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold shadow-lg transition duration-300"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ✅ Scroll Indicator */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start"
          style={{ willChange: 'transform' }}
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            style={{ willChange: 'transform' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
