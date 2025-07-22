import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Smmezy</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Empowering Brands Through Creative Excellence
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              At Smmezy, we believe every brand has a unique story waiting to be told. Our mission is to transform your vision into compelling digital experiences that resonate with your audience and drive meaningful engagement.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Through strategic creativity, innovative design, and data-driven insights, we help businesses of all sizes establish a powerful online presence that not only looks exceptional but delivers measurable results.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-semibold text-white mb-3">Our Mission</h4>
                <p className="text-gray-400">
                  To elevate brands through creative digital solutions that inspire, engage, and convert.
                </p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-semibold text-white mb-3">Our Vision</h4>
                <p className="text-gray-400">
                  To be the catalyst that transforms ideas into impactful digital experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur rounded-2xl p-8 border border-gray-700/50 h-96 flex items-center justify-center overflow-hidden">
              {/* Abstract Design Elements */}
              <div className="absolute inset-0">
                <motion.div 
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
                />
                <motion.div 
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [180, 90, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
                />
              </div>

              {/* Central Content */}
              <div className="relative z-10 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Creative Excellence</h4>
                    <p className="text-gray-400 text-sm">
                      Where innovation meets strategy to create extraordinary digital experiences
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Transformative Growth</h4>
                    <p className="text-gray-400 text-sm">
                      We craft data-driven strategies to help brands scale with purpose
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded"></div>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">End-to-End Solutions</h4>
                    <p className="text-gray-400 text-sm">
                      From concept to launch — we manage every step of your digital journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
