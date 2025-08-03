import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendEmail } from '../utils/sendEmail'; // adjust path if needed
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.', {
        position: 'bottom-center',
        className: 'rounded-xl',
      });
      return;
    }

    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!', {
        position: 'bottom-center',
        className: 'rounded-xl',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again.', {
        position: 'bottom-center',
        className: 'rounded-xl',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Something <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your brand? Get in touch and let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur rounded-2xl p-6 md:p-8 border border-gray-700/50 h-full flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200" />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200" />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200" />
              </div>

              <textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows={5} required
                className="w-full min-h-[120px] px-4 py-4 bg-gray-800/50 backdrop-blur border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none" />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 h-full flex flex-col"
          >
            {/* Get in Touch Box - UPDATED LAYOUT */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur rounded-2xl p-6 md:p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <a href="mailto:yoursmmezy@gmail.com" className="flex items-center space-x-4 group transition-colors duration-200 hover:text-orange-400 cursor-pointer">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition duration-200 flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-orange-400 transition duration-200">yoursmmezy@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+917482815533" className="flex items-center space-x-4 group transition-colors duration-200 hover:text-orange-400 cursor-pointer">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition duration-200 flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium group-hover:text-orange-400 transition duration-200">+91 7482815533</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Why Work With Us + Book Appointment */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur rounded-2xl p-6 md:p-8 border border-gray-700/50">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4">Why Work With Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  {["Fast Response", "Free Consultation", "Customized Solutions"].map((text, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                      <span className="text-sm md:text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur rounded-2xl p-6 md:p-8 border border-gray-700/50">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4">Book Appointment</h3>
                <Link to="/book-appointment" className="flex items-center space-x-4 group transition-colors duration-200 hover:text-orange-400 cursor-pointer">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition duration-200 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Book a meeting</p>
                    <p className="text-white font-medium group-hover:text-orange-400 transition duration-200">Find a time</p>
                  </div>
                </Link>
                <p className="text-gray-400 text-sm mt-3">Let's connect and discuss the scope of your project.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;