import { SiGithub, SiX } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16 border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Daud.</h3>
          <p className="text-muted-foreground text-sm">Builder, Trader & AI Agent Strategist.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-background rounded-full shadow-sm hover:shadow-md" aria-label="Twitter">
            <SiX size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-background rounded-full shadow-sm hover:shadow-md" aria-label="GitHub">
            <SiGithub size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-background rounded-full shadow-sm hover:shadow-md" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-border/50 text-center md:text-left text-sm text-muted-foreground flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} Daud. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with intention.</p>
      </div>
    </footer>
  );
}
