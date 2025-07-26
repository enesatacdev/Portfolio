const config = {
  information: {
    tr: {
      name: "İsmail Enes Ataç",
      helloText: "Merhaba",
      welcomeText: "✨ Portfolyoma Hoşgeldin",
      title: ".Net Developer | Çözüm Odaklı Yazılımcı",
      about: `Yazılım geliştirme ve web tasarım alanlarında kendimi sürekli geliştirmeyi hedefleyen, çözüm odaklı biriyim. MVC mimarisi, C#, Python gibi dillerle projeler üretirken aynı zamanda .NET Core, ASP.NET MVC ve MSSQL gibi teknolojilerle web tabanlı uygulamalar geliştirme konusunda deneyim kazandım.\nHTML5, CSS3, JavaScript, jQuery gibi ön yüz teknolojileriyle kullanıcı dostu arayüzler tasarlayabiliyor, XML ve JSON gibi veri yapılarıyla sistemler arası veri alışverişini yönetebiliyorum.\nGüncel teknolojileri takip ederek teknik bilgi ve yeteneklerimi artırmayı, hem bireysel hem de takım çalışmalarında etkin bir şekilde rol almayı önemsiyorum. Hedefim; kaliteli, ölçeklenebilir ve kullanıcı odaklı yazılımlar geliştirmek, bir ekipte aktif olarak yer almak ve sürekli öğrenmeye devam etmektir.`
    },
    en: {
      name: "İsmail Enes Ataç",
      helloText: "Hello",
      welcomeText: "✨ Welcome to my portfolio",
      title: ".Net Developer | Solution-Oriented Software Engineer",
      about: `I am a solution-oriented person who constantly aims to improve myself in software development and web design. While producing projects with MVC architecture, C#, Python, I also gained experience in developing web-based applications with technologies such as .NET Core, ASP.NET MVC, and MSSQL.\nI can design user-friendly interfaces with frontend technologies like HTML5, CSS3, JavaScript, jQuery, and manage data exchange between systems with data formats like XML and JSON.\nI care about keeping up with current technologies, increasing my technical knowledge and skills, and taking an active role in both individual and team projects. My goal is to develop high-quality, scalable, and user-oriented software, to be an active part of a team, and to continue learning constantly.`
    }
  },
  flipWords: {
    tr: [
      "C# ve .NET Core ile Web Geliştirme",
      "Çözüm Odaklı Yazılım",
      "Takım Çalışması ve İletişim",
      "Modern Web Teknolojileri"
    ],
    en: [
      "Web Development with C# and .NET Core",
      "Solution-Oriented Software",
      "Teamwork & Communication",
      "Modern Web Technologies"
    ]
  },
  codeContent: {
    tr: {
      code: `const profile = {
  name: 'İsmail Enes Ataç',
  title: '.Net Developer | Çözüm Odaklı Yazılımcı',
  skills: [
    'C#', 'Python', 'JavaScript', 'HTML5', 'CSS3',
    'ASP.NET MVC', '.NET Core', 'React', 'jQuery',
    'MSSQL', 'MongoDB', 'XML', 'JSON'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 6,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length > 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`
    },
    en: {
      code: `const profile = {
  name: 'İsmail Enes Ataç',
  title: '.Net Developer | Solution-Oriented Software Engineer',
  skills: [
    'C#', 'Python', 'JavaScript', 'HTML5', 'CSS3',
    'ASP.NET MVC', '.NET Core', 'React', 'jQuery',
    'MSSQL', 'MongoDB', 'XML', 'JSON'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 6,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length > 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`
    }
  },
  references: {
    tr: [
      { name: "Saim Üstündağ", company: "Çalık Holding", phone: "0533 296 46 98" },
      { name: "Caner Şahin", company: "Bella Yazılım", phone: "0532 860 82 36" },
      { name: "Ömer Faruk Özkan", company: "FTC Yazılım", phone: "0538 790 17 47" },
    ],
    en: [
      { name: "Saim Üstündağ", company: "Çalık Holding", phone: "+90 533 296 46 98" },
      { name: "Caner Şahin", company: "Bella Software", phone: "+90 532 860 82 36" },
      { name: "Ömer Faruk Özkan", company: "FTC Software", phone: "+90 538 790 17 47" },
    ]
  },
  certificates: {
    tr: [
      "HACKERRANK - SQL (İleri Seviye)",
      "HACKERRANK - SOFTWARE ENGINEER INTERN",
      "HACKERRANK - PYTHON (Temel)",
      "HACKERRANK - JAVASCRIPT (Orta)",
      "HACKERRANK - SQL (Temel)",
      "LOST & FOUND - UYGULAMALI PYTHON EĞİTİMİ",
      "ECODATION - VERİTABANI MODELLEME & SQL",
      "BUSEM - ENDÜSTRİ 4.0",
      "WISSEN AKADEMIE – YAPAY ZEKA"
    ],
    en: [
      "HACKERRANK - SQL (Advanced)",
      "HACKERRANK - SOFTWARE ENGINEER INTERN",
      "HACKERRANK - PYTHON (Basic)",
      "HACKERRANK - JAVASCRIPT (Intermediate)",
      "HACKERRANK - SQL (Basic)",
      "LOST & FOUND - APPLIED PYTHON TRAINING",
      "ECODATION - DATABASE MODELING & SQL",
      "BUSEM - INDUSTRY 4.0",
      "WISSEN AKADEMIE – ARTIFICIAL INTELLIGENCE"
    ]
  }
};

export default config;
