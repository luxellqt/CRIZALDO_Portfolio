import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cloud, 
  Wind, 
  Menu, 
  X, 
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Search,
  ArrowRight,
  Facebook
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'The Cloud', id: 'hero' },
    { name: 'Flavor Profile', id: 'skills' },
    { name: 'Builds', id: 'projects' },
    { name: 'Connect', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Smoke / Vapor Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-[#050505]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                 <Cloud className="text-purple-400 group-hover:text-teal-400 transition-colors" size={32} />
                 <div className="absolute inset-0 blur-md bg-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                VAPOR<span className="text-white font-light">DEV</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all"
                >
                  {link.name}
                </button>
              ))}
              <button className="px-6 py-2 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all font-bold uppercase text-xs tracking-widest">
                Resume
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-bold text-left text-gray-300 hover:text-purple-400"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Wind size={14} className="text-teal-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Programmer</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight">
                <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">CRIZALDO,</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 animate-gradient-x">
                  LUXELL JOHN
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
                "Computer science student crafting beautiful digital solutions. Specializing in full-stack web and app development with a focus on user experience."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 group"
                >
                  See My Builds <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/10 hover:border-teal-400/50 transition-all backdrop-blur-md"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Photo / Graphic Container */}
            <div className="flex-1 flex justify-center order-1 md:order-2 relative">
               {/* Glowing Ring Effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-teal-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
               
               <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                  {/* Glassmorphism Circle */}
                  <div className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"></div>
                  
                  {/* Spinning Ring */}
                  <div className="absolute -inset-4 rounded-full border-t border-r border-purple-500/50 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute -inset-8 rounded-full border-b border-l border-teal-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

                  {/* Profile Image */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10 mix-blend-overlay"></div>
                    <img 
                      src="src/assets/pic.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover object-center rounded-full group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Vapor Text */}
                    <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                       <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-teal-300 border border-teal-500/30">
                          EST. 2024
                       </span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills (Flavor Profile) */}
      <section id="skills" className="py-24 relative bg-[#080808]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                FLAVOR <span className="text-purple-500">PROFILE</span>
             </h2>
             <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full"></div>
             <p className="mt-4 text-gray-400">The ingredients that make up my tech stack.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
                { title: "React.js, Vite, Laravel, Flutter", sub: "Frontend Base", icon: <Code2 />, color: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
                { title: "Node.js, PHP, Python, Java", sub: "Backend Punch", icon: <Cpu />, color: "text-green-400", glow: "group-hover:shadow-green-500/20" },
                { title: "Tailwind, JS, Bootstrap, CSS", sub: "Styling Note", icon: <Wind />, color: "text-teal-400", glow: "group-hover:shadow-teal-500/20" },
                { title: "MongoDB, MariaDB, Supabase, Firebase", sub: "Data Storage", icon: <Layers />, color: "text-purple-400", glow: "group-hover:shadow-purple-500/20" },
             ].map((skill, idx) => (
                <div key={idx} className={`group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${skill.glow}`}>
                   <div className={`mb-4 p-4 rounded-xl bg-white/5 w-fit ${skill.color}`}>
                      {skill.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-1">{skill.title}</h3>
                   <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">{skill.sub}</p>
                   
                   {/* Decorative Bar */}
                   <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
                      <div className={`h-full w-[85%] bg-current ${skill.color} shadow-[0_0_10px_currentColor]`}></div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Projects (Builds) */}
      <section id="projects" className="py-24 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
             <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-2">CUSTOM BUILDS</h2>
                <p className="text-teal-400 font-mono text-sm uppercase tracking-widest">High Performance Projects</p>
             </div>
             <Sparkles className="text-purple-500 hidden md:block" size={48} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SMARTQUEUE",
                tag: "Social",
                desc: "A queue management system that optimizes customer flow and reduces wait times using real-time updates and notifications.",
                tech: ["Flutter", "Supabase", "Kotlin"],
                gradient: "from-blue-600 to-purple-600"
              },
              {
                title: "LEAVE APPLICATION SYSTEM",
                tag: "Utility",
                desc: "An automated leave management system for organizations to streamline employee leave requests and approvals.",
                tech: ["PHP", "HTML/CSS/JS", "MARIADB"],
                gradient: "from-teal-600 to-emerald-600"
              },
              {
                title: "NSTP PORTAL",
                tag: "Educational",
                desc: "A comprehensive portal for NSTP students to manage schedules, resources, and communications.",
                tech: ["HTML/CSS", "JS", "PHP", "MySQL"],
                gradient: "from-purple-600 to-pink-600"
              }
            ].map((project, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 hover:border-white/30 transition-all">
                 {/* Image Area */}
                 <div className={`h-64 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-80 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <Search className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" size={48} />
                 </div>
                 
                 <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                       <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase text-gray-300">
                          {project.tag}
                       </span>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                       {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-mono text-teal-400 border border-teal-500/20 px-2 py-1 rounded bg-teal-500/5">
                             {t}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 relative bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
           
           <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <Mail className="text-white" size={32} />
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">MIX IT UP</span>
           </h2>
           
           <p className="text-xl text-gray-400 mb-12 font-light">
              Looking for a collaboration or just want to talk tech? My inbox is always open for new ideas.
           </p>

           <form className="space-y-4 text-left p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">Name</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">Email</label>
                    <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                 </div>
              </div>
              <div>
                 <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">Message</label>
                 <textarea rows="4" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                 Send Message
              </button>
           </form>

           <div className="mt-12 flex justify-center gap-8">
              <a href="https://github.com/luxellqt" className="text-gray-500 hover:text-purple-400 transition-colors"><Github size={24} /></a>
              <a href="https://www.facebook.com/luxellcrizaldo/" className="text-gray-500 hover:text-teal-400 transition-colors"><Facebook size={24} /></a>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-white/10 text-center relative z-10">
         <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
               © 2024 VaporDev. Crafted in the Clouds.
            </p>
         </div>
      </footer>

      {/* Global Styles for Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default App;