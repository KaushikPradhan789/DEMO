import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, Phone, MapPin, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import * as d3 from 'd3';
import { cn } from '@/src/lib/utils';

export const PulseBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;
    svg.attr('viewBox', `0 0 ${width} ${height}`);
    const nodes = d3.range(15).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 100 + 50,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    const update = () => {
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -node.r) node.x = width + node.r;
        if (node.x > width + node.r) node.x = -node.r;
        if (node.y < -node.r) node.y = height + node.r;
        if (node.y > height + node.r) node.y = -node.r;
      });
      const circles = svg.selectAll('circle').data(nodes);
      circles.enter()
        .append('circle')
        .attr('fill', 'rgba(233, 237, 201, 0.05)')
        .attr('filter', 'blur(40px)')
        .merge(circles as any)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r);
      requestAnimationFrame(update);
    };
    update();
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      svg.attr('viewBox', `0 0 ${w} ${h}`);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <svg ref={svgRef} className="fixed inset-0 -z-10 pointer-events-none w-full h-full opacity-50" />;
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Spaces', href: '/spaces' },
    { name: 'The Flow', href: '/flow' },
    { name: 'Connect', href: '/connect' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
      scrolled ? "bg-comfort-cream/80 backdrop-blur-md py-3 border-b border-healing-green/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-pulse-red rounded-full animate-ping opacity-20" />
            <Activity className="w-8 h-8 text-pulse-red relative z-10" />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight text-healing-green">
            Devi Prakash <span className="text-pulse-red font-light italic">Clinic</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.href}
                className={cn(
                  "font-sans text-sm font-medium uppercase tracking-widest transition-colors relative group",
                  location.pathname === item.href ? "text-pulse-red" : "text-healing-green/60 hover:text-pulse-red"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-px bg-pulse-red transition-all duration-300",
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            </motion.div>
          ))}
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pulse-red text-comfort-cream px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-healing-green hover:text-comfort-cream transition-colors"
            >
              Book a Pulse
            </motion.button>
          </Link>
        </div>

        <button className="md:hidden text-healing-green" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-comfort-cream border-t border-healing-green/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-serif text-3xl transition-colors",
                    location.pathname === item.href ? "text-pulse-red" : "text-healing-green hover:text-pulse-red"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-healing-green text-comfort-cream py-4 rounded-2xl text-lg font-medium">
                  Book a Pulse
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-healing-light text-healing-green pt-32 pb-12 px-6 border-t border-healing-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">Your Health, Our <span className="italic text-pulse-red">Legacy</span>.</h2>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-pulse-red mt-1" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Private Sanctuary</div>
                  <div className="text-xl">12 Heritage Plaza, Wellness District, DP 40001</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
             <h3 className="font-serif text-3xl">Quick Navigation</h3>
             <div className="grid grid-cols-2 gap-4">
                <Link to="/" className="hover:text-pulse-red transition-colors">Home</Link>
                <Link to="/spaces" className="hover:text-pulse-red transition-colors">Spaces</Link>
                <Link to="/flow" className="hover:text-pulse-red transition-colors">The Flow</Link>
                <Link to="/connect" className="hover:text-pulse-red transition-colors">Connect</Link>
             </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-healing-green/10 gap-8">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-pulse-red" />
            <span className="font-serif text-xl">Devi Prakash Clinic</span>
          </div>
          <div className="text-sm opacity-30">
            © 2026 Devi Prakash Clinic. All Rhythms Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export const EmergencyPulse = () => {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-pulse-red rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        <a href="tel:+91 9835910848" className="relative w-16 h-16 bg-pulse-red text-white rounded-full flex items-center justify-center shadow-2xl shadow-pulse-red/40 hover:scale-110 transition-transform">
          <Phone className="w-6 h-6" />
          <div className="absolute right-full mr-4 bg-healing-green text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Urgent Care Pulse
          </div>
        </a>
      </div>
    </motion.div>
  );
};
