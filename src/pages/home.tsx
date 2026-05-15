import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, LineChart, Target, Zap, LayoutTemplate } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            className="flex-1 space-y-6 md:space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Exploring the edge of automation
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Building <span className="italic text-primary">systems</span> that scale and <span className="italic text-primary">agents</span> that act.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm Daud — a builder, trader, and AI agent strategist. I live at the intersection of crypto, automation, and digital innovation, turning complex ideas into winning products.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#work" className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-all border border-border">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full max-w-md md:max-w-none relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl md:rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/daud-avatar.png" 
              alt="Daud" 
              className="w-full aspect-square md:aspect-[4/5] object-cover rounded-2xl md:rounded-[2.5rem] shadow-xl border border-border/50"
            />
          </motion.div>
        </section>

        {/* About / Philosophy Section */}
        <section id="about" className="py-20 md:py-32 bg-muted border-y border-border">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                The Workshop Mindset
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I approach technology not as magic, but as raw material. Whether it's designing an AI agent to automate workflows, writing smart contracts for DeFi, or hunting bounties across ecosystems — I believe in shipping fast, thinking in robust systems, and moving decisively.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                This isn't a traditional developer's space. It's a builder's showcase.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section id="focus" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <motion.div variants={fadeUp} className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Core Focus</h2>
                <p className="text-lg text-muted-foreground">Where I spend my time, energy, and computational resources.</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Cpu className="text-primary" size={32} />,
                  title: "AI Agents & Automation",
                  desc: "Designing intelligent pipelines that act on data, execute trades, and manage workflows without human bottleneck."
                },
                {
                  icon: <Code className="text-primary" size={32} />,
                  title: "Crypto & DeFi",
                  desc: "Navigating protocols, understanding smart contracts, and building tooling for decentralized finance."
                },
                {
                  icon: <LineChart className="text-primary" size={32} />,
                  title: "Trading Systems",
                  desc: "Developing data-driven approaches to markets, focusing on execution speed and systematic risk management."
                },
                {
                  icon: <Target className="text-primary" size={32} />,
                  title: "Bounty Hunting",
                  desc: "Aggressively pursuing complex technical challenges across ecosystems to build reputation and revenue."
                },
                {
                  icon: <LayoutTemplate className="text-primary" size={32} />,
                  title: "Scalable Architecture",
                  desc: "Designing systems that don't just work today, but are built to handle tomorrow's complexity."
                },
                {
                  icon: <Zap className="text-primary" size={32} />,
                  title: "Rapid Prototyping",
                  desc: "Turning abstract ideas into tangible, interactive products in days, not months."
                }
              ].map((area, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Selected Work / Bounties */}
        <section id="work" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Recent Ops</h2>
              <p className="text-lg text-muted-foreground">Select projects, winning bounties, and active systems.</p>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
              {[
                {
                  title: "Automated DeFi Yield Agent",
                  category: "AI & DeFi",
                  desc: "An autonomous agent that monitors yield across EVM chains and rebalances portfolios using optimal routing paths.",
                  metrics: ["Python", "Ethers.js", "LangChain"],
                  link: "#"
                },
                {
                  title: "Solana MEV Arbitrage Bot",
                  category: "Trading System",
                  desc: "High-frequency Rust-based trading client optimized for sub-millisecond execution on decentralized exchanges.",
                  metrics: ["Rust", "Solana Web3", "Jito"],
                  link: "#"
                },
                {
                  title: "Protocol Integration Bounty — 1st Place",
                  category: "Bounty Win",
                  desc: "Developed a secure cross-chain messaging implementation bridging Cosmos and Ethereum for a major infrastructure provider.",
                  metrics: ["Solidity", "Go", "CosmWasm"],
                  link: "#"
                }
              ].map((work, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-secondary border border-border group"
                >
                  <div className="flex-1 space-y-4">
                    <div className="text-sm font-medium text-primary tracking-wide uppercase">{work.category}</div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{work.title}</h3>
                    <p className="text-muted-foreground text-lg">{work.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {work.metrics.map((m, j) => (
                        <span key={j} className="px-3 py-1 bg-background rounded-md text-xs font-medium text-foreground border border-border">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-auto flex items-center md:items-end justify-start md:justify-end">
                    <a href={work.link} className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors">
                      View details <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 md:py-40 bg-foreground text-background text-center px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-bold">
              Ready to build?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-background/70 max-w-xl mx-auto">
              Whether you need an agent designed, a system scaled, or a technical partner for your next venture, I'm open for collaboration.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-8">
              <a href="mailto:hello@example.com" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all text-lg shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Drop me a line
                <Zap size={20} />
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
