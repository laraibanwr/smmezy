import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Layout stacks below 820px */}
        <div className="flex flex-col max-[820px]:flex-col lg:flex-row justify-between gap-8 text-center max-[820px]:text-center lg:text-left">
          {/* Left: Brand Info */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Smmezy</h3>
            <p className="text-gray-400">
              From Perspective to Pixels<br />
              Designing your Brand's Presence
            </p>
          </motion.div>

          {/* Center: Quick Links and Founders */}
          <div className="flex flex-col max-[820px]:flex-col lg:flex-row justify-center gap-16 lg:gap-24 flex-1">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-[820px]:text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </motion.div>

            {/* Founders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-[820px]:text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Founders</h4>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/agarwalmahek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Mahek Agarwal
                </a>
                <a
                  href="https://www.linkedin.com/in/saba-anwar-495269213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Saba Anwar
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Social Media */}
          <motion.div
            className="flex-1 flex flex-col items-center max-[820px]:items-center lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://www.instagram.com/smmezy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/smmezy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Smmezy. All rights reserved.{' '}
            <span className="mx-2 text-xl leading-none align-middle text-gray-500">|</span>
            Crafted with passion for digital excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
