import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechFlow Solutions',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'Smmezy transformed our brand completely. Their creative approach and attention to detail exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Founder, Urban Fitness',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'The team delivered exceptional results. Our online presence has never been stronger, and our engagement rates doubled.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Bloom Beauty',
      image:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'Professional, creative, and results-driven. Smmezy helped us reach our target audience in ways we never imagined.',
      rating: 5
    },
    {
      name: 'David Thompson',
      position: 'Founder, Green Earth Co.',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'Outstanding service and creativity. They understood our vision and brought it to life beyond our expectations.',
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