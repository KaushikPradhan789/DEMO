import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Connect = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl text-healing-green mb-12"
            >
              Let's <span className="italic text-pulse-red">Connect</span>
            </motion.h1>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-2xl bg-healing-light flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-healing-green" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-healing-green mb-2">The Sanctuary</h3>
                  <p className="text-healing-green/60 text-base">12 Heritage Plaza, Wellness District, DP 40001</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-2xl bg-healing-light flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-healing-green" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-healing-green mb-2">Pulse Line</h3>
                  <p className="text-healing-green/60 text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-2xl bg-healing-light flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-healing-green" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-healing-green mb-2">Digital Resonance</h3>
                  <p className="text-healing-green/60 text-lg">care@deviprakash.clinic</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-2xl bg-healing-light flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-healing-green" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-healing-green mb-2">Availability</h3>
                  <p className="text-healing-green/60 text-lg">Always Synchronized — 24/7 Care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-healing-light p-12 md:p-16 rounded-[60px] border border-healing-green/5 shadow-xl shadow-healing-green/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="font-serif text-4xl text-healing-green mb-8">Send a Message</h2>
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-healing-green/40">Your Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-healing-green/10 py-4 focus:border-pulse-red outline-none transition-colors text-lg" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-healing-green/40">Email Address</label>
                      <input required type="email" className="w-full bg-transparent border-b border-healing-green/10 py-4 focus:border-pulse-red outline-none transition-colors text-lg" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-healing-green/40">Message</label>
                      <textarea required rows={4} className="w-full bg-transparent border-b border-healing-green/10 py-4 focus:border-pulse-red outline-none transition-colors text-lg resize-none" placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="w-full bg-pulse-red text-comfort-cream py-6 rounded-3xl font-bold uppercase tracking-widest text-sm hover:bg-healing-green hover:text-comfort-cream transition-all">
                      Synchronize Message
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-healing-light flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-healing-green" />
                  </div>
                  <h2 className="font-serif text-4xl text-healing-green mb-4">Message Received</h2>
                  <p className="text-healing-green/60 text-lg">Our team is harmonizing your request. Expect a pulse back within 2 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};