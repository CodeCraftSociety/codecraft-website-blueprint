
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type Course = {
  title: string;
  link: string;
  image: string;
  category: string;
};

const CoursesSection = () => {
  const courses: Course[] = [
    {
      title: "Core Machine Learning",
      link: "https://ayushsingh7488.graphy.com/courses/Core-Machine-Learning-633ea7dbe4b02d25db3f202d",
      image: "https://images.unsplash.com/photo-1544819679-32c73cd06796?q=80&w=2070&auto=format&fit=crop",
      category: "AI & ML"
    },
    {
      title: "Java Spring Boot 0 to 100",
      link: "https://www.codingshuttle.com/courses/batchBundle/java-spring-boot-0-to-100/",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
      category: "Backend"
    },
    {
      title: "Nexus Level Up (Web & Blockchain)",
      link: "https://rohittnegi.akamai.net.in/new-courses/4-web-development-block-chain",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop",
      category: "Web & Blockchain"
    },
    {
      title: "Namaste Advanced FullStack Bundle",
      link: "https://namastedev.com/learn/namaste-react--namaste-node--namaste-frontend-system-design",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
      category: "Full Stack"
    },
    {
      title: "Sigma 5.0+ (Apna College)",
      link: "https://www.apnacollege.in/course/sigma-7",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      category: "DSA & Development"
    },
    {
      title: "DSA Supreme 2.0",
      link: "https://www.codehelp.in/course/dsa-supreme-2.0",
      image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=2076&auto=format&fit=crop",
      category: "Data Structures"
    },
    {
      title: "Data Science with Generative AI",
      link: "https://pwskills.com/course/data-science-with-generative-ai-course-hinglish/",
      image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2070&auto=format&fit=crop",
      category: "Data Science & AI"
    },
    {
      title: "Communication Masterclass",
      link: "https://thethinkschool.com/sp/communication-masterclass/",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      category: "Soft Skills"
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
    <section id="courses" className="py-20 bg-[#151922]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Free Skill Courses</h2>
          <p className="text-white/90 text-lg mb-4">
            Access premium industry-level courses completely free. 
            These paid courses are provided exclusively to active members of CodeCraft Society.
          </p>
          <div className="p-4 bg-codecraft-orange/10 rounded-lg border border-codecraft-orange/30 mt-6 max-w-2xl mx-auto">
            <p className="text-white/90 italic">
              "Paid course 10k ka free mil raha hai, but bhaiya scroll karna zyada zaroori hai?" <br />
              "Kal jab koi placement le jayega, toh mat kehna 'Fate was unfair.'"
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group"
            >
              <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2 py-1 bg-codecraft-orange/90 text-white text-xs rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-codecraft-orange transition-colors">
                    {course.title}
                  </h3>
                  <div className="mt-auto">
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-codecraft-orange hover:text-white group"
                    >
                      <span className="mr-2">Access Course</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70">
            And many more courses available for our active community members!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
