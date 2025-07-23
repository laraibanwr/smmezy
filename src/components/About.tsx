import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Smmezy
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Empowering Brands Through Creative Excellence
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              At Smmezy, we believe every brand has a unique story waiting to be told. Our mission
              is to transform your vision into compelling digital experiences that resonate with
              your audience and drive meaningful engagement.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Through strategic creativity, innovative design, and data-driven insights, we help
              businesses of all sizes establish a powerful online presence that not only looks
              exceptional but delivers measurable results.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-semibold text-white mb-3">Our Mission</h4>
                <p className="text-gray-400">
                  To elevate brands through creative digital solutions that inspire, engage, and
                  convert.
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

          {/* Right Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur rounded-2xl p-6 border border-gray-700/50 flex flex-col items-start gap-6 overflow-visible">
              {/* Animated Background Circles */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
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
                    ease: 'linear',
                  }}
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
                />
              </div>

              {/* Cards */}
              <div className="relative z-10 w-full grid grid-cols-1 gap-7">
                {[
                  {
                    title: 'Creative Excellence',
                    desc: 'Where innovation meets strategy to create extraordinary digital experiences',
                    gradient: 'from-cyan-400 to-blue-400',
                    inner: 'from-cyan-500 to-blue-500',
                  },
                  {
                    title: 'Transformative Growth',
                    desc: 'We craft data-driven strategies to help brands scale with purpose',
                    gradient: 'from-purple-400 to-pink-400',
                    inner: 'from-purple-500 to-pink-500',
                  },
                  {
                    title: 'End-to-End Solutions',
                    desc: 'From concept to launch — we manage every step of your digital journey',
                    gradient: 'from-green-400 to-teal-400',
                    inner: 'from-green-500 to-teal-500',
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center`}
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <div
                          className={`w-4 h-4 bg-gradient-to-r ${item.inner} rounded`}
                        ></div>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
