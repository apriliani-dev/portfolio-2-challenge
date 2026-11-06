"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
        <div className="text-xl font-bold">Apriliani</div>
        <ul className="hidden md:flex gap-6">
          {["Home", "About", "Skill", "Projects", "FAQ", "Contact"].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium transition">
          Hire Me
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0a0a0f] to-[#0a0a0f]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-purple-200">Frontend Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              APRILIANI
            </h1>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js.
            </p>
            <div className="flex gap-3">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition">
                Download CV
              </button>
              <a href="#contact" className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition inline-block">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 bg-gradient-to-br from-purple-700 to-teal-700 flex items-center justify-center">
                <span className="text-8xl">👩‍💻</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-10 -left-4 bg-[#1a1a2e] border border-white/10 rounded-xl p-3 shadow-xl"
              >
                <div className="text-2xl font-bold text-white">5.0</div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <div className="text-xs text-gray-400">Many clients trust me</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 -right-4 bg-[#1a1a2e] border border-white/10 rounded-xl p-3 shadow-xl"
              >
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Satisfied Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-purple-900/20 border-y border-purple-500/20 py-4 overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {["Frontend Developer", "Expert React", "Programmers", "Mobile Developer", "UI/UX Designer"].map((item, i) => (
            <span key={i} className="mx-8 text-xl md:text-2xl font-semibold text-white flex items-center gap-4">
              {item} <span className="text-orange-400">✦</span>
            </span>
          ))}
          {["Frontend Developer", "Expert React", "Programmers", "Mobile Developer", "UI/UX Designer"].map((item, i) => (
            <span key={`dup-${i}`} className="mx-8 text-xl md:text-2xl font-semibold text-white flex items-center gap-4">
              {item} <span className="text-orange-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal-400 mb-2">Hi, I am Apriliani 👋</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js.
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Seorang web developer yang sedang mendalami Next.js, React, dan Tailwind CSS melalui berbagai project nyata di WPH. Fokus pada pengembangan aplikasi web yang responsif, bersih, dan berpusat pada pengguna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="skill" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          {[
            { title: "Why Choose Me", color: "from-orange-500 to-orange-700", tags: ["UI/UX", "Website Developer", "Responsive Design", "React Expert", "5 Years Experience", "Node", "Clean Code", "Performance Optimization"], desc: "Delivering excellence with innovative solutions and clean code." },
            { title: "Expert Skill", color: "from-purple-600 to-purple-900", icons: ["⚛️", "📘", "🎨", "⚡", "🔧", "📱"], desc: "Leveraging modern technologies to deliver impactful and efficient web solutions." },
            { title: "5+ Years Experience", color: "from-teal-600 to-teal-900", desc: "Proven track record of delivering high-quality projects for diverse clients." },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white`}
            >
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-white/80 text-sm mb-4">{card.desc}</p>
              {card.tags && (
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, j) => (
                    <span key={j} className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {card.icons && (
                <div className="flex gap-3 text-2xl">
                  {card.icons.map((icon, j) => (
                    <span key={j}>{icon}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS WPH */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12"
          >
            My <span className="text-teal-400">WPH Projects</span> →
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Social Media Login Page", category: "WPH Assignment - Auth System", color: "from-blue-600 to-blue-900" },
              { title: "User Timeline and Feed", category: "WPH Assignment - React State", color: "from-purple-600 to-purple-900" },
              { title: "User Profile Management", category: "WPH Assignment - CRUD Operations", color: "from-teal-600 to-teal-900" },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 h-64 flex flex-col justify-between hover:scale-105 transition cursor-pointer`}
              >
                <div>
                  <span className="text-white/70 text-sm">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                </div>
                <a href="https://github.com/apriliani/week-11-social-media-apriliani" target="_blank" rel="noopener noreferrer" className="self-start bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm text-white transition inline-block">
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="py-20 px-6 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-gray-400 mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {["Adobe", "Elastic", "ActiveCampaign", "Evernote", "Afterpay", "Figma", "Airbnb", "Fivetrn", "Framer", "Asana", "Atlassian", "Basecamp"].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-white text-xl font-bold opacity-60 hover:opacity-100 transition"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Reviews from <span className="text-teal-400">Clients</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Julia Rodriguez", role: "CEO, TechStart", text: "Thanks to their expertise, our website is now faster, more responsive, and visually stunning.", rating: 5 },
              { name: "Mark Thompson", role: "Product Manager", text: "Exceptional work! The attention to detail and clean code made our collaboration seamless.", rating: 5 },
              { name: "Sarah Chen", role: "Founder, DesignLab", text: "Delivered beyond our expectations. The UI is beautiful and the performance is top-notch.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-6"
              >
                <div className="text-yellow-400 mb-3">{"★".repeat(review.rating)}</div>
                <p className="text-gray-300 mb-4 italic">&quot;{review.text}&quot;</p>
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Frequently Asked <span className="text-teal-400">Questions</span>
          </motion.h2>
          <div className="space-y-4">
            {[
              { q: "What technologies do you work with?", a: "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs." },
              { q: "What is your approach to front-end development?", a: "I focus on writing clean, maintainable code and prioritize user experience. I follow best practices and stay updated with the latest industry trends." },
              { q: "How do you handle project deadlines?", a: "I use agile methodologies and maintain clear communication with clients to ensure timely delivery without compromising quality." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-br from-purple-900/40 to-teal-900/40 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let us Work Together</h2>
            <p className="text-gray-300 mb-8">Have a project in mind? Let us create something amazing.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:aprilianioke@gmail.com" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition inline-block">
                aprilianioke@gmail.com
              </a>
              <a href="https://wa.me/6281805791980" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition inline-block">
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-bold">Apriliani</div>
          <div className="text-gray-400 text-sm">© 2025 Apriliani. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}