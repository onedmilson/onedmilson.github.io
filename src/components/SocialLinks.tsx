import { Github, Linkedin, Youtube } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex gap-6 mt-4 justify-center md:justify-start ${className}`}>
      <a href="https://github.com/onedmilson" 
      className="hover:opacity-80 transition-opacity text-[#000000] dark:text-[#D4D4D4]"
      target="_blank"
      >
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/onedmilson/" 
      className="hover:opacity-80 transition-opacity text-[#000000] dark:text-[#D4D4D4]"
      target="_blank"
      >
        <Linkedin size={24} />
      </a>
      <a href="https://www.youtube.com/@dadosonedmilson" 
      className="hover:opacity-80 transition-opacity text-[#000000] dark:text-[#D4D4D4]"
      target="_blank"
      >
        <Youtube size={24} />
      </a>
    </div>
  );
}
