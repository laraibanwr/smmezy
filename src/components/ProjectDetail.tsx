import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// Import PDFs
import Project1Pdf from '../assets/moreInfo/Project1.pdf';
import Project2Pdf from '../assets/moreInfo/Project2.pdf';
import Project3Pdf from '../assets/moreInfo/Project3.pdf';
import Project4Pdf from '../assets/moreInfo/Project4.pdf';
import Project5Pdf from '../assets/moreInfo/Project5.pdf';
import Project6Pdf from '../assets/moreInfo/Project6.pdf';

// Map project id to respective PDF
const projectPdfMap: Record<string, string> = {
  project1: Project1Pdf,
  project2: Project2Pdf,
  project3: Project3Pdf,
  project4: Project4Pdf,
  project5: Project5Pdf,
  project6: Project6Pdf,
};

// Import images
import project1Image1 from '../assets/projectDetail/project1/Image1.jpg';
import project1Image2 from '../assets/projectDetail/project1/Image2.jpg';
import project1Image3 from '../assets/projectDetail/project1/Image3.jpg';

import project2Image1 from '../assets/projectDetail/project2/Image1.jpg';
import project2Image2 from '../assets/projectDetail/project2/Image2.jpg';
import project2Image3 from '../assets/projectDetail/project2/Image3.jpg';

import project3Image1 from '../assets/projectDetail/project3/Image1.jpg';
import project3Image2 from '../assets/projectDetail/project3/Image2.jpg';
import project3Image3 from '../assets/projectDetail/project3/Image3.jpg';

import project4Image1 from '../assets/projectDetail/project4/Image1.jpg';
import project4Image2 from '../assets/projectDetail/project4/Image2.jpg';
import project4Image3 from '../assets/projectDetail/project4/Image3.jpg';

import project5Image1 from '../assets/projectDetail/project5/Image1.jpg';
import project5Image2 from '../assets/projectDetail/project5/Image2.jpg';
import project5Image3 from '../assets/projectDetail/project5/Image3.jpg';

import project6Image1 from '../assets/projectDetail/project6/Image1.jpg';
import project6Image2 from '../assets/projectDetail/project6/Image2.jpg';
import project6Image3 from '../assets/projectDetail/project6/Image3.jpg';

const projects = [
  {
    id: 'project1',
    title: 'Kunooz Farms India',
    category: 'Brand Identity & Website',
    images: [project1Image1, project1Image2, project1Image3],
    description: 'Crafted a rich brand identity, jar packaging, and a minimal website for this premium honey brand.',
    detail: 'We designed a distinctive logo and earthy packaging for Kunooz that reflects the purity of their honey and the cultural richness of the Middle East. The packaging design included custom honey jar labels, fabric bows, and gold accents. Along with that, we built a responsive website that showcases their story, product range, and brand values in a clean, elegant layout.'
  },
  {
    id: 'project2',
    title: 'FirstCry Preschool',
    category: 'Social Media & Branding',
    images: [project2Image1, project2Image2, project2Image3],
    description: 'Brought preschool moments to life with fun, colorful Instagram creatives.',
    detail: 'For FirstCry Preschool, we created vibrant and cheerful Instagram content that highlights daily activities, events, and learning moments at the daycare. Our creatives are playful, visually engaging, and tailored to connect with parents while staying true to the FirstCry brand tone.'
  },
  {
    id: 'project3',
    title: 'Marwadi Mahila Samiti',
    category: 'Event & Social Campaigns',
    images: [project3Image1, project3Image2, project3Image3],
    description: 'Designed impactful visuals for social awareness and cultural campaigns.',
    detail: 'We partnered with Marwadi Mahila Samiti to design social media creatives that reflect their community impact, women empowerment activities, and cultural events. Each post was designed with purpose — combining modern layouts with traditional elements to suit both formal and festive tones.'
  },
  {
    id: 'project4',
    title: 'PwC India – AC',
    category: 'Internal Comms Design',
    images: [project4Image1, project4Image2, project4Image3],
    description: 'Designed digital creatives for internal events and cultural celebrations.',
    detail: 'We worked with PwC’s internal team to design fun and engaging creatives for their employee events, festivals, and cultural celebrations. From invitations to social posts and screen slides, the visuals were vibrant, well-aligned with corporate aesthetics, and boosted internal participation.'
  },
  {
    id: 'project5',
    title: 'Aakarshan Home Plus',
    category: 'Festive Branding',
    images: [project5Image1, project5Image2, project5Image3],
    description: 'Built an Instagram presence that reflected their interior design finesse.',
    detail: 'For Aakarshan, we designed elegant Instagram creatives that highlighted their interior design projects, product displays, and festive offers. The visuals blended sleek layouts, premium color palettes, and creative storytelling to match their brand’s sophisticated aesthetic.'
  },
  {
    id: 'project6',
    title: 'Barzen',
    category: 'Branding & Creatives',
    images: [project6Image1, project6Image2, project6Image3],
    description: 'Developed a fresh brand identity with visual elements rooted in nature and taste.',
    detail: 'We crafted a unique logo for Barzen, merging terracotta warmth with a Zen-like calm, reflecting their food philosophy. The packaging sleeve included bold textures and playful QR placements for social media access. On Instagram, we established a stylish, earthy tone through curated feed posts and brand-building content that reflects the brand\'s aesthetic and values.'
  }
];


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (project ? (prev + 1) % project.images.length : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-center text-gray-300 text-xl">
        Project not found.
      </div>
    );
  }

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const pdfLink = projectPdfMap[project.id];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 min-h-screen px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#portfolio"
          state={{ fromProjectDetail: true }}
          className="text-pink-400 hover:text-pink-300 mb-8 flex items-center space-x-2"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back To Portfolio</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/40 backdrop-blur-sm"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={project.images[index]}
                alt={`${project.title} Image ${index + 1}`}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 rounded-full text-white shadow-lg transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 rounded-full text-white shadow-lg transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="text-pink-400 text-sm mb-2">{project.category}</div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>

              {pdfLink && (
                <a
                  href={pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-auto self-start items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-full transition hover:bg-white/20"
                >
                  More Info
                  <ArrowRight size={18} />
                </a>
              )}
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
            <p className="text-gray-400 text-base leading-relaxed">{project.detail}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
