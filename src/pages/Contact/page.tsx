import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../provider/page";
import { useLanguage } from "../../provider/page";
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { sendMail } from "../../lib/mail";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDarkMode = theme === "dark";
  const lang = language as 'tr' | 'en';

  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);

  const mainTitle = lang === 'tr' ? 'İletişim' : 'Contact';
  const desc = lang === 'tr' 
    ? 'Benimle iletişime geçin, projeleriniz için birlikte çalışalım.' 
    : 'Get in touch with me, let\'s work together on your projects.';

  const placeholders = {
    name: lang === 'tr' ? 'Adınız' : 'Your Name',
    email: lang === 'tr' ? 'E-posta Adresiniz' : 'Your Email Address',
    subject: lang === 'tr' ? 'Konu' : 'Subject',
    message: lang === 'tr' ? 'Mesajınız' : 'Your Message',
  };

  const sendBtn = lang === 'tr' ? 'Gönder' : 'Send';

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
    });
    return () => ctx.revert();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = lang === 'tr' ? 'Ad alanı zorunludur' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = lang === 'tr' ? 'Email alanı zorunludur' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = lang === 'tr' ? 'Geçerli bir email adresi girin' : 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = lang === 'tr' ? 'Konu alanı zorunludur' : 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === 'tr' ? 'Mesaj alanı zorunludur' : 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const result = await sendMail({
        name: `${formData.name} ${formData.surname}`,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main
      id="contact"
      className={`pt-20 md:pt-32 min-h-screen px-4 md:p-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white"
          : "bg-gradient-to-r from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
      }`}
    >
      <BackgroundBeamsWithCollision>
        <div className="max-w-7xl mx-auto">
          <div ref={titleRef} className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {mainTitle}
            </h2>
            <p className={`text-base md:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-4 p-3 md:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 p-2 md:p-3 rounded-lg">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Email</h3>
                  <a
                    href="mailto:enesatc331@gmail.com"
                    className={`break-all text-sm md:text-base ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition-colors`}
                    style={{ textDecoration: 'none' }}
                  >
                    enesatc331@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 md:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500/30 to-blue-500/30 p-2 md:p-3 rounded-lg">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Phone</h3>
                  <a
                    href="tel:+905374463094"
                    className={`text-sm md:text-base ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition-colors`}
                    style={{ textDecoration: 'none' }}
                  >
                    0537 446 30 94
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 md:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-2 md:p-3 rounded-lg">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/ienesatac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm md:text-base ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition-colors`}
                    style={{ textDecoration: 'none' }}
                  >
                    linkedin.com/in/ienesatac
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 md:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-500/30 to-black/30 p-2 md:p-3 rounded-lg">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">GitHub</h3>
                  <a
                    href="https://github.com/enesatacdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm md:text-base ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition-colors`}
                    style={{ textDecoration: 'none' }}
                  >
                    github.com/enesatacdev
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="h-fit">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Benimle İletişime Geç
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder={placeholders.name}
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-300 ${
                          isDarkMode
                            ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                            : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="surname"
                        placeholder={lang === 'tr' ? 'Soyadınız' : 'Your Surname'}
                        value={formData.surname}
                        onChange={handleInputChange}
                        className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-300 ${
                          isDarkMode
                            ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                            : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={lang === 'tr' ? 'Telefon Numaranız' : 'Your Phone Number'}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder={placeholders.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder={placeholders.subject}
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder={placeholders.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border transition-all duration-300 resize-none ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm md:text-base">
                    {lang === 'tr' ? 'Mesajınız başarıyla gönderildi!' : 'Your message has been sent successfully!'}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 md:p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm md:text-base">
                    {lang === 'tr' ? 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred while sending the message. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  <span>{isSubmitting ? (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...') : sendBtn}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
