import { useState } from "react";
import { useTheme } from "../../provider/page";
import { useLanguage } from "../../provider/page";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      icon: () => <span>🏠</span>,
      text: language === "tr" ? "Ana Sayfa" : "Home",
      href: "#hero",
    },
    {
      id: 2,
      icon: () => <span>👤</span>,
      text: language === "tr" ? "Hakkımda" : "About",
      href: "#about",
    },
    {
      id: 3,
      icon: () => <span>💼</span>,
      text: language === "tr" ? "Kariyer" : "Career",
      href: "#experience",
    },
    {
      id: 4,
      icon: () => <span>🎓</span>,
      text: language === "tr" ? "Eğitim" : "Education",
      href: "#education",
    },
    {
      id: 5,
      icon: () => <span>🛠️</span>,
      text: language === "tr" ? "Yetenekler" : "Skills",
      href: "#skills",
    },
    {
      id: 6,
      icon: () => <span>📁</span>,
      text: language === "tr" ? "Projeler" : "Projects",
      href: "#projects",
    },
    {
      id: 7,
      icon: () => <span>📧</span>,
      text: language === "tr" ? "İletişim" : "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === "dark"
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
          }`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === "tr"
              ? "bg-blue-500 text-white"
              : theme === "dark"
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
          }`}
          onClick={() => setLanguage("tr")}
        >
          TR
        </button>
        <button
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === "en"
              ? "bg-blue-500 text-white"
              : theme === "dark"
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-full md:hidden transition-all duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          backgroundColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          color: theme === "dark" ? "white" : "black"
        }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <header className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav
            className={`${
              theme === "dark" ? "bg-[#090F1C]/90" : "bg-white/90"
            } backdrop-blur-md rounded-full px-6 py-2.5`}
          >
            <div className="flex items-center gap-1 lg:gap-2">
              {navLinks.map(({ id, icon: Icon, text, href }) => (
                <a
                  key={id}
                  href={href}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(href.replace('#', ''));
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-300 flex items-center gap-2
                    hover:bg-${theme === "dark" ? "white" : "gray-900"}/10
                    ${theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"}
                  `}
                >
                  <span className="hover:scale-110 transition-transform">{Icon()}</span>
                  <span className="inline">{text}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-4 right-4 z-50 md:hidden">
          <div className={`${
            theme === "dark" ? "bg-[#090F1C]/95" : "bg-white/95"
          } backdrop-blur-md rounded-xl border ${
            theme === "dark" ? "border-white/10" : "border-gray-200"
          } shadow-xl`}>
            <nav className="p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map(({ id, icon: Icon, text, href }) => (
                  <a
                    key={id}
                    href={href}
                    onClick={e => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const el = document.getElementById(href.replace('#', ''));
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium
                      transition-all duration-300 flex items-center gap-3
                      hover:bg-${theme === "dark" ? "white" : "gray-900"}/10
                      ${theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"}
                    `}
                  >
                    <span className="text-lg">{Icon()}</span>
                    <span>{text}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
