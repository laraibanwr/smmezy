import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';
import Project4 from '../assets/Project4.jpg';
import Project5 from '../assets/Project5.jpg';
import Project6 from '../assets/Project6.jpg';

const projects = [
  {
    id: 'techflow-solutions',
    title: 'TechFlow Solutions',
    category: 'Brand Identity & Website',
    image: Project1,
    description: 'Complete digital transformation for a tech startup with a focus on clean branding and intuitive UX.'
  },
  {
    id: 'bloom-beauty',
    title: 'Bloom Beauty',
    category: 'Social Media & Branding',
    image: Project2,
    description: 'Managed Bloom Beauty’s digital brand voice and grew their following with a content-driven strategy.'
  },
  {
    id: 'urban-fitness',
    title: 'Urban Fitness',
    category: 'Website & Digital Strategy',
    image: Project3,
    description: 'Created a responsive, SEO-optimized site and digital plan for a growing fitness brand.'
  },
  {
    id: 'green-earth-co',
    title: 'Green Earth Co.',
    category: 'Logo & Brand Guidelines',
    image: Project4,
    description: 'Designed a minimalist, nature-inspired logo and brand system for a sustainable product company.'
  },
  {
    id: 'digital-nomad-hub',
    title: 'Digital Nomad Hub',
    category: 'Full Digital Package',
    image: Project5,
    description: 'End-to-end digital presence build: branding, website, SEO, and ad campaigns for remote co-working space.'
  },
  {
    id: 'artisan-coffee',
    title: 'Artisan Coffee',
    category: 'Social Media Strategy',
    image: Project6,
    description: 'Grew a local café’s brand with storytelling content and micro-influencer marketing.'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-center text-gray-300 text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 min-h-screen px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#portfolio"
          state={{ fromProjectDetail: true }}
          className="text-pink-400 hover:text-pink-300 mb-8 flex items-center space-x-2"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/40 backdrop-blur-sm"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <div className="text-pink-400 text-sm mb-2">{project.category}</div>
            <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
