import { useState, useRef, useEffect } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { useTheme } from "@/provider/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLanguage } from "@/provider/page";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { language } = useLanguage();
  const lang = language as 'tr' | 'en';

  const mainTitle = lang === 'tr' ? 'Eğitim Yolculuğu' : 'Educational Journey';
  const subtitle = lang === 'tr'
    ? 'Akademik başarılarım, yenilikçi düşünce ve profesyonel gelişimime yön verdi.'
    : 'My academic achievements have shaped my innovative thinking and professional growth.';

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
      });
      gsap.from(gridRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      degree: lang === 'tr' ? 'Bilgisayar Programcılığı' : 'Computer Programming',
      school: lang === 'tr' ? 'Beykent Üniversitesi' : 'Beykent University',
      mascot: '📘',
      year: '2020-2022',
      achievements: [
        lang === 'tr' ? 'Diploma Notu: 3.52 / 4.00' : 'GPA: 3.52 / 4.00',
      ],
      skills: [lang === 'tr' ? 'Yazılım Temelleri' : 'Software Fundamentals', lang === 'tr' ? 'Algoritmalar' : 'Algorithms', lang === 'tr' ? 'Veritabanı' : 'Database'],
      description: lang === 'tr'
        ? 'Yazılım geliştirme, algoritma ve veritabanı yönetimi konularında ileri düzeyde eğitim aldım. Proje tabanlı öğrenme ile gerçek dünya problemlerine yenilikçi çözümler ürettim.'
        : 'Received advanced education in software development, algorithms, and database management. Produced innovative solutions to real-world problems through project-based learning.'
    },
    {
      degree: lang === 'tr' ? 'Web Tasarım' : 'Web Design',
      school: lang === 'tr' ? 'Bayrampaşa Mesleki ve Teknik Anadolu Lisesi' : 'Bayrampaşa Vocational and Technical Anatolian High School',
      mascot: '📗',
      year: '2015-2019',
      achievements: [lang === 'tr' ? 'Okul Birinciliği' : 'Valedictorian'],
      skills: [lang === 'tr' ? 'Web Tasarımı' : 'Web Design', lang === 'tr' ? 'HTML/CSS' : 'HTML/CSS', lang === 'tr' ? 'Grafik Tasarım' : 'Graphic Design'],
      description: lang === 'tr'
        ? 'Web tasarımı, kullanıcı deneyimi ve temel programlama konularında kapsamlı eğitim aldım. Okul projelerinde liderlik ve takım çalışması becerilerimi geliştirdim.'
        : 'Received comprehensive education in web design, user experience, and basic programming. Improved leadership and teamwork skills through school projects.'
    },
  ];

  return (
    <section
      id="education"
      className={`min-h-screen relative overflow-hidden py-40 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1]"
      }`}
    >
      <BackgroundBeamsWithCollision>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div ref={titleRef}>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
              {mainTitle}
            </h2>
          </div>
          <div ref={subtitleRef}>
            <p
              className={`max-w-2xl mx-auto text-lg text-center mt-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {subtitle}
            </p>
          </div>
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative border-2 rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] ${
                  isDarkMode ? "bg-gray-900/70 border-blue-900/40" : "bg-white/80 border-blue-400/30"
                } backdrop-blur-xl`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl select-none">{edu.mascot}</span>
                      <h3
                        className={`text-2xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.degree}
                      </h3>
                    </div>
                    <p
                      className={`text-lg flex items-center gap-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {edu.school}
                    </p>
                    <p
                      className={`flex items-center gap-2 text-sm font-semibold ${
                        isDarkMode ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      <Calendar className="w-4 h-4" /> {edu.year}
                    </p>
                  </div>

                  <p
                    className={`text-base border-l-4 pl-4 italic border-teal-400 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {edu.description}
                  </p>

                  <div className="space-y-3">
                    <h4
                      className={`text-sm font-semibold flex items-center gap-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Trophy className="w-4 h-4 text-yellow-400" /> {lang === 'tr' ? 'Başarılar' : 'Achievements'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 flex items-center gap-2 text-sm font-medium border border-teal-400/30"
                        >
                          <Award className="w-4 h-4" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-700 font-semibold border border-blue-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default EducationSection;
