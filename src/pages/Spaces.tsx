import { motion } from 'framer-motion';
import { Activity, Heart, Shield, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export const Spaces = () => {
  const spaces = [
    {
      title: "Executive Wellness",
      dept: "Preventative Care",
      desc: "Comprehensive health assessments designed for the high-performance individual.",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-healing-green/5",
      details: "Our flagship program focuses on early detection, stress management, and metabolic optimization in a private setting."
    },
    {
      title: "The Heart Suite",
      dept: "Cardiology",
      desc: "Advanced cardiovascular diagnostics and personalized heart health management.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-healing-green/5",
      details: "We combine elite technology with lifestyle coaching to ensure your heart beats with strength and longevity."
    },
    {
      title: "Cognitive Flow",
      dept: "Neurology & Mental Health",
      desc: "Nurturing mental clarity and neurological health through holistic approaches.",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-healing-green/5",
      details: "From sleep optimization to stress resilience, we protect your most vital asset: your mind."
    },
    {
      title: "Vitality Lab",
      dept: "Regenerative Medicine",
      desc: "Harnessing the body's natural healing power to restore youth and vigor.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-healing-green/5",
      details: "Personalized therapies designed to slow the aging process and enhance your biological resilience."
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-healing-green mb-8"
          >
            Clinical <span className="italic text-pulse-red">Sanctuaries</span>
          </motion.h1>
          <p className="text-lg text-healing-green/60 leading-relaxed">
            At Devi Prakash Clinic, our spaces are designed to feel like a home away from home, where clinical excellence meets boutique hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spaces.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[50px] bg-healing-light border border-healing-green/5 hover:border-pulse-red/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className={cn("w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3", space.color)}>
                  <div className="text-healing-green scale-150">{space.icon}</div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-pulse-red mb-2 block">{space.dept}</span>
                  <h3 className="font-serif text-3xl text-healing-green mb-6">{space.title}</h3>
                  <p className="text-healing-green/60 text-base leading-relaxed mb-8">{space.desc}</p>
                  <p className="text-healing-green/40 mb-8 italic">{space.details}</p>
                  <Link to="/booking">
                    <button className="flex items-center gap-3 text-healing-green font-bold uppercase tracking-widest text-xs group/btn">
                      Book Consultation <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};