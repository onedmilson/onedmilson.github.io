import { Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#CCCCCC] dark:border-[#555555] w-full mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-2 items-center">
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <span className="flex items-center gap-2 cursor-pointer">
            <Phone size={16} /> +55 19 99734-3912
          </span>
          <span className="flex items-center gap-2 cursor-pointer">
            <Mail size={16} /> onedmilson@outlook.com
          </span>
        </div>
        <span className="text-sm text-[#666666] dark:text-[#AAAAAA] mt-2">
          &copy; {t("copyright")} {currentYear}
        </span>
      </div>
    </footer>
  );
}
