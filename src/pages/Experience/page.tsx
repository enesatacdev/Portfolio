import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Code } from "lucide-react";
import { ReactNode, useRef, useEffect } from "react";
import { useTheme } from "../../provider/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../provider/page";
gsap.registerPlugin(ScrollTrigger);

export default function ProfessionalJourney() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { language } = useLanguage();
  const lang = language as 'tr' | 'en';

  const mainTitle = lang === 'tr' ? 'Kariyer Yolculuğu' : 'Professional Journey';
  const subtitle = lang === 'tr'
    ? 'Fikirleri dijital gerçekliğe dönüştürüyorum, her projede bir adım daha ileri.'
    : 'Transforming ideas into digital reality, one project at a time';

  // Daha profesyonel açıklamalar
  const experiences = [
    {
      title: lang === 'tr' ? 'Stajyer Web Geliştirici' : 'Intern Web Developer',
      company: 'FTC Yazılım',
      period: '2017 - 2018',
      description: lang === 'tr'
        ? 'Web geliştirme süreçlerinde temel yazılım prensiplerini ve ekip içi iş birliğini deneyimledim. Modern teknolojilerle ilk projelerimi hayata geçirdim.'
        : 'Gained hands-on experience in web development processes, focusing on core software principles and team collaboration. Delivered my first projects using modern technologies.'
    },
    {
      title: lang === 'tr' ? 'Web Geliştirici' : 'Web Developer',
      company: 'FTC Yazılım',
      period: '2018 - 2022',
      description: lang === 'tr'
        ? 'Çeşitli web projelerinde aktif rol alarak, kullanıcı odaklı ve ölçeklenebilir uygulamalar geliştirdim. Takım çalışmasında liderlik ve sorumluluk üstlendim.'
        : 'Actively contributed to various web projects, developing user-centric and scalable applications. Took on leadership and responsibility within the team.'
    },
    {
      title: lang === 'tr' ? 'Web Geliştirici' : 'Web Developer',
      company: 'Bella Yazılım',
      period: '2023 - 2024',
      description: lang === 'tr'
        ? 'Kurumsal müşterilere yönelik yenilikçi web uygulamaları tasarladım ve geliştirdim. Proje yönetimi ve müşteri iletişiminde etkin rol aldım.'
        : 'Designed and developed innovative web applications for corporate clients. Played an active role in project management and client communication.'
    },
    {
      title: lang === 'tr' ? 'Kurucu & .Net Developer' : 'Founder & .Net Developer',
      company: 'Develoya Digital Solutions',
      period: '2023 - 2025',
      description: lang === 'tr'
        ? 'Kendi girişimimde modern .Net teknolojileriyle ölçeklenebilir ve yüksek performanslı projeler geliştirdim. İş geliştirme ve strateji süreçlerinde liderlik yaptım.'
        : 'Developed scalable and high-performance projects with modern .Net technologies in my own startup. Led business development and strategic planning processes.'
    },
  ];

  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
      gsap.from(subtitleRef.current as HTMLElement, {
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
      gsap.from(gridRef.current as HTMLElement, {
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

  return (
    <section
      id="experience"
      className={`${
        isDark ? "bg-[#090F1C]" : "bg-zinc-50"}
      } py-16 md:py-32 min-h-screen relative overflow-hidden`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
          } bg-[size:4rem_4rem]`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-r from-[#090F1C] via-transparent to-[#090F1C]"
              : "bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50"
          }`}
        />
      </div>

      <div className="@container mx-auto max-w-5xl px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {mainTitle}
          </h2>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {subtitle}
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-8 gap-6 md:mt-16"
          ref={gridRef}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              icon={<Briefcase />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: ReactNode;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon,
}: ExperienceCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="h-full"
    >
      <Card
        className={`group h-full ${
          isDark
            ? "bg-[#090F1C]/80 border-gray-700 hover:shadow-blue-500/20"
            : "bg-white/90 border-gray-200 hover:shadow-blue-500/10"
        } shadow-zinc-950/5 transition-all duration-300 hover:-translate-y-1`}
      >
        <div className="flex flex-col p-6 gap-4">
          <CardDecorator>
            <div
              className={`size-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              {icon}
            </div>
          </CardDecorator>

          <div className="flex-1">
            <h3
              className={`text-xl font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h3>
            <div className="flex flex-col gap-2 mt-1">
              <p
                className={`font-medium ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {company}
              </p>
              <div
                className={`flex items-center gap-1 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <Calendar className="size-4" />
                <span className="text-sm">{period}</span>
              </div>
            </div>
            <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const CardDecorator = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative mx-auto size-24 duration-200 ${
        isDark
          ? "[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] group-hover:bg-white/5 group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
          : "[--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--tw-gradient-to)_75%)] animate-pulse-slow opacity-80"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[conic-gradient(from_45deg_at_center,transparent,var(--tw-gradient-to),transparent)] animate-spin-slow opacity-40"
      />
      <div
        className={`absolute inset-0 m-auto flex size-10 items-center justify-center  bg-transparent `}
      >
        {children}
      </div>
    </div>
  );
};
