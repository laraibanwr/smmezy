import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechFlow Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Smmezy transformed our brand completely. Their creative approach and attention to detail exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Founder, Urban Fitness',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The team delivered exceptional results. Our online presence has never been stronger, and our engagement rates doubled.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Bloom Beauty',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Professional, creative, and results-driven. Smmezy helped us reach our target audience in ways we never imagined.',
      rating: 5
    },
    {
      name: 'David Thompson',
      position: 'Founder, Green Earth Co.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Outstanding service and creativity. They understood our vision and brought it to life beyond our expectations.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const total = testimonials.length;
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return { x: 0, scale: 1, opacity: 1, zIndex: 30, filter: 'blur(0px)' };
    if (diff === 1 || diff === total - 1) return { x: diff === 1 ? 100 : -100, scale: 0.85, opacity: 0.4, zIndex: 20, filter: 'blur(2px)' };
    return { x: 0, scale: 0.8, opacity: 0, zIndex: 10, filter: 'blur(4px)' };
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

        <div className="relative max-w-5xl mx-auto h-[420px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const style = getCardStyle(index);
            return (
              <motion.div
                key={index}
                animate={style}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute will-change-transform bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/10 text-center w-[380px] md:w-[460px] h-[400px] flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-green-400 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mx-0.5" />
                    ))}
                  </div>
                  <blockquote className="text-base text-gray-200 leading-relaxed italic">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mt-6">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
