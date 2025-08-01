import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// PDFs
import Project1Pdf from '../assets/moreInfo/Project1.pdf';
import Project2Pdf from '../assets/moreInfo/Project2.pdf';
import Project3Pdf from '../assets/moreInfo/Project3.pdf';
import Project4Pdf from '../assets/moreInfo/Project4.pdf';
import Project5Pdf from '../assets/moreInfo/Project5.pdf';
import Project6Pdf from '../assets/moreInfo/Project6.pdf';

// Images
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

const projectPdfMap: Record<string, string> = {
  project1: Project1Pdf,
  project2: Project2Pdf,
  project3: Project3Pdf,
  project4: Project4Pdf,
  project5: Project5Pdf,
  project6: Project6Pdf,
};

const projects = [
  {
    id: 'project1',
    title: 'Kunooz Farms India',
    category: 'Brand Identity & Website',
    images: [project1Image1, project1Image2, project1Image3],
    description: 'Identity, packaging, and website for a honey brand, focusing on organic and sustainable practices to deliver natural goodness.',
    detail: 'We crafted a complete brand identity for Kunooz Farms India that reflects their commitment to purity and organic farming. The project involved designing a nature-inspired logo, developing sophisticated packaging with custom honey jar labels, and incorporating earthy tones and gold accents to evoke luxury and authenticity. We also developed a mobile-friendly, responsive website that tells the brand story, highlights product origins, and encourages trust in its natural goodness. The website integrated visual storytelling, smooth navigation, and purchasing options tailored for a premium organic audience.',
    timeline: 'The project was completed in 5 weeks through focused collaboration, structured execution, and creative alignment with the client’s vision.',
    requirement: 'The client required a full branding package including logo, packaging design, and a responsive website that aligns with their organic and cultural values.',
    satisfaction: 'We achieved a 95% satisfaction rate with great appreciation for the earthy aesthetics and user-friendly site experience.',
  },
  {
    id: 'project2',
    title: 'FirstCry Preschool',
    category: 'Social Media & Branding',
    images: [project2Image1, project2Image2, project2Image3],
    description: 'Vibrant Instagram posts and engaging content for preschool branding, designed to attract and inform parents about early childhood education.',
    detail: 'For FirstCry Preschool, we deliver ongoing monthly content designed to engage parents and reinforce the preschool’s joyful learning environment. Our work includes playful Instagram visuals, informative carousels, highlights of classroom activities, and themed event promotions — all in line with FirstCry’s tone and color palette. The visuals are developed to foster emotional connections and trust with parents, enhancing both reach and interaction. We also support seasonal campaigns, admissions promotions, and feedback stories, creating a dynamic and consistent brand presence.',
    timeline: 'The project is maintained and updated on a monthly basis. Our team ensures consistent execution through a structured workflow, close client collaboration, and timely iterations to keep the platform fresh and effective.',
    requirement: 'Ongoing content creation and branding support were required to consistently engage parents and reflect the cheerful identity of the preschool.',
    satisfaction: 'Achieved a 90% ongoing satisfaction rate, with noticeable improvements in engagement and continued positive feedback from both parents and staff — leading to regular renewals and long-term trust.',
  },
  {
    id: 'project3',
    title: 'Marwadi Mahila Samiti',
    category: 'Event & Social Campaigns',
    images: [project3Image1, project3Image2, project3Image3],
    description: 'Compelling social media visuals and campaign strategies for cultural events, promoting community engagement and traditional values.',
    detail: 'We partnered with Marwadi Mahila Samiti to create culturally rich and event-focused social media content for various community celebrations. The deliverables included festival-specific posts, countdown reels, community highlights, and awareness creatives. Each piece of content was carefully designed to reflect traditional values while resonating with modern digital audiences. The visuals helped build excitement, increase participation in events, and establish the Samiti’s presence as a vibrant and organized cultural group.',
    timeline: 'Completed in 2 weeks with focused delivery and frequent client input to align with event schedules and community goals.',
    requirement: 'The client needed event-centric visuals and campaigns that would appeal to a traditional yet socially engaged audience.',
    satisfaction: 'Secured a 92% satisfaction rating with strong community engagement and appreciation for timely campaign rollouts.',
  },
  {
    id: 'project4',
    title: 'PwC India – AC',
    category: 'Internal Comms Design',
    images: [project4Image1, project4Image2, project4Image3],
    description: 'Creative digital assets and internal communication designs for cultural and corporate events, fostering a connected and informed workforce.',
    detail: 'We collaborated with PwC’s Acceleration Center (AC) to create internal communication designs that were both professional and engaging. The scope included designing newsletters, employee engagement creatives, event invitations, and digital posters for internal campaigns. Each asset adhered to PwC brand guidelines while introducing fresh, visually compelling elements to retain employee attention and involvement. These communication pieces played a crucial role in keeping the workforce informed, involved, and motivated across various cultural and business events.',
    timeline: 'The internal communications and event creatives were delivered in 1 week with close coordination to ensure alignment with PwC’s cultural calendar.',
    requirement: 'The PwC team required engaging digital assets and templates for internal newsletters, event invites, and employee engagement posts.',
    satisfaction: 'We achieved a 97% satisfaction rate, with recurring collaboration requests and positive feedback from multiple internal teams.',
  },
  {
    id: 'project5',
    title: 'Aakarshan Home Plus',
    category: 'Festive Branding',
    images: [project5Image1, project5Image2, project5Image3],
    description: 'Elegant festive visuals and promotional materials for interior design promotions, capturing the essence of celebration and home aesthetics.',
    detail: 'Aakarshan Home Plus approached us to develop a festive branding campaign that would elevate their interior design offerings during seasonal promotions. We designed elegant, culturally resonant creatives for Diwali and other festive occasions — incorporating traditional motifs, warm color palettes, and promotional offers into digital banners, social media stories, and in-store displays. The campaign was designed to emotionally connect with audiences looking to upgrade their homes during the festive season.',
    timeline: 'The project was completed within 10 days to align with the festive marketing campaign launch timeline.',
    requirement: 'The brand needed elegant, festive-themed promotional creatives that aligned with the celebratory spirit and home decor aesthetics.',
    satisfaction: 'We recorded a 93% satisfaction rate based on festive campaign performance and repeat engagement from the client.',
  },
  {
    id: 'project6',
    title: 'Barzen',
    category: 'Branding & Creatives',
    images: [project6Image1, project6Image2, project6Image3],
    description: 'Comprehensive logo design, packaging, and Instagram content for a food brand, establishing a unique identity in the culinary market.',
    detail: 'For Barzen, a rising salad brand, we developed a complete visual identity to distinguish them in the competitive food market. This included a bold, modern logo, clean packaging layouts, and a vibrant Instagram aesthetic. Our content strategy reflected their brand voice — fresh, experimental, and flavorful. From product showcase reels to ingredient stories and lifestyle visuals, we helped position Barzen as an exciting, high-quality choice for food lovers looking for something new.',
    timeline: 'The project was successfully completed in 4 weeks with multiple design iterations and continuous feedback from the client.',
    requirement: 'The client required a bold new identity for their food brand — including a logo, product packaging, and brand-aligned social media content.',
    satisfaction: 'Achieved a 98% satisfaction score with excellent reception for the distinctive look and digital presence.',
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const project = projects.find((p) => p.id === id);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 rounded-full text-white shadow-lg transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
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
            <p className="text-gray-400 text-base leading-relaxed mb-6">{project.detail}</p>

            {/* New Sections */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {project.timeline}
              </p>
            </div>
            {/* Requirement */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Requirement</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {project.requirement}
              </p>
            </div>

            {/* Satisfaction */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Satisfaction</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {project.satisfaction}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
