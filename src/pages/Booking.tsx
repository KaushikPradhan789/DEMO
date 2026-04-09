import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    space: '',
    date: '',
    time: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const spaces = ["Executive Wellness", "The Heart Suite", "Cognitive Flow", "Vitality Lab"];
  const times = ["08:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "06:00 PM"];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl text-healing-green mb-4"
          >
            Book your <span className="italic text-pulse-red">Pulse</span>
          </motion.h1>
          <p className="text-healing-green/60">Select a space and time to begin your resonance journey.</p>
        </div>

        <div className="bg-healing-light p-8 md:p-12 rounded-[50px] border border-healing-green/5 shadow-2xl shadow-healing-green/5">
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                  step >= i ? "bg-pulse-red text-white" : "bg-healing-light text-healing-green/30"
                )}>{i}</div>
                {i < 3 && <div className={cn(
                  "h-px w-12 md:w-24 bg-healing-light",
                  step > i && "bg-pulse-red"
                )} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl text-healing-green">Choose your Healing Space</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {spaces.map(s => (
                    <button
                      key={s}
                      onClick={() => { setFormData({...formData, space: s}); nextStep(); }}
                      className={cn(
                        "p-6 rounded-3xl border text-left transition-all",
                        formData.space === s ? "border-pulse-red bg-pulse-red/5" : "border-healing-green/5 hover:border-pulse-red/20"
                      )}
                    >
                      <Activity className={cn("w-6 h-6 mb-4", formData.space === s ? "text-pulse-red" : "text-healing-green/20")} />
                      <div className="font-serif text-xl text-healing-green">{s}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl text-healing-green">Select Date & Time</h2>
                <div className="space-y-6">
                    <input 
                      type="date" 
                      className="w-full p-4 rounded-2xl bg-comfort-cream border border-healing-green/10 outline-none focus:ring-2 ring-pulse-red/20 text-healing-green"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {times.map(t => (
                      <button
                        key={t}
                        onClick={() => setFormData({...formData, time: t})}
                        className={cn(
                          "p-4 rounded-xl border text-sm font-medium transition-all",
                          formData.time === t ? "border-pulse-red bg-pulse-red text-white" : "border-healing-green/5 hover:border-pulse-red/20"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-8">
                  <button onClick={prevStep} className="flex-1 py-4 rounded-2xl border border-healing-green/10 font-medium">Back</button>
                  <button onClick={nextStep} disabled={!formData.date || !formData.time} className="flex-1 py-4 rounded-2xl bg-pulse-red text-comfort-cream font-medium disabled:opacity-50">Next</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl text-healing-green">Personal Details</h2>
                <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full p-4 rounded-2xl bg-comfort-cream border border-healing-green/10 outline-none focus:ring-2 ring-pulse-red/20 text-healing-green"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full p-4 rounded-2xl bg-comfort-cream border border-healing-green/10 outline-none focus:ring-2 ring-pulse-red/20 text-healing-green"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div className="p-6 bg-comfort-cream rounded-3xl space-y-2 border border-healing-green/10">
                  <div className="text-xs font-bold uppercase tracking-widest text-healing-green/40">Summary</div>
                  <div className="text-healing-green font-medium">{formData.space} — {formData.date} at {formData.time}</div>
                </div>
                <div className="flex gap-4 pt-8">
                  <button onClick={prevStep} className="flex-1 py-4 rounded-2xl border border-healing-green/10 font-medium">Back</button>
                  <button onClick={nextStep} disabled={!formData.name || !formData.email} className="flex-1 py-4 rounded-2xl bg-pulse-red text-white font-bold uppercase tracking-widest text-xs">Confirm Pulse</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-healing-light flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-healing-green" />
                </div>
                <h2 className="font-serif text-4xl text-healing-green mb-4">Pulse Confirmed</h2>
                <p className="text-healing-green/60 mb-8">Your resonance session has been scheduled. Check your email for synchronization details.</p>
                <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-pulse-red text-comfort-cream rounded-2xl font-medium">Return Home</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};