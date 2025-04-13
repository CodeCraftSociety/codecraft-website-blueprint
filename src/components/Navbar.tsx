import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = [{
    name: 'Home',
    to: 'hero'
  }, {
    name: 'About',
    to: 'about'
  }, {
    name: 'Communities',
    to: 'communities'
  }, {
    name: 'Courses',
    to: 'courses'
  }, {
    name: 'Contact',
    to: 'contact'
  }];
  return <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-codecraft-dark/80 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img alt="CodeCraft Logo" className="h-10 w-10" src="/lovable-uploads/f0441783-7358-4f07-853e-d17c3a2c0915.png" />
          <span className="text-gradient font-bold text-xl">CodeCraft Society</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => <Link key={item.to} to={item.to} spy={true} smooth={true} offset={-70} duration={500} className="text-white/80 hover:text-codecraft-orange cursor-pointer transition-colors">
              {item.name}
            </Link>)}
          <a href="https://forms.gle/tuJTc2rzK8jA14U4A" target="_blank" rel="noopener noreferrer" className="bg-codecraft-orange hover:bg-codecraft-orange/90 text-white px-4 py-2 rounded-md transition-colors">
            Join Us
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden bg-codecraft-dark/95 backdrop-blur-md">
          <div className="flex flex-col px-4 py-2 space-y-3">
            {navItems.map(item => <Link key={item.to} to={item.to} spy={true} smooth={true} offset={-70} duration={500} className="text-white/80 hover:text-codecraft-orange py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>)}
            <a href="https://forms.gle/tuJTc2rzK8jA14U4A" target="_blank" rel="noopener noreferrer" className="bg-codecraft-orange hover:bg-codecraft-orange/90 text-white px-4 py-2 rounded-md text-center">
              Join Us
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;