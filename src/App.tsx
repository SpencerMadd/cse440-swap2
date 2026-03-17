/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Lightbulb, 
  Target, 
  Layers, 
  PlayCircle, 
  ChevronRight, 
  Github, 
  ExternalLink,
  Info,
  Mic,
  Headphones
} from 'lucide-react';

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-zinc-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ title, description, icon: Icon, image }: { title: string, description: string, icon?: any, image?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all"
  >
    {image && (
      <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-zinc-100">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    )}
    {Icon && (
      <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-6">
        <Icon size={24} />
      </div>
    )}
    <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </motion.div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="logo.png" alt="Podparse Logo" className="w-20 h-20 object-contain" />
            <span className="font-bold text-xl tracking-tight">Podparse</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#problem" className="hover:text-zinc-900 transition-colors">Problem</a>
            <a href="#solution" className="hover:text-zinc-900 transition-colors">Solution</a>
            <a href="#process" className="hover:text-zinc-900 transition-colors">Process</a>
            <a href="#demo" className="hover:text-zinc-900 transition-colors">Demo</a>
          </div>
          <button 
            onClick={() => window.open('https://chart-movie-48375646.figma.site', '_blank')}
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Try Prototype
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Final Project Showcase
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
                Podparse <br />
                <span className="text-zinc-400 italic font-serif font-light">Your AI podcast listening assistant.</span>
              </h1>
              <p className="text-xl text-zinc-500 max-w-lg mb-10 leading-relaxed">
                Empowering college-aged political podcast listeners with the tools to fact-check, verify, and critically review the information they consume.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Team Member" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-zinc-900">The Team</p>
                  <p className="text-zinc-500">Joon Eom, Spencer Madden, Gabriel Sison, Jayden D’Souza</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/product/1200/1200" 
                alt="Product Hero" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-2">Featured Concept</p>
                <h3 className="text-2xl font-bold">Political podcast listening for college students</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Understanding the gap between current solutions and user needs.">
            The Problem
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-rose-500" />
                  Problem Statement
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed italic">
                  "College-aged political podcast listeners do not have tools to verify and review the information they find presented in podcasts."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl border border-zinc-100">
                  <p className="text-3xl font-bold text-zinc-900 mb-1">83%</p>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Influence on Understanding</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-zinc-100">
                  <p className="text-3xl font-bold text-zinc-900 mb-1">50%</p>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Time/Engagement Loss</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl aspect-video bg-black relative">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/TzDN-opiQkQ" 
                title="Podparse Concept Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Our vision for a better way forward.">
            The Solution
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card 
              icon={Lightbulb}
              title="Value Proposition"
              description="An AI-powered app and web browser extension designed specifically for podcast platforms to enhance critical listening."
            />
            <Card 
              icon={Layers}
              title="Real-time Analysis"
              description="Leveraging advanced AI to parse long-form audio content, providing instant context and verification tools."
            />
            <Card 
              icon={Users}
              title="Critical Engagement"
              description="Moving from passive listening to active engagement, helping users think for themselves while multitasking."
            />
          </div>

          <div className="bg-zinc-900 rounded-[40px] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-4xl font-bold mb-6">Key Functionality</h3>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Podparse integrates directly into your listening workflow with four core pillars of functionality:
              </p>
              <ul className="space-y-4">
                {[
                  'Voice assistance to answer questions in real-time', 
                  'Source verification & Credibility analyzer', 
                  'Interactive AI Chatbot for deep dives', 
                  'Smart Note taker & Saved previous episodes'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <ChevronRight size={14} className="text-zinc-900" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <img 
                src="https://picsum.photos/seed/solution-detail/800/800" 
                alt="Solution Detail" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Conveying the thinking that went into our final solution and the intermediate steps that shaped it.">
            Our Process
          </SectionHeading>

          {/* Research Phase */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold">01</div>
              <h3 className="text-2xl font-bold">User Research & Findings</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">19</div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">UW Students Surveyed</p>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Our survey of students aged 19-22 revealed that **83%** feel podcasts significantly influence their worldview, yet few have tools to verify what they hear.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">4</div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Deep-Dive Interviews</p>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Interviews highlighted a "Passive Consumption Trap": users listen while walking or exercising, making even simple interactions like rewinding a major inconvenience.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">100%</div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Multitasking Rate</p>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Every participant reported listening while performing low-effort tasks, leading to missed context and "afterthought" realizations of important points.
                </p>
              </div>
            </div>
          </div>

          {/* Pivots & Learnings */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold">02</div>
              <h3 className="text-2xl font-bold">Pivots & Key Learnings</h3>
            </div>
            
            <div className="bg-zinc-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">The Major Pivot</h4>
                <p className="text-2xl md:text-3xl font-light leading-tight mb-8">
                  We initially envisioned a social platform for discussing podcasts. However, research showed that the <span className="text-emerald-400 font-medium italic">real bottleneck</span> wasn't a lack of discussion, but the inability to engage critically while multitasking.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="font-bold mb-2">Learning 01</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">Friction is the enemy. If a verification tool requires more than two taps, students will skip it and remain uninformed.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Learning 02</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">Memory is fleeting. Students remember "vibes" but forget the evidence. Automatic capture is essential for later critical review.</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Task Scenarios */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold">03</div>
              <h3 className="text-2xl font-bold">Task Scenarios for Design</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Clarifying a short portion",
                  type: "Existing",
                  difficulty: "Easy",
                  scenario: "A student walking to class misses an important explanation but hesitates to stop moving just to rewind it.",
                  insight: "Passive listening leads to missed conversations. Rewinding is a high-friction interaction while moving."
                },
                {
                  title: "Capturing key points",
                  type: "New",
                  difficulty: "Easy",
                  scenario: "A student finishes a workout and remembers learning something useful but cannot recall the specific example.",
                  insight: "Students remember themes but forget evidence. Automatic capture jogs memory without relistening."
                },
                {
                  title: "Language Learning",
                  type: "New",
                  difficulty: "Medium",
                  scenario: "Greg practices a new language while walking. Gaps in knowledge or distractions limit his understanding.",
                  insight: "Generative translations provide real-time context for native conversations heard in the wild."
                },
                {
                  title: "Evaluating Credibility",
                  type: "Existing",
                  difficulty: "Medium",
                  scenario: "Jordan, a policy student, encounters unsupported claims. She needs to evaluate if the host is a reliable source.",
                  insight: "Identifies patterns in argument quality and judge overall credibility across multiple episodes."
                },
                {
                  title: "Tracking Single Arguments",
                  type: "Existing",
                  difficulty: "Hard",
                  scenario: "Alex wants to track how a minimum wage discussion evolves over a 6-hour episode without unrelated content.",
                  insight: "Identifies specific segments where a topic is discussed, allowing contextual listening and note capture."
                },
                {
                  title: "Finding Related Content",
                  type: "Existing",
                  difficulty: "Hard",
                  scenario: "Bob wants to explore diverse perspectives on public health policy but doesn't know where to start.",
                  insight: "Differentiates perspectives to avoid repeat information and help users escape 'darts in the dark'."
                }
              ].map((task, i) => (
                <div key={i} className="bg-white border border-zinc-200 p-6 rounded-2xl hover:border-zinc-400 transition-colors">
                  <div className="flex gap-2 mb-4">
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${task.type === 'New' ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-100 text-zinc-600'}`}>
                      {task.type}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      task.difficulty === 'Easy' ? 'bg-blue-100 text-blue-700' : 
                      task.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                      'bg-rose-100 text-rose-700'
                    }`}>
                      {task.difficulty}
                    </span>
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2">{task.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">{task.scenario}</p>
                  <p className="text-[10px] text-zinc-400 italic">"{task.insight}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Experience the final design in action.">
            The Final Result
          </SectionHeading>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl relative group border border-zinc-200">
                {/* Interactive Figma Embed */}
                <iframe 
                  className="w-full h-full"
                  src="https://chart-movie-48375646.figma.site" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <a 
                  href="https://chart-movie-48375646.figma.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all text-center"
                >
                  <ExternalLink size={20} />
                  Open Interactive Prototype
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Podparse Logo" className="w-16 h-16 object-contain" />
              <span className="font-bold text-lg tracking-tight">Podparse</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Created for [Course Name] &bull; [University Name] &bull; 2026
            </p>
          </div>
          
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">The Team</p>
              <ul className="text-sm text-zinc-600 space-y-2">
                <li>Joon Eom</li>
                <li>Spencer Madden</li>
                <li>Gabriel Sison</li>
                <li>Jayden D’Souza</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Project</p>
              <ul className="text-sm text-zinc-600 space-y-2">
                <li><a href="#problem" className="hover:text-zinc-900">Problem</a></li>
                <li><a href="#solution" className="hover:text-zinc-900">Solution</a></li>
                <li><a href="#process" className="hover:text-zinc-900">Process</a></li>
                <li><a href="#demo" className="hover:text-zinc-900">Demo</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-50 text-center text-zinc-300 text-xs">
          &copy; 2026 Podparse Team. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
