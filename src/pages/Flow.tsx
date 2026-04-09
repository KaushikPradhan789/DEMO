import { motion } from 'framer-motion';

export const Flow = () => {
  const steps = [
    {
      step: "01",
      title: "Resonance",
      desc: "We begin by understanding your unique biological and emotional frequency. This isn't just a checkup; it's a deep listening session.",
      details: "Using bio-rhythmic sensors and empathetic dialogue, we map your current state against your natural potential."
    },
    {
      step: "02",
      title: "Alignment",
      desc: "Our specialists create a personalized harmony plan tailored to your pulse. No two rhythms are the same.",
      details: "We coordinate nutrition, movement, medical intervention, and environmental factors to bring you back to center."
    },
    {
      step: "03",
      title: "Sustenance",
      desc: "Continuous monitoring and adjustment to ensure long-term vitality. Healing is a lifelong dance.",
      details: "Our digital pulse-link keeps you connected to your care team, providing real-time adjustments as your life evolves."
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-serif text-5xl md:text-7xl text-healing-green mb-8"
            >
              The <span className="italic text-pulse-red">Flow</span>
            </motion.h1>
            <p className="text-lg text-healing-green/60 leading-relaxed mb-12">
              Our methodology is inspired by the natural cycles of the earth and the human body. We don't force healing; we facilitate it.
            </p>
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/flow-healing/800/600" 
                alt="Healing Flow" 
                className="w-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-healing-green/20 mix-blend-multiply" />
            </div>
          </div>

          <div className="space-y-24 py-12">
            {steps.map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 font-serif text-8xl text-pulse-red/10 leading-none">{item.step}</div>
                <h3 className="font-serif text-3xl text-healing-green mb-6">{item.title}</h3>
                <p className="text-healing-green/60 text-lg leading-relaxed mb-6">{item.desc}</p>
                <div className="p-8 bg-healing-light/50 rounded-3xl border border-healing-green/5 italic text-healing-green/50">
                  {item.details}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};