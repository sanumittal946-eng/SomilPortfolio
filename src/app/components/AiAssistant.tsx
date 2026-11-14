import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  RefreshCw,
  Zap,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    sectionId: string;
  };
}

const QUICK_PROMPTS = [
  {
    icon: '🧠',
    label: "Somil's AI & ML Skills",
    query: "What are Somil's core AI and Machine Learning skills?",
  },
  {
    icon: '🏆',
    label: 'GDG Hackathon 1st Place',
    query: 'Tell me about the project that won 1st place in the GDG Hackathon.',
  },
  {
    icon: '📜',
    label: 'Verified Certifications',
    query: 'What certifications and Credly badges does Somil hold?',
  },
  {
    icon: '💼',
    label: 'Internships & Opportunities',
    query: 'Is Somil available for AI/ML or web development roles?',
  },
];

const SYSTEM_INSTRUCTION = `You are Somil Mittal's personal AI Assistant on his portfolio website.
Your mission is to represent Somil authentically, professionally, concisely, and warmly to visitors, recruiters, and engineering managers.

ABOUT SOMIL MITTAL:
- Full Name: Somil Mittal
- Role: BCA (AI & ML) Student, AI/ML Developer, Full-Stack Web Developer.
- Location: Jaipur, Rajasthan, India.
- Education: Bachelor of Computer Applications in Artificial Intelligence & Machine Learning at Poornima University, Jaipur (2025–2028).
- Work Experience:
  - Web Development Intern at Codveda Technologies (May 2026 – June 2026).
  - Student Chapter Member at ACM (Jan 2026 – Present).
- Core Technical Skills:
  - Languages: Python (primary), C, JavaScript (ES6+), TypeScript, SQL.
  - AI & Machine Learning: OpenCV, Computer Vision, Face Recognition, Deep Learning architectures, PyTorch, Prompt Engineering.
  - Full-Stack & Backend: React, Next.js, Tailwind CSS, PostgreSQL, Supabase, Prisma ORM, REST APIs.
  - Tools: Git & GitHub, VS Code, Linux/Bash, Canva, Figma.
- Highlighted Projects:
  1. Code Connect: 1st Place Winner in GDG On Campus Hackathon. Developer collaboration hub featuring real-time Code Space, collaborative Pod Space, an AI Assistant, and gamified coding challenges.
  2. Face Recognition Attendance System: Computer vision and OpenCV-powered biometric identification system for automated logging.
  3. AI Finance Advisor: Full-stack SaaS platform (Next.js, Supabase, Prisma, PostgreSQL, Chart.js, Stripe) for automated financial insights.
  4. Laundry Management System: Relational database management and customer billing application.
- Honors & Certifications:
  - 1st Place Winner — "Let's Hack It" Hackathon (GDG Poornima University, 2025)
  - Google Gemini Certified Student (2026)
  - The Science of Happiness and Well-being (NPTEL — IIT Kharagpur, 2025)
  - Enhancing Soft Skills and Personality (NPTEL — IIT Roorkee, 2026)
  - Python DSA Completion (Unstop, 2026)
  - Web Development Internship (Codveda Technologies, 2026)
  - 8 Verified Credly Badges in Cloud, Data Science, and Machine Learning.
- Contact & Links:
  - LinkedIn: https://www.linkedin.com/in/somil-mittal-293a72283
  - GitHub: https://github.com/somil566
  - Contact Form: Located at the bottom of the page in the #contact section.

CRITICAL FORMATTING & STYLE RULES:
1. NEVER output markdown tables, ASCII tables, or pipe (|) columns under any circumstances. Tables cannot render cleanly in mobile chat screens.
2. Use clean, natural conversational paragraphs and concise bullet points.
3. Keep responses punchy, sharp, and engaging (typically 2 to 4 concise paragraphs or bullet points).
4. Never mention backend AI model names, providers (do not mention Groq, Gemini, Llama, OpenAI, etc.), API keys, or debug indicators. Speak authentically as Somil's personal portfolio assistant.
5. If asked about hiring or internships, warmly emphasize that Somil is actively open for opportunities and encourage the user to reach out via the Contact form or LinkedIn!`;

