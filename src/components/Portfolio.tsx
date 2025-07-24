import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Import local images
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';
import Project4 from '../assets/project4.jpg';
import Project5 from '../assets/project5.jpg';
import Project6 from '../assets/project6.jpg';

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
      id: 'techflow-solutions',
      title: 'TechFlow Solutions',
      category: 'Brand Identity & Website',
      image: Project1,
      description: 'Complete digital transformation for a tech startup'
    },
    {
      id: 'bloom-beauty',
      title: 'Bloom Beauty',
      category: 'Social Media & Branding',
      image: Project2,
      description: 'Beauty brand social media management and growth'
    },
    {
      id: 'urban-fitness',
      title: 'Urban Fitness',
      category: 'Website & Digital Strategy',
      image: Project3,
      description: 'Fitness center digital presence optimization'
    },
    {
      id: 'green-earth-co',
      title: 'Green Earth Co.',
      category: 'Logo & Brand Guidelines',
      image: Project4,
      description: 'Sustainable brand identity design'
    },
    {
      id: 'digital-nomad-hub',
      title: 'Digital Nomad Hub',
      category: 'Full Digital Package',
      image: Project5,
      description: 'Co-working space complete branding solution'
    },
    {
      id: 'artisan-coffee',
      title: 'Artisan Coffee',
      category: 'Social Media Strategy',
      image: Project6,
      description: 'Local coffee shop brand awareness campaign'
    }
  ];

  return (
    <section ref={portfolioRef} id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              state={{ fromPortfolio: true }}
              className="group relative bg-gray-800/40 backdrop-blur-sm z-10 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-pink-400/70 hover:shadow-[0_0_16px_rgba(244,114,182,0.35)] transition-all duration-300 ease-in-out h-80"
            >
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  width={600}
                  height={320}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              </div>

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
                <div className="text-sm text-pink-400 mb-2 font-medium">
                  {project.category}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-all duration-200 ease-in-out w-fit">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
