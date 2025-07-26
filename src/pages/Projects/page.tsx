import { useRef, useEffect } from "react";
import { useTheme } from "../../provider/page";
import { useLanguage } from "../../provider/page";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import project images
import luckaMedya from "../../assets/projects/1.png";
import kardelenKayhan from "../../assets/projects/2.png";
import dokuPsikoloji from "../../assets/projects/3.png";
import ozgeOgretmen from "../../assets/projects/4.png";
import denizBayramoglu from "../../assets/projects/Annotation 2025-03-20 155334.png";
import pelarsiBeauty from "../../assets/projects/codekori.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDarkMode = theme === "dark";
  const lang = language as 'tr' | 'en';

  const mainTitle = lang === 'tr' ? 'Son Projelerim' : 'My Latest Projects';

  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Lucka Medya",
      description:
        "Modern ve profesyonel bir medya ajansı web sitesi. Kurumsal kimlik, hizmetler ve portföy sunumu için tasarlanmış responsive web uygulaması.",
      tags: [".NET", "HTML", "Bootstrap", "C#"],
      links: {
        demo: "https://luckamedya.com/",
      },
      image: luckaMedya,
    },
    {
      title: "Kardelen Kayhan",
      description:
        "Kişisel portföy ve blog sitesi. Yaratıcı tasarım ve kullanıcı dostu arayüz ile profesyonel online varlık oluşturuldu.",
      tags: [".NET", "HTML", "Bootstrap", "C#"],
      links: {
        demo: "https://kardelenkayhan.com/",
      },
      image: kardelenKayhan,
    },
    {
      title: "Doku Psikoloji",
      description:
        "Psikoloji merkezi web sitesi. Profesyonel hizmetler, uzman kadro ve randevu sistemi ile mental sağlık odaklı platform.",
      tags: [".NET", "HTML", "Bootstrap", "C#"],
      links: {
        demo: "https://dokupsikoloji.com/",
      },
      image: dokuPsikoloji,
    },
    {
      title: "Özge Öğretmen Derste",
      description:
        "Eğitim platformu web sitesi. Online dersler, eğitim materyalleri ve öğrenci takip sistemi ile eğitim teknolojisi çözümü.",
      tags: [".NET", "HTML", "Bootstrap", "C#"],
      links: {
        demo: "https://ozgeogretmenderste.com/",
      },
      image: ozgeOgretmen,
    },
    {
      title: "Psikolog Deniz Bayramoğlu",
      description:
        "Kişisel psikolog web sitesi. Profesyonel kimlik, hizmetler ve randevu sistemi ile bireysel terapi odaklı platform.",
      tags: [".NET", "HTML", "Bootstrap", "C#"],
      links: {
        demo: "https://denizbayramoglu.com/",
      },
      image: denizBayramoglu,
    },
    {
      title: "Pelarsi Beauty",
      description:
        "Güzellik salonu web sitesi. Hizmetler, fiyatlar ve online randevu sistemi ile güzellik sektörü odaklı web platformu.",
      tags: [".NET", "HTML", "Bootstrap", "C#"],
      links: {
        demo: "https://pelarsibeauty.com/",
      },
      image: pelarsiBeauty,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current as HTMLElement, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card as HTMLElement, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="projects"
      className={`pt-20 md:pt-32 min-h-screen px-4 md:p-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        <div ref={titleRef} className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {mainTitle}
          </h2>
          <p className={`text-base md:text-lg text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            {lang === 'tr' ? 'Yenilikçi projeler ve çözümler' : 'Innovative projects and solutions'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 p-[2px]"
            >
              <Card
                className={`h-full rounded-xl overflow-hidden ${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-800 to-gray-900"
                    : "bg-gradient-to-br from-white to-gray-100"
                }`}
              >
                {/* Image Section - Top */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 md:top-4 right-2 md:right-4">
                    <a
                      href={project.links.demo}
                      className="bg-black/50 backdrop-blur-sm text-white p-1.5 md:p-2 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                    </a>
                  </div>
                </div>

                {/* Text Section - Bottom */}
                <CardContent className="p-4 md:p-6">
                  <CardTitle
                    className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${
                      isDarkMode ? "text-slate-100" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </CardTitle>
                  
                  <p
                    className={`mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3 ${
                      isDarkMode ? "text-slate-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
