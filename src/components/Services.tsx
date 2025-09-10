import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Social Media Management',
      description: 'Strategic content creation and community management to boost your online presence and engagement across all platforms.'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Design & Development',
      description: 'Custom, responsive websites that convert visitors into customers with stunning design and flawless functionality.'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Logo, Packaging & Brand Identity',
      description: 'Comprehensive brand identity design that captures your essence and resonates perfectly with your target audience.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Innovative Brand Solutions',
      description: 'Complete digital transformation services to establish and grow your brand presence across all digital channels.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to elevate your brand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.015,
                y: -3,
                transition: { duration: 0.15, ease: 'easeInOut' }
              }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-gray-800/40 backdrop-blur-sm z-10 rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 shadow-none hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-center h-80 flex flex-col"
            >
              <div className="text-purple-400 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 text-center flex-shrink-0">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed flex-grow text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
