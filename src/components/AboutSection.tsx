
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'Specialized Skill-Based Communities',
    'Structured Learning Roadmaps',
    'Free Access to Industry-Level Courses',
    'Technical Webinars, Projects & Mentorship',
    'A Collaborative, Supportive Peer Network'
  ];

  return (
    <section id="about" className="py-20 bg-codecraft-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Us</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            CodeCraft Society is a student-driven non-profit tech community helping learners master real-world skills in AI, 
            Development, Cybersecurity, and more — all for FREE. We organize webinars, roadmap-based learning, 
            and provide access to premium resources and mentorship. Join us to learn, build, and grow together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/90 leading-relaxed mb-6">
              We provide a structured environment for students to explore, learn, and grow in specialized domains
              like Web Development, Artificial Intelligence, Cybersecurity, DevOps, UI/UX, Data Science, and more. Our
              community is driven by mentorship, collaboration, and curated resources that accelerate real-world skill
              development.
            </p>
            <p className="text-white/90 leading-relaxed">
              Whether you're a beginner or a budding expert — if you're serious about growth, CodeCraft is your
              launchpad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-codecraft-orange mr-2">✨</span> What We Offer:
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-codecraft-orange mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
