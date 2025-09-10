import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

import Testimonial1 from '../assets/testimonial/Testimonial1.png';
import Testimonial2 from '../assets/testimonial/Testimonial2.png';
import Testimonial3 from '../assets/testimonial/Testimonial3.png';
import Testimonial4 from '../assets/testimonial/Testimonial4.png';
import Testimonial5 from '../assets/testimonial/Testimonial5.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Yash Suryansh',
      position: 'Founder, Smridhi Iron Company',
      image: Testimonial1,
      quote:
        'Smmezy’s drone shoot captured our sponge iron factory with stunning clarity and precision. Their team was professional, creative, and delivered high-quality footage that impressed everyone.',
      rating: 5
    },
    {
      name: 'Urwashi',
      position: 'Dubai, Marketing Exec.',
      image: Testimonial2,
      quote:
        'With Smmezy managing our social media, we’ve seen a real boost in engagement and consistency. Their creative strategies and timely execution make them a go-to team for digital presence.',
      rating: 5
    },
    {
      name: 'Manoj',
      position: 'Founder, Shopee House',
      image: Testimonial3,
      quote:
        'With Smmezy managing our social media, we’ve seen a real boost in engagement and consistency. Their creative strategies and timely execution make them a go-to team for digital presence.',
      rating: 5
    },
    {
      name: 'Irfan Faisal Sheikh',
      position: 'Founder, AR Enterprises',
      image: Testimonial4,
      quote:
        'We wanted a clean, impactful landing page and Smmezy delivered just that. From design to functionality, everything was on point and the process was super smooth.',
      rating: 5
    },
    {
      name: 'Md. Ismail',
      position: 'Buisness Partner, FirstCry',
      image: Testimonial5,
      quote:
        'Smmezy has transformed our preschool’s Instagram with bright, engaging creatives that truly reflect the joy and warmth of our space. Their work connects beautifully with parents and builds trust.',
      rating: 5
    }
  ];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getTestimonialAt = (offset: number) => {
    const index = (currentIndex + offset + testimonials.length) % testimonials.length;
    return testimonials[index];
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: Three cards side by side */}
          <div className="hidden lg:flex justify-center items-center h-[420px] overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Left Card */}
              <motion.div
                key={`left-${currentIndex}`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-80 z-10"
              >
                <TestimonialCard testimonial={getTestimonialAt(-1)} variant="side" />
              </motion.div>

              {/* Center Card */}
              <motion.div
                key={`center-${currentIndex}`}
                initial={{ x: 0, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 0, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-96 z-20 mx-6"
              >
                <TestimonialCard testimonial={getTestimonialAt(0)} variant="center" />
              </motion.div>

              {/* Right Card */}
              <motion.div
                key={`right-${currentIndex}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-80 z-10"
              >
                <TestimonialCard testimonial={getTestimonialAt(1)} variant="side" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Single card with side navigation */}
          <div className="lg:hidden relative flex justify-center items-center h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${currentIndex}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full max-w-sm"
              >
                <TestimonialCard testimonial={getTestimonialAt(0)} variant="center" />
              </motion.div>
            </AnimatePresence>
          </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-center space-x-4">
          <button
            onClick={goToPrev}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  variant = 'center' 
}: { 
  testimonial: any; 
  variant?: 'center' | 'side';
}) => {
  const isCenter = variant === 'center';
  
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 text-center h-[400px] flex flex-col justify-between shadow-xl transition-all duration-300
        ${isCenter ? 'opacity-100' : 'opacity-60 blur-[1px]'}
      `}
    >
      <div>
        <div className="flex justify-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className={`rounded-full object-cover border-4 border-green-400 shadow-md ${
              isCenter ? 'w-16 h-16' : 'w-14 h-14'
            }`}
          />
        </div>
        <div className="flex justify-center mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mx-0.5" />
          ))}
        </div>
        <blockquote className={`text-gray-200 leading-relaxed italic ${
          isCenter ? 'text-base' : 'text-sm'
        }`}>
          "{testimonial.quote}"
        </blockquote>
      </div>
      <div className="mt-6">
        <h4 className={`font-semibold text-white ${
          isCenter ? 'text-lg' : 'text-base'
        }`}>
          {testimonial.name}
        </h4>
        <p className={`text-gray-400 ${
          isCenter ? 'text-sm' : 'text-xs'
        }`}>
          {testimonial.position}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;