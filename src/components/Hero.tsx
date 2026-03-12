import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imagem from "../assets/onedmilson.png";
import SocialLinks from "./SocialLinks.tsx";

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex flex-1 flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12 md:gap-20">
      {/* Image */}
      <motion.img
        src={imagem}
        alt="Edmilson Oliveira"
        className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-[#007ACC] dark:border-[#0E639C] shadow-lg object-cover"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Text + buttons */}
      <motion.div
        className="flex flex-col gap-4 md:max-w-xl text-justify"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          Edmilson Oliveira
        </h1>

        <p className="text-lg md:text-xl text-[#333333] dark:text-[#CCCCCC]">
          {t("biography")}
        </p>

        {/* Redes sociais */}
        <SocialLinks />

        {/* botão CV */}
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href={
              i18n.language === "en"
                ? "/curriculos/resume-onedmilson-en.pdf"
                : "/curriculos/curriculo-onedmilson-ptbr.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-md bg-[#007ACC] dark:bg-[#0E639C] text-white font-bold hover:bg-[#005A9E] dark:hover:bg-[#1177BB] transition-colors"
          >
            {t("download_cv")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}