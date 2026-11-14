import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Sun, Moon, Home } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const isDarkNow = document.documentElement.classList.contains('dark');
    setTheme(isDarkNow ? 'dark' : 'light');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleReturn = () => {
    if (onBack) {
      onBack();
    } else {
      const base = window.location.pathname.toLowerCase().includes('/somilportfolio')
        ? '/SomilPortfolio/'
        : '/';
      window.location.href = base;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container font-body relative overflow-x-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-tertiary-fixed-dim/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-surface-dim/90 dark:bg-deep-void/90 backdrop-blur-md border-b border-border dark:border-glass-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={handleReturn}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-border dark:border-glass-white/20 shadow-sm flex items-center justify-center bg-surface-dim group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="SM Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-headline font-bold text-sm tracking-tight text-on-surface block leading-tight">
                Somil Mittal
              </span>
              <span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
                Portfolio Privacy Policy
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-xl border border-border dark:border-glass-white/20 bg-surface-dim hover:bg-surface-container flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun size={17} className="text-secondary-container" />
              ) : (
                <Moon size={17} className="text-primary-container" />
              )}
            </button>

            <button
              onClick={handleReturn}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-primary-container text-on-primary-container hover:opacity-90 rounded-xl text-xs font-headline font-semibold transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Policy Document Card */}
        <div className="bg-surface-dim rounded-2xl sm:rounded-3xl border border-border dark:border-glass-white/10 p-5 sm:p-8 md:p-12 shadow-md">
          
          {/* Header Title */}
          <div className="border-b border-border dark:border-glass-white/10 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-container text-xs font-label-caps uppercase tracking-wider font-bold mb-4">
              <Shield size={14} />
              Legal &amp; Data Protection
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
              Last updated: November 14, 2026
            </p>
          </div>

          {/* Prose Content */}
          <div className="space-y-6 text-on-surface/85 leading-relaxed text-sm sm:text-base font-body">
            
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p>
              We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
            </p>

            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface pt-6 border-t border-border dark:border-glass-white/10">
              Interpretation and Definitions
            </h2>
            
            <h3 className="font-headline text-lg font-bold text-on-surface pt-2">
              Interpretation
            </h3>
            <p>
              The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="font-headline text-lg font-bold text-on-surface pt-2">
              Definitions
            </h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li>
                <strong className="text-on-surface">Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
              </li>
              <li>
                <strong className="text-on-surface">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
              </li>
              <li>
                <strong className="text-on-surface">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to Somil Mittal | AI &amp; Machine Learning Developer Portfolio.
              </li>
              <li>
                <strong className="text-on-surface">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
              </li>
              <li>
                <strong className="text-on-surface">Country/State</strong> refers to: Rajasthan, India.
              </li>
              <li>
                <strong className="text-on-surface">Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
              </li>
              <li>
                <strong className="text-on-surface">Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual.
              </li>
              <li>
                <strong className="text-on-surface">Service</strong> refers to the Website.
              </li>
              <li>
                <strong className="text-on-surface">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.
              </li>
              <li>
                <strong className="text-on-surface">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.
              </li>
              <li>
                <strong className="text-on-surface">User</strong> means any individual who accesses or uses the Service.
              </li>
              <li>
                <strong className="text-on-surface">Website</strong> refers to Somil Mittal | AI &amp; Machine Learning Developer Portfolio, accessible from{' '}
                <a
                  href="https://sanumittal946-eng.github.io/SomilPortfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-container underline hover:opacity-80"
                >
                  https://sanumittal946-eng.github.io/SomilPortfolio/
                </a>.
              </li>
              <li>
                <strong className="text-on-surface">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
              </li>
            </ul>

            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface pt-6 border-t border-border dark:border-glass-white/10">
              Collecting and Using Your Personal Information
            </h2>
            
            <h3 className="font-headline text-lg font-bold text-on-surface pt-2">
              Types of Data Collected
            </h3>
            
            <h4 className="font-headline text-base font-semibold text-on-surface pt-1">
              Personal Data
            </h4>
            <p>
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li>Email address</li>
              <li>First name and last name</li>
            </ul>

            <h4 className="font-headline text-base font-semibold text-on-surface pt-2">
              Usage Data
            </h4>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>
              Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <h4 className="font-headline text-base font-semibold text-on-surface pt-2">
              Tracking Technologies and Cookies
            </h4>
            <p>
              We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li>
                <strong className="text-on-surface">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.
              </li>
              <li>
                <strong className="text-on-surface">Web Beacons.</strong> Certain sections of Our Service may contain small electronic files known as web beacons that permit the Company to count users and collect website statistics.
              </li>
            </ul>

            <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-surface-container/60 rounded-xl border border-border dark:border-glass-white/10">
                <p className="font-bold text-on-surface mb-1">Necessary / Essential Cookies</p>
                <p className="text-xs text-on-surface-variant mb-1 font-mono">Type: Session Cookies | Administered by: Us</p>
                <p className="text-xs text-on-surface-variant">These Cookies are essential to provide You with services available through the Website and enable essential features.</p>
              </div>

              <div className="p-4 bg-surface-container/60 rounded-xl border border-border dark:border-glass-white/10">
                <p className="font-bold text-on-surface mb-1">Cookies Policy / Notice Acceptance Cookies</p>
                <p className="text-xs text-on-surface-variant mb-1 font-mono">Type: Persistent Cookies | Administered by: Us</p>
                <p className="text-xs text-on-surface-variant">These Cookies identify whether users have accepted the use of cookies on the Website and record consent choices.</p>
              </div>

              <div className="p-4 bg-surface-container/60 rounded-xl border border-border dark:border-glass-white/10">
                <p className="font-bold text-on-surface mb-1">Functionality Cookies</p>
                <p className="text-xs text-on-surface-variant mb-1 font-mono">Type: Persistent Cookies | Administered by: Us</p>
                <p className="text-xs text-on-surface-variant">These Cookies allow Us to remember choices You make when You use the Website, such as theme preference (Dark or Light mode).</p>
              </div>
            </div>

            <h3 className="font-headline text-lg font-bold text-on-surface pt-4">
              Use of Your Personal Data
            </h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li><strong className="text-on-surface">To provide and maintain Our Service</strong>, including monitoring usage.</li>
              <li><strong className="text-on-surface">To contact You:</strong> By email or other equivalent electronic communications regarding inquiries and updates.</li>
              <li><strong className="text-on-surface">To manage Your requests:</strong> To attend and respond to messages submitted via contact forms.</li>
              <li><strong className="text-on-surface">For data analysis and improvement:</strong> To evaluate and improve user experience on the portfolio.</li>
            </ul>

            <h3 className="font-headline text-lg font-bold text-on-surface pt-4">
              Text Messages Privacy Notice
            </h3>
            <p>
              No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except the Service Providers that technically have to handle them to deliver the texts.
            </p>

            <h3 className="font-headline text-lg font-bold text-on-surface pt-4">
              Retention &amp; Deletion of Your Personal Data
            </h3>
            <p>
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. You have the right to request the deletion of any Personal Data We have collected about You by emailing Us directly.
            </p>

            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface pt-6 border-t border-border dark:border-glass-white/10">
              Security of Your Personal Data
            </h2>
            <p>
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface pt-6 border-t border-border dark:border-glass-white/10">
              Children's and Minors' Privacy
            </h2>
            <p>
              Our Service is not directed to anyone under the age of 16. If You are a parent or guardian and You believe Your child has provided Us with Personal Information, please contact Us.
            </p>

            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface pt-6 border-t border-border dark:border-glass-white/10">
              Contact Us
            </h2>
            <p>If You have any questions about this Privacy Policy, You can contact Us:</p>
            <div className="p-4 bg-surface-container/60 rounded-xl border border-border dark:border-glass-white/10 inline-block">
              <p className="font-mono text-sm text-on-surface">
                By email:{' '}
                <a
                  href="mailto:somilmittal946@gmail.com"
                  className="text-primary-container font-semibold underline hover:opacity-85"
                >
                  somilmittal946@gmail.com
                </a>
              </p>
            </div>

          </div>

          {/* Footer Back Button */}
          <div className="mt-12 pt-8 border-t border-border dark:border-glass-white/10 flex justify-center">
            <button
              onClick={handleReturn}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-container text-on-primary-container rounded-xl font-headline font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-md cursor-pointer"
            >
              <Home size={16} />
              Return to Portfolio
            </button>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-border dark:border-glass-white/10 py-6 text-center text-xs font-mono text-on-surface-variant">
        Somil Mittal | AI &amp; Machine Learning Developer Portfolio · Rajasthan, India
      </footer>

    </div>
  );
}
