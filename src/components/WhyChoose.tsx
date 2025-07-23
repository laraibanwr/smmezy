import { motion } from 'framer-motion';
import { Users, Award, Clock, Target } from 'lucide-react';

const WhyChoose = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: '150+',
      label: 'Brands Elevated',
      description: 'Successful transformations',
    },
    {
      icon: <Target className="w-10 h-10" />,
      number: '10+',
      label: 'Industries Served',
      description: 'Diverse market expertise',
    },
    {
      icon: <Award className="w-10 h-10" />,
      number: '95%',
      label: 'Client Satisfaction',
      description: 'Exceptional results',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      number: '5+',
      label: 'Years Experience',
      description: 'Proven track record',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div id="why-choose" className="scroll-mt-24" />

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Smmezy
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We deliver results that matter with proven expertise and dedication
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.015,
                y: -3,
                transition: { duration: 0.15, ease: 'easeInOut' }, // FAST transition override here
              }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-blue-500/60 shadow-none hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-center h-60 flex flex-col justify-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-1"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-gray-100 mb-1">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
