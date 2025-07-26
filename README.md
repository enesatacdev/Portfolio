# 🚀 Enes Atac Portfolio

Modern ve responsive portfolio web sitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## ✨ Özellikler

- 🌙 **Dark/Light Mode** - Otomatik tema değişimi
- 🌍 **Çok Dilli** - Türkçe/İngilizce desteği
- 📱 **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı Performans** - Vite ile optimize edilmiş
- 📧 **İletişim Formu** - EmailJS SMTP ile mail gönderimi
- 🎨 **Modern UI** - Gradient ve animasyonlar

## 🛠️ Teknolojiler

### Frontend

- **React 18** - Modern React hooks ve functional components
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Hızlı build tool
- **GSAP** - Animasyonlar
- **Framer Motion** - UI animasyonları
- **Lucide React** - İkonlar

### Mail Sistemi

- **EmailJS** - Frontend'den SMTP mail gönderimi
- **SMTP** - Profesyonel mail sunucusu (webmail.ihs.com.tr)

## 🚀 Kurulum

### Gereksinimler

- Node.js >= 18.0.0
- npm >= 8.0.0

### Adımlar

1. **Repository'yi klonlayın**

```bash
git clone https://github.com/enesatacdev/portfolio.git
cd portfolio
```

2. **Dependencies'leri yükleyin**

```bash
npm install
```

3. **EmailJS kurulumu**

```bash
# EmailJS hesabı oluşturun ve SMTP servisi ekleyin
# Detaylar için aşağıdaki "Mail Sistemi Kurulumu" bölümüne bakın
```

4. **Environment variables'ları ayarlayın**

```bash
# .env dosyası oluşturun
VITE_EMAILJS_USER_ID=your_emailjs_user_id
VITE_EMAILJS_SERVICE_ID=enesatac_smtp
VITE_EMAILJS_TEMPLATE_ID=contact_form
```

5. **Development server'ı başlatın**

```bash
npm run dev
```

6. **Production build**

```bash
npm run build
```

## 📧 Mail Sistemi Kurulumu

### EmailJS SMTP Kurulumu

1. **EmailJS hesabı oluşturun**

   - [EmailJS](https://www.emailjs.com/) sitesine gidin
   - Ücretsiz hesabı oluşturun

2. **SMTP servisi ekleyin**

   - Dashboard → Email Services → Add New Service
   - SMTP seçin
   - Bilgileri girin:
     ```
     Host: webmail.ihs.com.tr
     Port: 587
     User: info@enesatac.com
     Password: Enes_Atac01
     ```
   - Service ID: `enesatac_smtp`

3. **Email template oluşturun**

   - Dashboard → Email Templates → Create New Template
   - Template ID: `contact_form`
   - Template içeriği:
     ```html
     <h2>Portfolio İletişim Formu</h2>
     <p><strong>Ad Soyad:</strong> {{from_name}}</p>
     <p><strong>Email:</strong> {{from_email}}</p>
     <p><strong>Konu:</strong> {{subject}}</p>
     <p><strong>Mesaj:</strong> {{message}}</p>
     ```

4. **User ID'yi alın**

   - Dashboard → Account → API Keys
   - Public Key'i kopyalayın

5. **Environment variables'ları güncelleyin**

```env
VITE_EMAILJS_USER_ID=your_public_key
VITE_EMAILJS_SERVICE_ID=enesatac_smtp
VITE_EMAILJS_TEMPLATE_ID=contact_form
```

6. **Mail sistemini test edin**
   - İletişim formunu doldurun
   - Mail'in info@enesatac.com'a geldiğini kontrol edin

## 🌐 Deployment

### Vercel (Önerilen)

1. **Vercel CLI kurulumu**

```bash
npm i -g vercel
```

2. **Deploy**

```bash
vercel --prod
```

3. **Environment variables'ları ayarlayın**

   - Vercel Dashboard → Settings → Environment Variables
   - EmailJS bilgilerini ekleyin

4. **Custom domain ayarları**
   - Vercel Dashboard → Settings → Domains
   - `enesatac.com` ekleyin

### Netlify

1. **Build dosyalarını yükleyin**

```bash
npm run build
# dist/ klasörünü Netlify'a yükleyin
```

2. **Environment variables'ları ayarlayın**
   - Netlify Dashboard → Site Settings → Environment Variables

## 📁 Proje Yapısı

```
src/
├── components/          # UI bileşenleri
│   ├── ui/             # Temel UI bileşenleri
│   └── magicui/        # Özel animasyon bileşenleri
├── pages/              # Sayfa bileşenleri
│   ├── About/          # Hakkımda
│   ├── Contact/        # İletişim
│   ├── Education/      # Eğitim
│   ├── Experience/     # Deneyim
│   ├── Header/         # Navigasyon
│   ├── Hero/           # Ana sayfa
│   ├── Projects/       # Projeler
│   └── Skills/         # Yetenekler
├── provider/           # Context providers
├── lib/                # Utility fonksiyonları
├── assets/             # Resimler ve statik dosyalar
└── types/              # TypeScript tip tanımları
```

## 🎨 Özelleştirme

### Renkler

`tailwind.config.js` dosyasında renk paletini değiştirebilirsiniz.

### İçerik

`src/config/config.ts` dosyasında tüm içerikleri güncelleyebilirsiniz.

### Animasyonlar

GSAP animasyonları `src/pages/` klasöründeki bileşenlerde bulunur.

### Mail Ayarları

`src/lib/mail.ts` dosyasında EmailJS ayarlarını değiştirebilirsiniz.

## 📞 İletişim

- **Email:** info@enesatac.com
- **LinkedIn:** [linkedin.com/in/ienesatac](https://linkedin.com/in/ienesatac)
- **GitHub:** [github.com/enesatacdev](https://github.com/enesatacdev)

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

**Not:** Bu proje production'a hazırdır. EmailJS SMTP kurulumunu tamamlayıp deploy edebilirsiniz! 🚀
