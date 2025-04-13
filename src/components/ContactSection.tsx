import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Send, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [{
    icon: <Mail className="h-5 w-5" />,
    text: "society.codecraft@gmail.com",
    link: "mailto:society.codecraft@gmail.com"
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    text: "LinkedIn Page",
    link: "https://www.linkedin.com/company/codecraft-society"
  }, {
    icon: <Instagram className="h-5 w-5" />,
    text: "Instagram",
    link: "https://www.instagram.com/codecraft.society/"
  }, {
    icon: <Send className="h-5 w-5" />,
    text: "Telegram Channel",
    link: "https://t.me/+cbF9l7VO0402Yjg1"
  }];
  return <section id="contact" className="py-20 bg-gradient-to-b from-[#151922] to-codecraft-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Contact & Community</h2>
          <p className="text-white/90 text-lg">
            Ready to join our community? Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
              
              <ul className="space-y-6">
                {contactLinks.map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-codecraft-orange/10 flex items-center justify-center mr-4 group-hover:bg-codecraft-orange transition-colors">
                        <span className="text-codecraft-orange group-hover:text-white transition-colors">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {item.text}
                      </span>
                    </a>
                  </motion.li>)}
              </ul>

              <div className="mt-8">
                <a href="https://forms.gle/zqM3V7zuLgxH2D656" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-codecraft-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-all w-full justify-center">
                  <span>Join via Google Form</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Upcoming Events</h3>
              
              <div className="mb-8 p-4 border border-white/10 rounded-lg bg-white/5">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-codecraft-orange mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-white/90">UI/UX Design Masterclass 🎙️ Guest Speaker: Miss Lilian Nyakio (Kenya) 💼 UI/UX &amp; Visual Storytelling Expert.
 
📅 Date: Wednesday, 16th April 2025 
🕥 Time: 10:30 PM IST 

A golden opportunity for aspiring designers and creatives! Save the date – full details coming soon. ✨</p>
                </div>
              </div>
              
              <h4 className="text-xl font-medium mb-4 text-white">Community Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-codecraft-orange mb-1">11</div>
                  <div className="text-white/70 text-sm">Specialized Groups</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-codecraft-orange mb-1">100%</div>
                  <div className="text-white/70 text-sm">Free Resources</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-codecraft-orange mb-1">11+</div>
                  <div className="text-white/70 text-sm">Premium Courses</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-codecraft-orange mb-1">24/7</div>
                  <div className="text-white/70 text-sm">Community Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