function renderFormattedContent(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-1.5 space-y-1 pl-4 list-disc marker:text-primary-container">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  const parseInline = (line: string): React.ReactNode[] => {
    const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold text-on-surface">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-surface-dim/80 text-primary-container font-mono text-[11px]"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      return;
    }

    // Heading ## or ###
    if (line.startsWith('### ') || line.startsWith('## ') || line.startsWith('# ')) {
      flushList();
      const headingText = line.replace(/^#+\s*/, '');
      elements.push(
        <h5 key={`h-${idx}`} className="font-bold text-primary-container text-xs mt-2 mb-1">
          {headingText}
        </h5>
      );
      return;
    }

    // Bullet points (- or * or •)
    if (/^[-*•]\s+/.test(line)) {
      const itemText = line.replace(/^[-*•]\s+/, '');
      currentList.push(
        <li key={`li-${idx}`} className="text-xs leading-relaxed text-on-surface/90">
          {parseInline(itemText)}
        </li>
      );
      return;
    }

    // Numbered lists (1. etc)
    if (/^\d+\.\s+/.test(line)) {
      const itemText = line.replace(/^\d+\.\s+/, '');
      currentList.push(
        <li key={`li-${idx}`} className="text-xs leading-relaxed text-on-surface/90">
          {parseInline(itemText)}
        </li>
      );
      return;
    }

    // Skip pure markdown table separator rows if any leak through
    if (/^\|[-:\s|]+\|$/.test(line)) {
      return;
    }

    // Strip pipe delimiters if any leak through
    const cleanedLine = line.startsWith('|') && line.endsWith('|')
      ? line.slice(1, -1).split('|').join(' • ').trim()
      : line;

    flushList();
    elements.push(
      <p key={`p-${idx}`} className="text-xs leading-relaxed text-on-surface/90 my-1">
        {parseInline(cleanedLine)}
      </p>
    );
  });

  flushList();
  return <div className="space-y-1">{elements}</div>;
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Hidden API key loaded exclusively from environment variables (kept safe and never exposed in the GUI)
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || '').trim();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I'm Somil's AI assistant. Ask me anything about Somil's projects, technical skills, certifications, or background — how can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Real-Time LLM API Call (Supports Groq & Google Gemini seamlessly in background)
  const callAiApi = async (userQuery: string, history: Message[]): Promise<string> => {
    // ── Groq Cloud Execution (High-speed Llama / Qwen inference) ──
    if (apiKey.startsWith('gsk_')) {
      const messagesPayload = [
        { role: 'system', content: SYSTEM_INSTRUCTION },
        ...history
          .filter((m) => m.id !== 'welcome')
          .map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        { role: 'user', content: userQuery },
      ];

      // Primary model: openai/gpt-oss-120b
      let res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: messagesPayload,
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      // Fallback model: qwen/qwen3.8-27b
      if (!res.ok) {
        res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'qwen/qwen3.8-27b',
            messages: messagesPayload,
            temperature: 0.7,
            max_tokens: 500,
          }),
        });
      }

      if (!res.ok) {
        throw new Error(`API error ${res.status}`);
      }

      const data = await res.json();
      return data?.choices?.[0]?.message?.content || "I'm here to help! Ask me anything about Somil.";
    }

    // ── Google Gemini API Execution ──
    const contents = history
      .filter((m) => m.id !== 'welcome')
      .map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));

    contents.push({
      role: 'user',
      parts: [{ text: userQuery }],
    });

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Gemini API error ${res.status}`);
    }

    const data = await res.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return candidateText || "I'm here to help! Ask me anything about Somil.";
  };

  // Fallback Local Knowledge Base
  const getFallbackReply = (query: string) => {
    const lower = query.toLowerCase();
    if (lower.includes('skill') || lower.includes('ai') || lower.includes('python')) {
      return {
        reply: "Somil specializes in AI & Machine Learning, Computer Vision (OpenCV), and Full-Stack Development (Python, C, React, Next.js, PostgreSQL, Supabase).",
        action: { label: 'Explore Skills', sectionId: 'skills' },
      };
    }
    if (lower.includes('hackathon') || lower.includes('gdg') || lower.includes('code connect')) {
      return {
        reply: "Somil secured 1st Place at the GDG Hackathon with Code Connect — a real-time developer collaboration platform featuring an AI Research Assistant and gamified coding challenges.",
        action: { label: 'View Project', sectionId: 'projects' },
      };
    }
    if (lower.includes('certif') || lower.includes('nptel') || lower.includes('badge')) {
      return {
        reply: "Somil holds credentials from Google (Gemini Certified Student), NPTEL — IIT (The Science of Happiness and Well-being & Soft Skills), Unstop (Python DSA), and 8 verified Credly digital badges.",
        action: { label: 'View Certificates', sectionId: 'certificates' },
      };
    }
    if (lower.includes('hire') || lower.includes('intern') || lower.includes('work') || lower.includes('contact')) {
      return {
        reply: "Somil is actively open for AI/ML and Software Engineering internships! You can message him directly via the contact form or LinkedIn.",
        action: { label: 'Contact Somil', sectionId: 'contact' },
      };
    }
    return {
      reply: "Somil is a BCA (AI & ML) student at Poornima University building intelligent web systems and computer vision applications. Feel free to ask about his projects, skills, or experience!",
      action: { label: 'View Projects', sectionId: 'projects' },
    };
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    if (!textToSend) setInput('');
    setIsTyping(true);

    if (apiKey) {
      try {
        const reply = await callAiApi(query, newHistory);
        setMessages((prev) => [
          ...prev,
          {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } catch {
        // Seamless fallback to profile knowledge base without displaying technical errors
        const fallback = getFallbackReply(query);
        setMessages((prev) => [
          ...prev,
          {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: fallback.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            action: fallback.action,
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    } else {
      setTimeout(() => {
        const fallback = getFallbackReply(query);
        setMessages((prev) => [
          ...prev,
          {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: fallback.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            action: fallback.action,
          },
        ]);
        setIsTyping(false);
      }, 400);
    }
  };

  const executeAction = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* ── Floating Launcher Trigger ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-3 sm:p-3.5 md:px-5 md:py-3.5 rounded-full bg-surface-dim/95 backdrop-blur-xl border border-primary-container/40 text-on-surface shadow-[0_0_25px_rgba(195,244,0,0.3)] hover:shadow-[0_0_35px_rgba(195,244,0,0.5)] transition-all flex items-center gap-2.5 sm:gap-3 cursor-pointer"
        >
          {/* Pulsing online indicator */}
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary-container" />
          </span>

          <div className="flex items-center gap-2">
            <Bot size={18} className="text-primary-container group-hover:rotate-12 transition-transform sm:w-5 sm:h-5" />
            <span className="hidden md:inline font-label-caps text-xs uppercase tracking-widest font-bold text-primary-container">
              AI Assistant
            </span>
          </div>

          <Sparkles size={14} className="text-tertiary-fixed-dim animate-pulse hidden sm:inline" />
        </motion.button>
      </div>

      {/* ── AI Terminal Dialog ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 left-3 sm:left-auto w-auto sm:w-[440px] h-[520px] max-h-[78vh] sm:h-[580px] sm:max-h-[84vh] bg-surface-dim/95 backdrop-blur-2xl rounded-3xl border border-glass-white/20 shadow-[0_20px_60px_rgba(2,6,23,0.85)] z-50 flex flex-col overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-glass-white/10 bg-surface-container/40">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-xl bg-primary-container/10 border border-primary-container/20 text-primary-container">
                  <Bot size={16} />
                </div>
                <div>
                  <h4 className="font-label-caps text-xs uppercase tracking-widest font-bold text-on-surface flex items-center gap-1.5">
                    SOMIL-AI
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] font-mono text-emerald-400 font-medium">
                    ● Online
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Reset Chat */}
                <button
                  onClick={() =>
                    setMessages([
                      {
                        id: 'welcome',
                        sender: 'ai',
                        text: "Conversation cleared. How can I help you explore Somil's work or skills?",
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                      },
                    ])
                  }
                  title="Clear conversation"
                  className="p-1.5 rounded-lg text-on-surface/50 hover:text-on-surface hover:bg-glass-white/10 transition-colors cursor-pointer"
                >
                  <RefreshCw size={14} />
                </button>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-on-surface/50 hover:text-white hover:bg-glass-white/10 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Messages Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-body text-xs leading-relaxed">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-primary-container text-[#161e00] font-medium rounded-tr-sm'
                        : 'bg-surface-container/70 border border-glass-white/10 text-on-surface/90 rounded-tl-sm'
                    }`}
                  >
                    {renderFormattedContent(msg.text)}

                    {/* Action Button inside AI message */}
                    {msg.action && (
                      <button
                        onClick={() => executeAction(msg.action!.sectionId)}
                        className="mt-3 px-3 py-1.5 rounded-lg bg-primary-container/15 hover:bg-primary-container text-primary-container hover:text-[#161e00] border border-primary-container/30 transition-all font-label-caps text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 cursor-pointer"
                      >
                        <Zap size={11} />
                        {msg.action.label}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-on-surface/40 mt-1 px-1">
                    <span>{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-surface-container/50 border border-glass-white/10 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] font-mono text-primary-container ml-1">
                    Thinking...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="px-3 py-2 border-t border-glass-white/10 bg-surface-container/20 flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(qp.query)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-glass-white/5 hover:bg-primary-container/15 text-on-surface/75 hover:text-primary-container border border-glass-white/10 hover:border-primary-container/30 transition-all text-[10px] font-mono flex items-center gap-1 cursor-pointer flex-shrink-0"
                >
                  <span>{qp.icon}</span>
                  <span>{qp.label}</span>
                </button>
              ))}
            </div>

            {/* Message Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-glass-white/10 bg-surface-dim flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Somil..."
                className="flex-1 bg-surface-container/60 border border-glass-white/10 rounded-xl px-3.5 py-2.5 text-xs text-on-surface placeholder:text-on-surface/40 focus:outline-none focus:border-primary-container/50 focus:shadow-[0_0_12px_rgba(195,244,0,0.15)] font-body"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-primary-container text-[#161e00] disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary-container/20 cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
