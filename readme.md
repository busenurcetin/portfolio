# Kozmik Kaşif Portfolyosu

Bu proje, uzay temalı kişisel bir portfolyo websitesidir. Next.js, React ve Tailwind CSS kullanılarak geliştirilmiştir.

## Özellikler

- Uzay temalı responsive tasarım
- Ana sayfa, hakkında, blog ve iletişim sayfaları
- Animasyonlu yıldız arka planı
- Kişiselleştirilebilir içerik
- Blog yazıları için dinamik sayfalar
- SEO dostu yapı

## Teknolojiler

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ikonlar için)

## Başlangıç

Bu projeyi local ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Repoyu klonlayın:
   ```
   git clone https://github.com/your-username/cosmic-explorer-portfolio.git
   ```

2. Proje dizinine gidin:
   ```
   cd cosmic-explorer-portfolio
   ```

3. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```
   npm run dev
   ```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyin.

## Özelleştirme

- `app/page.tsx`: Ana sayfa içeriğini düzenleyin
- `app/about/page.tsx`: Hakkında sayfası içeriğini düzenleyin
- `app/contact/page.tsx`: İletişim sayfası içeriğini düzenleyin
- `app/blog/page.tsx` ve `app/blog/[slug]/page.tsx`: Blog sayfalarını düzenleyin
- `app/globals.css`: Genel stil ayarlarını ve renk şemasını düzenleyin
- `public/`: Kendi fotoğrafınızı ve diğer statik dosyaları ekleyin

## Dağıtım

Bu projeyi [Vercel](https://vercel.com/) üzerinde dağıtmanızı öneririz. Vercel, Next.js projeleri için optimize edilmiş bir platformdur ve kolay dağıtım sağlar.

1. [Vercel](https://vercel.com/)'de bir hesap oluşturun
2. Yeni bir proje oluşturun ve GitHub reponuzu bağlayın
3. Varsayılan ayarları kullanarak dağıtımı başlatın

## Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Lütfen bir pull request açın veya büyük değişiklikler için önce bir konu açarak tartışmaya başlayın.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.
