import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/provider/page";
import { Marquee } from "@/components/magicui/marquee";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Sparkles,
  Layers,
  GitBranch,
  Server,
  Globe,
  FileCode,
  Figma,
  Github,
  CloudCog,
} from "lucide-react";

import { FaDocker, FaLinux } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLanguage } from "@/provider/page";
import { FaPython, FaReact, FaGitAlt, FaGitlab, FaBootstrap, FaMicrosoft, FaNodeJs } from "react-icons/fa";
import { SiSharp, SiJavascript, SiHtml5, SiCss3, SiDotnet, SiJquery, SiMongodb, SiMysql, SiJson, SiXml, SiTailwindcss, SiVite, SiNextdotjs, SiElasticsearch, SiJet, SiRabbitmq, SiRedis, SiAdobephotoshop, SiSqlite } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
}

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
  color: string;
  isDark: boolean;
}

const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
  isDark,
}: SkillCardProps) => (
  <Card
    className={`group relative overflow-hidden ${
      isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/90 border-gray-200"
    } hover:scale-[1.02] transition-all duration-300 hover:shadow-xl ${
      isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
    }`}
  >
    <div className="absolute pt-10 inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl ${
            isDark ? "bg-gray-800/50" : "bg-gray-100"
          } ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3
          className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r pt-10 ${
            isDark ? "from-white to-gray-400" : "from-gray-900 to-gray-600"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`group/badge relative ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
            } flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
            }`}
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { language } = useLanguage();
  const lang = language as 'tr' | 'en';

  // Başlıklar iki dilli
  const mainTitle = lang === 'tr' ? 'Yeteneklerim & Teknolojiler' : 'My Skills & Technologies';
  const subtitle = lang === 'tr' ? 'Kullandığım Teknolojiler' : 'Technologies I Use';

  // Kategoriler ve içerikleri
  const skillCategories = [
    {
      icon: SiSharp,
      title: lang === 'tr' ? 'Diller & Teknolojiler' : 'Languages & Technologies',
      color: "text-blue-400",
      skills: [
        { name: "C#", icon: <SiSharp className="w-4 h-4 text-[#178600]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Layout,
      title: lang === 'tr' ? 'Frontend' : 'Frontend',
      color: "text-purple-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "jQuery", icon: <SiJquery className="w-4 h-4 text-[#0769AD]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-black" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Server,
      title: lang === 'tr' ? 'Backend' : 'Backend',
      color: "text-orange-400",
      skills: [
        { name: "ASP.NET MVC", icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" /> },
        { name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" /> },
        { name: "MVC", icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
      ],
    },
    {
      icon: BsDatabase,
      title: lang === 'tr' ? 'Veritabanı' : 'Databases',
      color: "text-green-400",
      skills: [
        { name: "MSSQL", icon: <FaMicrosoft className="w-4 h-4 text-[#0078D4]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "SQLite", icon: <SiSqlite className="w-4 h-4 text-[#003B57]" /> },
        { name: "Elasticsearch", icon: <SiElasticsearch className="w-4 h-4 text-[#005571]" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "RabbitMQ", icon: <SiRabbitmq className="w-4 h-4 text-[#FF6600]" /> },
      ],
    },
    {
      icon: CloudCog,
      title: lang === 'tr' ? 'DevOps & Cloud' : 'DevOps & Cloud',
      color: "text-pink-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitLab", icon: <FaGitlab className="w-4 h-4 text-[#FC6D26]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Azure", icon: <FaMicrosoft className="w-4 h-4 text-[#0078D4]" /> },
        { name: "JWT", icon: <SiJet className="w-4 h-4 text-[#000000]" /> },
      ],
    },
    {
      icon: SiJson,
      title: lang === 'tr' ? 'Veri Formatları' : 'Data Formats',
      color: "text-yellow-400",
      skills: [
        { name: "XML", icon: <SiXml className="w-4 h-4 text-[#0060AC]" /> },
        { name: "JSON", icon: <SiJson className="w-4 h-4 text-[#EAD41C]" /> },
      ],
    },
  ];

  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
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
      gsap.from(marqueeRef.current as HTMLElement, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 80%",
        },
      });
      gsap.from(gridRef.current as HTMLElement, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        delay: 0.3,
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
      id="skills"
      className={`pt-32 lg:pt-40 flex flex-col items-center justify-center ${
        isDark ? "bg-[#090F1C] text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen flex items-center justify-center`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {mainTitle}
        </h2>
        <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      </div>

      <section className="relative w-full overflow-hidden py-8" ref={marqueeRef}>
        <div
          className={`w-full ${
            isDark ? "bg-white/5" : "bg-black/5"
          } backdrop-blur-lg border-y ${
            isDark ? "border-white/10" : "border-black/10"
          } shadow-lg`}
        >
          <div className="relative">
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  : "bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
              } opacity-50 animate-pulse`}
            ></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-background opacity-20"></div>
            <Marquee
              pauseOnHover
              className="[--duration:25s] py-6 hover:opacity-80 transition-opacity"
              repeat={3}
            >
              <div className="flex items-center gap-8 px-4">
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <FileCode className="w-8 h-8 text-[#61DAFB]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <RiNextjsLine className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiTypescript className="w-8 h-8 text-[#3178C6]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiTailwindcss className="w-8 h-8 text-[#38B2AC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <Server className="w-8 h-8 text-[#339933]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiPostgresql className="w-8 h-8 text-[#336791]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiMongodb className="w-8 h-8 text-[#47A248]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiGraphql className="w-8 h-8 text-[#E10098]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <Figma className="w-8 h-8 text-[#F24E1E]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <Layout className="w-8 h-8 text-[#38B2AC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <CloudCog className="w-8 h-8 text-[#FF9900]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <FaDocker className="w-8 h-8 text-[#2496ED]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <TbBrandVscode className="w-8 h-8 text-[#007ACC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiRedux className="w-8 h-8 text-[#764ABC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiFirebase className="w-8 h-8 text-[#FFCA28]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiVite className="w-8 h-8 text-[#646CFF]" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 ${
            isDark
              ? "bg-gradient-to-r from-[#090F1C] via-[#090F1C]/90 to-transparent"
              : "bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent"
          } z-10`}
        ></div>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/3 ${
            isDark
              ? "bg-gradient-to-l from-[#090F1C] via-[#090F1C]/90 to-transparent"
              : "bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent"
          } z-10`}
        ></div>
      </section>
      <section className="container mx-auto px-4 py-11" ref={gridRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              isDark={isDark}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default SkillsSection;
