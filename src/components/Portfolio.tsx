import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, ExternalLink, Smile, Target } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Project1 from "../assets/project/project1.jpg";
import Project2 from "../assets/project/project2.jpg";
import Project3 from "../assets/project/project3.jpg";
import Project4 from "../assets/project/project4.jpg";
import Project5 from "../assets/project/project5.jpg";
import Project6 from "../assets/project/project6.jpg";

const Portfolio = () => {
  const location = useLocation();
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (location?.state?.fromProjectDetail && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [location]);

  const projects = [
    {
      id: "project1",
      title: "Kunooz Farms India",
      category: "Brand Identity & Website",
      image: Project1,
      description:
        "Identity, packaging, and website for a honey brand, focusing on organic and sustainable practices to deliver natural goodness.",
      gradient: "from-teal-600 via-emerald-500 to-green-400",
      timeline: "5 Weeks",
      requirement: "Branding",
      satisfaction: "95%",
    },
    {
      id: "project2",
      title: "FirstCry Preschool",
      category: "Social Media & Branding",
      image: Project2,
      description:
        "Vibrant Instagram posts and engaging content for preschool branding, designed to attract and inform parents about early childhood education.",
      gradient: "from-fuchsia-500 via-purple-500 to-indigo-400", // ✅ Updated to unique gradient
      timeline: "1 Month",
      requirement: "Marketing",
      satisfaction: "90%",
    },
    {
      id: "project3",
      title: "Marwadi Mahila Samiti",
      category: "Event & Social Campaigns",
      image: Project3,
      description:
        "Compelling social media visuals and campaign strategies for cultural events, promoting community engagement and traditional values.",
      gradient: "from-amber-500 via-yellow-400 to-lime-300",
      timeline: "2 Weeks",
      requirement: "Campaign",
      satisfaction: "92%",
    },
    {
      id: "project4",
      title: "PwC India – AC",
      category: "Internal Comms Design",
      image: Project4,
      description:
        "Creative digital assets and internal communication designs for cultural and corporate events, fostering a connected and informed workforce.",
      gradient: "from-blue-500 via-sky-400 to-cyan-500",
      timeline: "1 Week",
      requirement: "Corporate",
      satisfaction: "97%",
    },
    {
      id: "project5",
      title: "Aakarshan Home Plus",
      category: "Festive Branding",
      image: Project5,
      description:
        "Elegant festive visuals and promotional materials for interior design promotions, capturing the essence of celebration and home aesthetics.",
      gradient: "from-emerald-500 via-lime-400 to-yellow-300",
      timeline: "10 Days",
      requirement: "Festive",
      satisfaction: "93%",
    },
    {
      id: "project6",
      title: "Barzen",
      category: "Branding & Creatives",
      image: Project6,
      description:
        "Comprehensive logo design, packaging, and Instagram content for a food brand, establishing a unique identity in the culinary market.",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-400",
      timeline: "4 Weeks",
      requirement: "Design",
      satisfaction: "98%",
    },
  ];

  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="relative bg-gradient-to-b from-gray-900 to-black min-h-screen pt-24 pb-12"
    >
      {/* Header */}
      <div className="relative z-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped brands achieve their digital goals
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <div className="relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky"
            style={{
              top: `${70 + index * 50}px`,
              zIndex: 10 + index,
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
              <Link
                to={`/project/${project.id}`}
                state={{ fromPortfolio: true }}
                className={`relative w-full min-h-[420px] md:min-h-[480px]
                  rounded-3xl border-1 border-gray-900
                  flex flex-col md:flex-row-reverse items-center justify-center overflow-hidden
                  bg-gradient-to-r ${project.gradient}`}
              >
                {/* Category Tag */}
                <div className="absolute top-3 left-6 md:left-10 text-white text-lg md:text-2xl font-bold z-20">
                  {project.category}
                </div>

                {/* Card Content */}
                <div className="p-4 md:p-10 pt-16 md:pt-20 w-full flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:gap-8">
                  {/* Animated Image */}
                  <motion.div
                    className="w-full md:w-1/2 flex justify-center items-center relative"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl shadow-lg w-[90%] md:w-full object-cover object-center max-h-[260px] md:max-h-[360px]"
                    />

                    {/* Mobile Info Overlay (Horizontal on Image) */}
                    <div className="absolute bottom-2 flex justify-center items-center md:hidden w-full">
                      <div className="flex items-center justify-center gap-4 bg-black/30 backdrop-blur-sm p-2 px-4 rounded-xl text-white w-auto">
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          <span className="text-xs font-medium">
                            {project.timeline}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Target size={14} />
                          <span className="text-xs font-medium">
                            {project.requirement}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Smile size={14} />
                          <span className="text-xs font-medium">
                            {project.satisfaction}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white text-center md:text-left space-y-2 md:space-y-4">
                    <h3 className="text-lg md:text-4xl font-bold md:font-extrabold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-lg font-normal text-white/90">
                      {project.description}
                    </p>

                    {/* Desktop Info Tags */}
                    <div className="hidden md:flex flex-col gap-2 text-white text-base font-medium">
                      <div className="flex items-center gap-2">
                        <Clock size={18} /> {project.timeline}
                      </div>
                      <div className="flex items-center gap-2">
                        <Target size={18} /> {project.requirement}
                      </div>
                      <div className="flex items-center gap-2">
                        <Smile size={18} /> {project.satisfaction}
                      </div>
                    </div>

                    {/* View Project */}
                    <div className="flex items-center gap-2 text-white transition-all duration-200 ease-in-out w-fit">
                      <span className="text-sm md:text-base font-semibold">
                        View Project
                      </span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
        <div className="h-[100px]"></div>
      </div>
    </section>
  );
};

export default Portfolio;
