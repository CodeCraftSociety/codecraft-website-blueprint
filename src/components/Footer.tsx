import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, Instagram, Mail, Send } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/company/codecraft-society"
  }, {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/codecraft.society/"
  }, {
    icon: <Mail size={20} />,
    href: "mailto:society.codecraft@gmail.com"
  }, {
    icon: <Send size={20} />,
    href: "https://t.me/+cbF9l7VO0402Yjg1"
  }];
  const navLinks = [{
    name: "Home",
    to: "hero"
  }, {
    name: "About Us",
    to: "about"
  }, {
    name: "Communities",
    to: "communities"
  }, {
    name: "Courses",
    to: "courses"
  }, {
    name: "Contact",
    to: "contact"
  }];
  return <footer className="bg-codecraft-dark pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="text-gradient font-bold text-xl">CodeCraft Society</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A student-driven non-profit tech community helping learners master real-world skills
              in AI, Development, Cybersecurity, and more — all for FREE.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-codecraft-orange transition-colors">
                  <span className="text-white">{link.icon}</span>
                </a>)}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => <li key={index}>
                  <Link to={link.to} spy={true} smooth={true} offset={-70} duration={500} className="text-white/70 hover:text-codecraft-orange transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Join Us</h3>
            <a href="https://forms.gle/tuJTc2rzK8jA14U4A" target="_blank" rel="noopener noreferrer" className="inline-block bg-codecraft-orange hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-md transition-colors mb-4">
              Join the Community
            </a>
            <p className="text-white/70 mt-4 italic">
              "You have all the tools. Are you ready to build your future?"
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© {currentYear} CodeCraft Society. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Nationwide | 100% Free | Student-Driven
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;