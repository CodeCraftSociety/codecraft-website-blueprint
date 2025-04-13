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
  const courses: Course[] = [{
    title: "Core Machine Learning",
    link: "https://ayushsingh7488.graphy.com/courses/Core-Machine-Learning-633ea7dbe4b02d25db3f202d",
    image: "https://images.unsplash.com/photo-1544819679-32c73cd06796?q=80&w=2070&auto=format&fit=crop",
    category: "AI & ML"
  }, {
    title: "Java Spring Boot 0 to 100",
    link: "https://www.codingshuttle.com/courses/batchBundle/java-spring-boot-0-to-100/",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    category: "Backend"
  }, {
    title: "Nexus Level Up (Web & Blockchain)",
    link: "https://rohittnegi.akamai.net.in/new-courses/4-web-development-block-chain",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop",
    category: "Web & Blockchain"
  }, {
    title: "Namaste Advanced FullStack Bundle",
    link: "https://namastedev.com/learn/namaste-react--namaste-node--namaste-frontend-system-design",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
    category: "Full Stack"
  }, {
    title: "Sigma 5.0+ (Apna College)",
    link: "https://www.apnacollege.in/course/sigma-7",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    category: "DSA & Development"
  }, {
    title: "DSA Supreme 2.0",
    link: "https://www.codehelp.in/course/dsa-supreme-2.0",
    image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=2076&auto=format&fit=crop",
    category: "Data Structures"
  }, {
    title: "Data Science with Generative AI",
    link: "https://pwskills.com/course/data-science-with-generative-ai-course-hinglish/",
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2070&auto=format&fit=crop",
    category: "Data Science & AI"
  }, {
    title: "Communication Masterclass",
    link: "https://thethinkschool.com/sp/communication-masterclass/",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    category: "Soft Skills"
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return;
};
export default CoursesSection;