import { motion } from 'motion/react';
import { useInView } from './useInView';
import { useForm } from 'react-hook-form';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  // ── Google Apps Script Web App URL ────────────────────────────────
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyABzKntZeAmtPAmPdXgBNkaseLEYLteJI9TXXbptfFyEevH9pbioDbub8q_Zyfmd83/exec';

  const onSubmit = async (data: any) => {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',           // required for Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    data.name,
          email:   data.email,
          message: data.message,
        }),
      });
      // no-cors means we can't read the response, but if no error thrown it succeeded
      toast.success("Message sent! I'll get back to you soon 🎉");
      reset();
    } catch (err) {
      toast.error('Something went wrong. Please try again or email me directly.');
    }
  };


  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-electric-purple/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-headline text-5xl md:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container mx-auto mb-4 shadow-[0_0_8px_var(--primary-container)]" />
          <p className="text-md md:text-lg text-on-surface/75 max-w-2xl mx-auto font-body">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>
 
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-2xl relative overflow-hidden group">
              {/* Screws */}
              <div className="absolute top-2.5 left-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute top-2.5 right-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute bottom-2.5 left-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute bottom-2.5 right-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

              <div>
                <label className="block mb-2 font-label-caps text-xs uppercase tracking-widest text-secondary-container font-bold">
                  Your Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background/60 border border-glass-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-container/40 text-on-surface transition-all placeholder:text-on-surface/20 text-sm"
                />
                {errors.name && (
                  <p className="text-destructive text-xs font-mono mt-1">{String(errors.name.message)}</p>
                )}
              </div>
 
              <div>
                <label className="block mb-2 font-label-caps text-xs uppercase tracking-widest text-secondary-container font-bold">
                  Email Address
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-background/60 border border-glass-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-container/40 text-on-surface transition-all placeholder:text-on-surface/20 text-sm"
                />
                {errors.email && (
                  <p className="text-destructive text-xs font-mono mt-1">{String(errors.email.message)}</p>
                )}
              </div>
 
              <div>
                <label className="block mb-2 font-label-caps text-xs uppercase tracking-widest text-secondary-container font-bold">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-background/60 border border-glass-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-container/40 text-on-surface transition-all placeholder:text-on-surface/20 text-sm resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-xs font-mono mt-1">{String(errors.message.message)}</p>
                )}
              </div>
 
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary-container text-on-primary-container rounded-xl hover:scale-105 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(195,244,0,0.4)] hover:shadow-[0_0_25px_rgba(195,244,0,0.65)] font-label-caps text-xs uppercase tracking-widest font-bold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Broadcasting...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
 
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center animate-none"
          >
            <div className="space-y-6">
              
              {/* Email Card */}
              <a
                href="mailto:somilmittal946@gmail.com"
                className="block p-6 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border-primary-container/30 transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-container/10 border border-primary-container/20 text-primary-container group-hover:bg-primary-container/20 rounded-xl transition-all">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-label-caps text-xs uppercase tracking-widest font-bold text-primary-container/70 group-hover:text-primary-container transition-colors">Email</h3>
                    <p className="text-on-surface/85 group-hover:text-on-surface transition-colors font-medium font-body text-sm break-all md:text-base">somilmittal946@gmail.com</p>
                  </div>
                </div>
              </a>
 
              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/somil-mittal-293a72283"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border-secondary-container/30 transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary-container/10 border border-secondary-container/20 text-secondary-container group-hover:bg-secondary-container/20 rounded-xl transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label-caps text-xs uppercase tracking-widest font-bold text-secondary-container/70 group-hover:text-secondary-container transition-colors">LinkedIn</h3>
                    <p className="text-on-surface/85 group-hover:text-on-surface transition-colors font-medium font-body text-sm break-all md:text-base">linkedin.com/in/somil-mittal-293a72283</p>
                  </div>
                </div>
              </a>
 
              {/* GitHub Card */}
              <a
                href="https://github.com/somil566"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border-tertiary-fixed-dim/30 transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tertiary-fixed-dim/10 border border-tertiary-fixed-dim/20 text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim/20 rounded-xl transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label-caps text-xs uppercase tracking-widest font-bold text-tertiary-fixed-dim/70 group-hover:text-tertiary-fixed-dim transition-colors">GitHub</h3>
                    <p className="text-on-surface/85 group-hover:text-on-surface transition-colors font-medium font-body text-sm break-all md:text-base">github.com/somil566</p>
                  </div>
                </div>
              </a>
            </div>
 
            {/* Availability Box */}
            <div className="mt-8 p-6 bg-glass-white/5 rounded-2xl border border-glass-white/10 backdrop-blur-sm relative overflow-hidden group">
              {/* Screws */}
              <div className="absolute top-2.5 left-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute top-2.5 right-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute bottom-2.5 left-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute bottom-2.5 right-2.5 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

              <p className="text-center text-on-surface/75 font-body text-sm leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                Feel free to reach out if you'd like to collaborate!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
