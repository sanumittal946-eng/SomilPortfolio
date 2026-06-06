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
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-4" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-2 text-foreground/80" style={{ fontWeight: 600 }}>
                  Your Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background/60 backdrop-blur-sm border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{String(errors.name.message)}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-foreground/80" style={{ fontWeight: 600 }}>
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
                  className="w-full px-4 py-3 bg-background/60 backdrop-blur-sm border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{String(errors.email.message)}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-foreground/80" style={{ fontWeight: 600 }}>
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-background/60 backdrop-blur-sm border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{String(errors.message.message)}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-foreground text-background rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                style={{ fontWeight: 600 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
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
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <a
                href="mailto:somilmittal946@gmail.com"
                className="block p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 shadow-lg hover:shadow-2xl hover:scale-102 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-xl transition-all">
                    <Mail size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-foreground/80 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>Email</h3>
                    <p className="text-foreground/60 group-hover:text-foreground/85 transition-colors font-medium">somilmittal946@gmail.com</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/somil-mittal-293a72283"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 shadow-lg hover:shadow-2xl hover:scale-102 hover:border-secondary/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/5 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground rounded-xl transition-all">
                    <Linkedin size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-foreground/80 group-hover:text-secondary transition-colors" style={{ fontWeight: 700 }}>LinkedIn</h3>
                    <p className="text-foreground/60 group-hover:text-foreground/85 transition-colors font-medium">linkedin.com/in/somil-mittal-293a72283</p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/somil566"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 shadow-lg hover:shadow-2xl hover:scale-102 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-xl transition-all">
                    <Github size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-foreground/80 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>GitHub</h3>
                    <p className="text-foreground/60 group-hover:text-foreground/85 transition-colors font-medium">github.com/somil566</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-foreground/5 rounded-2xl border border-foreground/10 backdrop-blur-sm">
              <p className="text-center text-foreground/70" style={{ lineHeight: 1.7 }}>
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
