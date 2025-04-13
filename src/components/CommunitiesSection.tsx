
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Smartphone, Cloud, Shield, Database, Code, Gamepad2, Palette, Video, Cpu } from 'lucide-react';

type Community = {
  icon: React.ReactNode;
  name: string;
  description: string;
  link: string;
  color: string;
};

const CommunitiesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const communities: Community[] = [
    {
      icon: <Globe className="h-6 w-6" />,
      name: "WebCrafters",
      description: "Everything from HTML to Full-Stack mastery.",
      link: "https://chat.whatsapp.com/LPMIdaNx5mSAQuGWQ28BXQ",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      name: "AI Crafters",
      description: "Dive into AI & Machine Learning development.",
      link: "https://chat.whatsapp.com/G1PzM5Atwau2LwbnprIVDm",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      name: "AppCrafters",
      description: "Mobile development for Android and iOS.",
      link: "https://chat.whatsapp.com/Ey3Qzz8slGbIxZsS6uYUzE",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      name: "CloudCrafters",
      description: "Cloud infrastructure and DevOps practices.",
      link: "https://chat.whatsapp.com/HKaMY61CgW06Wf4piRm3Lh",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      name: "CyberCrafters",
      description: "Cybersecurity, ethical hacking, and defense.",
      link: "https://chat.whatsapp.com/HdmvYBKpepm3R1GNTXSyOw",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: "DataCrafters",
      description: "Data Science, analytics, and visualization.",
      link: "https://chat.whatsapp.com/GZlEjL68vj4Av1czoeu0YI",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Code className="h-6 w-6" />,
      name: "CodeCrafters",
      description: "Competitive programming and algorithms.",
      link: "https://chat.whatsapp.com/CKxVaLPkLeo4K1XEdiymJX",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      name: "GameCrafters",
      description: "Game development and interactive experiences.",
      link: "https://chat.whatsapp.com/Lt0fmCc3s1u13FmLrCsgUx",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      name: "DesignCrafters",
      description: "UI/UX design principles and practices.",
      link: "https://chat.whatsapp.com/KI7greZmTKW3N2z0J4dM07",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Video className="h-6 w-6" />,
      name: "MotionCrafters",
      description: "Video editing and motion graphics.",
      link: "https://chat.whatsapp.com/HgeAET6eXqJCDpliEojeSj",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      name: "EmbeddedCrafters",
      description: "IoT and embedded systems development.",
      link: "#",
      color: "from-gray-500 to-gray-600",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="communities" className="py-20 bg-gradient-to-b from-codecraft-dark to-[#151922]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Community Structure</h2>
          <p className="text-white/90 text-lg">
            Join our specialized groups based on your interests and career goals. 
            Each community provides roadmaps, resources, and mentorship to help you grow.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {communities.map((community, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={item}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full glass-card rounded-xl p-6 border border-white/10 transition-all duration-300 ${hoveredCard === index ? 'transform -translate-y-2' : ''}`}>
                <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 bg-gradient-to-r ${community.color}`}>
                  {community.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{community.name}</h3>
                <p className="text-white/70 mb-6">{community.description}</p>
                <div className="space-y-3 mt-auto">
                  <a 
                    href={community.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block w-full text-center py-2 px-4 rounded-md text-white font-medium transition-colors ${community.name === "EmbeddedCrafters" ? 'bg-gray-600 cursor-not-allowed' : 'bg-codecraft-orange hover:bg-codecraft-orange/90'}`}
                  >
                    {community.name === "EmbeddedCrafters" ? "Coming Soon" : "Join Group"}
                  </a>
                  <button className="inline-block w-full text-center py-2 px-4 rounded-md border border-white/20 text-white/80 font-medium hover:bg-white/5 transition-colors">
                    View Roadmap
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
