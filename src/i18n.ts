import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      biography: `Hi, I am a Data Scientist and Software Developer with interests in Machine Learning, Neural Networks, Graph Theory, and Probabilistic Models.
I currently work as a freelance developer and private tutor, with a focus on Calculus, Statistics, and Programming, among other areas.
I study and develop solutions that connect mathematics, technology, and business.`,
      download_cv: "Resume",
      copyright: "All rights reserved",
    },
  },
  pt: {
    translation: {
      biography: `Olá, sou Cientista de Dados e Desenvolvedor de Software, com interesse em Machine Learning, Redes Neurais, Teoria dos Grafos e Modelos Probabilísticos.
Atualmente atuo como desenvolvedor freelancer e professor particular, com foco em Cálculo, Estatística e Programação, dentre outras áreas.
Estudo e desenvolvo soluções que conectam matemática, tecnologia e negócios.`,
      download_cv: "Currículo",
      copyright: "Todos os direitos reservados",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
