import HeroImg from "../../assets/hero.png";
import { useTheme } from "../../provider/page";
import OlovaLogo from "../../assets/olova.png";
import config from "@/config/config";
import { useLanguage } from "../../provider/page";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { BorderBeam } from "../../components/magicui/border-beam";

export default function About() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const lang = language as 'tr' | 'en';
  const info = config.information[lang];

  return (
    <>
      <section
        id="about"
        className={`pt-20 md:pt-32 min-h-screen ${
          theme === "dark"
            ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white"
            : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
        }`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-r from-transparent via-transparent to-transparent">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-8 md:space-y-12 px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center space-y-4 md:space-y-6">
            <Badge 
              variant="secondary" 
              className={`text-sm font-medium px-3 md:px-4 py-1 md:py-2 ${
                theme === "dark" 
                  ? "bg-white/10 text-white border-white/20" 
                  : "bg-gray-100 text-gray-700 border-gray-200"
              }`}
            >
              {language === "tr" ? "Hakkımda" : "About Me"}
            </Badge>
            
            <h2 className="relative z-10 text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-4">
              {language === "tr"
                ? "Geliştirici, Tasarımcı, Yaratıcı, Yenilikçi"
                : "Developer, Designer, Creator, Innovator"}
            </h2>
            
            <p className={`max-w-2xl mx-auto text-base md:text-lg lg:text-xl px-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              {language === "tr" 
                ? "Modern teknolojilerle geleceği şekillendiren yazılım geliştirici"
                : "Software developer shaping the future with modern technologies"
              }
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1 px-4 md:px-0">
              <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                theme === "dark" 
                  ? "bg-gray-900/50 border-gray-800 shadow-2xl shadow-black/20" 
                  : "bg-white/80 border-gray-200 backdrop-blur-sm shadow-2xl shadow-gray-200/50"
              }`}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={HeroImg}
                      className="w-full h-auto rounded-2xl object-cover"
                      alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Photo"}
                      width={600}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                <Badge className="bg-green-500 text-white px-2 md:px-3 py-1 text-xs font-medium animate-pulse">
                  {language === "tr" ? "Aktif" : "Active"}
                </Badge>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4">
                <Badge className={`${
                  theme === "dark" 
                    ? "bg-blue-500/20 text-blue-300 border-blue-500/30" 
                    : "bg-blue-100 text-blue-700 border-blue-200"
                } px-2 md:px-3 py-1 text-xs font-medium`}>
                  {language === "tr" ? "6+ Yıl Deneyim" : "6+ Years Experience"}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8 px-4 md:px-0">
              <div className="space-y-4 md:space-y-6">
                <h3 className={`text-2xl md:text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {language === "tr" ? "Merhaba! Ben Enes" : "Hello! I'm Enes"}
                </h3>
                
                <div className={`space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                  {config.information[lang].about.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Skills Preview */}
              <div className="space-y-3 md:space-y-4">
                <h4 className={`text-lg md:text-xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {language === "tr" ? "Temel Yetenekler" : "Core Skills"}
                </h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['C#', '.NET', 'React', 'JavaScript', 'SQL', 'Azure'].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`${
                        theme === "dark"
                          ? "bg-gray-800/50 text-gray-200 border-gray-600"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      } text-xs md:text-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 md:pt-6">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {language === "tr" ? "İletişime Geç" : "Get In Touch"}
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
