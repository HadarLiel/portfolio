"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Code2, ExternalLink } from "lucide-react";

// אייקונים חלופיים
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const projects = [
    {
      title: "JSEED Platform",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API"],
      desc: "A full-stack web platform mapping global initiatives. Engineered end-to-end as the Lead Developer, featuring complex database architecture, dynamic routing, and AI integration for data processing.",
      image: "/images/jseed.jpeg",
      link: "https://jseed.vercel.app/"
    },
    {
      title: "Art & DIY E-Commerce",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      desc: "A custom full-stack e-commerce and portfolio platform built to showcase and sell personal artwork and DIY projects. Features dynamic database integration for seamless product and inventory management.",
      image: "/images/art.jpeg",
      link: "https://hadar-shop.vercel.app/"
    },
    {
      title: "Juni Mobile App",
      tech: ["Flutter", "Dart", "Android SDK"],
      desc: "A cross-platform mobile application successfully released on the Google Play Store. Designed and developed entirely from scratch with a focus on a smooth, intuitive user experience.",
      image: "/images/juni.jpeg",
      link: "https://play.google.com/store/apps/details?id=com.hadar.juni"
    },
    {
      title: "Beauty Business Template",
      tech: ["Next.js", "Tailwind CSS", "Cloudflare Pages"],
      desc: "A high-performance, dynamic landing page template tailored for beauty professionals. Features responsive service galleries and an integrated WhatsApp booking system.",
      image: "/images/beauty.jpeg",
      link: "https://galit-nails.pages.dev/"
    },
    {
      title: "Video Concept CMS",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
      desc: "A custom content management web application built for creators. Designed to efficiently manage, store, and track video ideas and production workflows from concept to publishing.",
      image: "/images/video-app.jpeg",
    },
    {
      title: "Automation Bot",
      tech: ["Python", "uiautomator", "ADB"],
      desc: "A custom automated scripting tool built to process and manage user lists, handling repetitive digital tasks and data manipulation with high accuracy and speed.",
      image: "/images/bot.jpeg"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-semibold mb-8 shadow-sm">
            <Code2 size={16} /> Software Engineer & Lead Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Hadar.</span>
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            <p>
              I am a Lead Full-Stack Developer with a B.Sc. in Computer Science. Currently, I serve as the Founding Engineer at JSEED and as a developer in an IDF Reserve Engineering Unit.
            </p>
            <p>
              I specialize in <strong className="text-white">Next.js, Python, and Flutter</strong>. My passion lies in building end-to-end systems—from designing complex database architectures to crafting pixel-perfect, responsive UIs. 
            </p>
            <p>
              Whether it's deploying a cross-platform mobile app to the Play Store, building an AI-integrated web platform, or writing automation scripts, I love turning complex logic into robust digital products.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="https://wa.me/972542599569" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-900/50 hover:shadow-indigo-600/40 hover:-translate-y-1">
              <MessageCircle size={20} /> Let's Chat
            </a>
            <a href="tel:+972542599569" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1">
              <Phone size={20} /> Call Me
            </a>
            <div className="flex gap-3 ml-2 items-center">
              <a href="https://github.com/HadarLiel" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:-translate-y-1">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hadar-liel-harush-19ab202a7" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:-translate-y-1">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-white flex items-center gap-6"
          >
            Featured Work
            <div className="h-px bg-slate-800 flex-1"></div>
          </motion.h2>

          <div className="space-y-24"> {/* הגדלתי מרווחים בין פרויקטים בגלל הגובה של התמונות */}
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Image Side - מותאם לתמונות ארוכות */}
                <div className="w-full md:w-5/12 lg:w-1/3 relative rounded-[2rem] overflow-hidden bg-slate-900/50 border border-slate-800 group shadow-2xl p-2">
                  <div className="relative aspect-[9/19] rounded-[1.5rem] overflow-hidden bg-black">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium z-0">Loading...</div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                    />
                    {/* אפקט זכוכית עדין על התמונה */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 rounded-full text-sm font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                    {project.desc}
                  </p>
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-all w-fit group text-lg"
                    >
                      <span className="border-b-2 border-transparent group-hover:border-indigo-400 pb-1 transition-all">Explore Project</span>
                      <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </main>
  );
}