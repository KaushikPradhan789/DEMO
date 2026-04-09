import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BioSphere } from '../components/BioSphere';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="overflow-hidden">
      <BioSphere />
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div 
          style={{ y: y1, opacity }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-healing-light text-healing-green text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            Bespoke Private Care
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-healing-green leading-[0.9] mb-8 text-balance"
          >
            Healing with <span className="italic text-pulse-red">Intention</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-healing-green/60 leading-relaxed mb-12"
          >
            At Devi Prakash Clinic, we provide a sanctuary for recovery. We blend 
            modern clinical excellence with a deeply personal touch.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/flow">
              <button className="group relative px-10 py-5 bg-pulse-red text-comfort-cream rounded-full overflow-hidden transition-all hover:pr-14">
                <span className="relative z-10 font-medium tracking-wide">Enter the Healing Flow</span>
                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            </Link>
            <Link to="/spaces">
              <button className="px-10 py-5 border border-healing-green/20 text-healing-green rounded-full hover:bg-healing-light transition-colors font-medium">
                Explore Spaces
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 px-6 border-y border-healing-green/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Bespoke Consultations", value: "12k+" },
            { label: "Specialist Nodes", value: "18" },
            { label: "Priority Response", value: "< 5m" },
            { label: "Patient Satisfaction", value: "99.9%" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-serif text-5xl md:text-7xl text-healing-green mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-pulse-red">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-48 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 inline-block"
          >
            <Heart className="w-16 h-16 text-pulse-red" />
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl text-healing-green leading-tight italic">
            "True healing begins when the patient is seen as a whole, not a series of parts."
          </h2>
          <div className="mt-8 text-xs font-bold uppercase tracking-[0.4em] text-pulse-red">
            Dr. Devi Prakash — Founder
          </div>
        </div>
      </section>
    </div>
  );
};