import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Import local images
import Project1 from '../assets/project/project1.jpg';
import Project2 from '../assets/project/project2.jpg';
import Project3 from '../assets/project/project3.jpg';
import Project4 from '../assets/project/project4.jpg';
import Project5 from '../assets/project/project5.jpg';
import Project6 from '../assets/project/project6.jpg';

const Portfolio = () => {
  const location = useLocation();
  const portfolioRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location?.state?.fromProjectDetail && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [location]);

  const projects = [
    {
      id: 'project1',
      title: 'Kunooz Farms India',
      category: 'Brand Identity & Website',
      image: Project1,
      description: 'Crafted a rich brand identity, jar packaging, and a minimal website for this premium honey brand.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'project2',
      title: 'FirstCry Preschool',
      category: 'Social Media & Branding',
      image: Project2,
      description: 'Brought preschool moments to life with fun, colorful Instagram creatives.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'project3',
      title: 'Marwadi Mahila Samiti',
      category: 'Event & Social Campaigns',
      image: Project3,
      description: 'Designed impactful visuals for social awareness and cultural campaigns.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/30'
    },
    {
      id: 'project4',
      title: 'PwC India – AC',
      category: 'Internal Comms Design',
      image: Project4,
      description: 'Designed digital creatives for internal events and cultural celebrations.',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-400/30'
    },
    {
      id: 'project5',
      title: 'Aakarshan Home Plus',
      category: 'Festive Branding',
      image: Project5,
      description: 'Built an Instagram presence that reflected their interior design finesse.',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-400/30'
    },
    {
      id: 'project6',
      title: 'Barzen',
      category: 'Branding & Creatives',
      image: Project6,
      description: 'Developed a fresh brand identity with visual elements rooted in nature and taste.',
      gradient: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-400/30'
    }
  ];

  return (
    <section ref={portfolioRef} id="portfolio" className="bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped brands achieve their digital goals
            </p>
          </motion.div>
        </div>

        {/* Sticky Cards Container */}
        <div 
          className="grid grid-cols-1 gap-8 pb-48"
          style={{
            gridTemplateRows: `repeat(${projects.length}, 85vh)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-0"
              style={{
                paddingTop: `${index * 2}rem`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-[85vh]"
              >
                <Link
                  to={`/project/${project.id}`}
                  state={{ fromPortfolio: true }}
                  className="group block h-full"
                >
                  <div className={`
                    relative h-full w-full rounded-3xl overflow-hidden
                    bg-gradient-to-br ${project.gradient} backdrop-blur-xl
                    border ${project.borderColor} shadow-2xl
                    hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]
                    transition-all duration-500 ease-out
                    hover:scale-[1.02] hover:-translate-y-2
                  `}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10">
                      {/* Top Section - Category */}
                      <div className="flex justify-between items-start">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="inline-block"
                        >
                          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-pink-300 border border-white/20">
                            {project.category}
                          </span>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-white/60 group-hover:text-pink-400 transition-colors duration-300"
                        >
                          <ExternalLink size={24} />
                        </motion.div>
                      </div>

                      {/* Bottom Section - Title & Description */}
                      <div className="space-y-4">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="flex items-center space-x-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300"
                        >
                          <span className="text-lg font-semibold">View Project</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ExternalLink size={20} />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-xl" />
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;