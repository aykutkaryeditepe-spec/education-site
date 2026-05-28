const phone = "381631673885";
const message = "Merhaba, Belgrad’da eğitim hakkında bilgi almak istiyorum.";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const benefits = [
  "YÖK Denkliği",
  "Mavi Diploma",
  "Bologna Süreci",
  "Sabit Eğitim Ücretleri",
  "Taksitli Ödeme",
  "Oturum İzni",
  "Schengen Avantajı",
  "Eğitim Süresince Destek",
];

const programs = [
  "Tıp",
  "Diş Hekimliği",
  "Yazılım Mühendisliği",
  "Psikoloji",
  "İşletme",
  "Mimarlık",
  "Türkoloji",
  "MBA",
  "Yüksek Lisans",
  "Doktora",
];

const universities = [
  "University of Belgrade",
  "Medika College",
  "Faculty of Business Economics and Entrepreneurship",
  "MSS Modern Business School",
];

const faqs = [
  ["Sırbistan’da alınan diplomalar Türkiye’de geçerli mi?", "Üniversite ve programa bağlı olarak YÖK kriterlerine uygun denklik süreçleri bulunmaktadır. Öğrenciler başvuru öncesinde detaylı şekilde bilgilendirilmektedir."],
  ["Türkçe programlar mevcut mu?", "Evet. Türkoloji bölümü tamamen Türkçe eğitim vermektedir. Programın lisans, yüksek lisans ve doktora seçenekleri bulunmaktadır."],
  ["Eğitim ücretleri her yıl değişiyor mu?", "Birçok programda öğrenciler için yıllık ücretler sabitlenmektedir. Böylece uzun vadeli eğitim planlaması daha güvenli yapılabilmektedir."],
  ["Taksitli ödeme imkanı var mı?", "Evet. Üniversite ve programa göre dönemlik veya taksitli ödeme seçenekleri sunulabilmektedir."],
  ["Schengen ülkelerine seyahat avantajı var mı?", "Evet. Sırbistan’da yasal öğrenci statüsünde bulunan öğrenciler birçok durumda yalnızca öğrenci belgesi ile başvuru yapabilmektedir. Başvurular ortalama 7 gün içerisinde sonuçlanabilmekte ve danışmanlık hizmetimiz kapsamında ücretsiz takip edilmektedir."],
  ["Türkiye’de askerlik erteleme işlemleri yapılabiliyor mu?", "Öğrencilik statüsünün aktif olması durumunda askerlik erteleme süreçleri değerlendirilebilmektedir. Danışmanlık hizmetimiz kapsamında süreç ücretsiz şekilde takip edilmektedir."],
  ["Firmanız Sırbistan Hükümeti tarafından tanınıyor mu?", "Gerçekleştirdiğimiz resmi iş birlikleri kapsamında Sırbistan Ticaret ve Eğitim Bakanlığı ile ortak çalışmalar yürütülmektedir. Ayrıca Belgrad’da aktif ofisimiz bulunmaktadır."],
];

export default function Home() {
  return (
    <main className="bg-[#eef7ff] text-[#061946] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="leading-none">
            <h1 className="text-3xl font-black text-blue-700">İSTASYON</h1>
            <p className="text-xs tracking-[6px] text-sky-500 font-bold">AKADEMİ</p>
          </a>

          <nav className="hidden lg:flex gap-8 text-sm font-bold">
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#programlar">Programlar</a>
            <a href="#universiteler">Üniversiteler</a>
            <a href="#surec">Süreç</a>
            <a href="#sss">SSS</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a href={whatsapp} className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-black shadow-xl hover:bg-blue-700 transition">
            Başvuru Yap
          </a>
        </div>
      </header>

      <section className="relative pt-40 pb-24 bg-gradient-to-br from-sky-100 via-white to-blue-100">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-24 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-2xl italic text-sky-500 mb-6">Üniversite için tek yol yalnızca YKS değil.</p>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight">
              Belgrad’da <span className="text-blue-700">Geleceğini</span> İnşa Et
            </h2>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
              Avrupa standartlarında eğitim, YÖK denkliği, mavi diploma, Schengen avantajları ve eğitim süresince profesyonel danışmanlık desteği.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsapp} className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black shadow-2xl hover:scale-105 transition">
                WhatsApp ile Danış
              </a>
              <a href="#programlar" className="bg-white text-blue-700 px-8 py-5 rounded-2xl font-black shadow-xl border border-blue-200 hover:scale-105 transition">
                Programları İncele
              </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[44px] p-8 shadow-2xl">
            <div className="h-[420px] rounded-[36px] bg-gradient-to-br from-blue-800 to-sky-400 flex items-center justify-center text-white text-6xl font-black">
              BELGRAD
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {["YÖK Denkliği", "Mavi Diploma", "Oturum Desteği", "Schengen Avantajı"].map((x) => (
                <div key={x} className="bg-sky-50 p-5 rounded-2xl text-center font-black text-blue-800">{x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-blue-100 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b} className="p-6 rounded-3xl bg-[#f6fbff] border border-blue-100 hover:-translate-y-1 transition">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-black mb-4">✓</div>
              <h3 className="font-black text-lg">{b}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="hakkimizda" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 tracking-[5px] font-black text-sm">HAKKIMIZDA</p>
            <h2 className="text-5xl font-black mt-4">İstanbul ve Belgrad’da Yanınızdayız</h2>
          </div>
          <div className="text-lg text-slate-600 leading-relaxed space-y-5">
            <p>İstasyon Akademi, öğrencilerin Avrupa standartlarında eğitim fırsatlarına güvenli ve şeffaf şekilde ulaşabilmesi için kurulmuş uluslararası eğitim danışmanlığı markasıdır.</p>
            <p>İstanbul’da bulunan ana merkezimiz ve Belgrad’daki ofisimiz ile öğrencilerimize başvuru, kabul, kayıt, oturum, konaklama, Schengen vize yönlendirmeleri ve eğitim süreci boyunca destek sağlanmaktadır.</p>
            <p>Sırbistan Ticaret ve Eğitim Bakanlığı ile yürütülen ortak çalışmalar ve kurumsal iş birlikleri sayesinde öğrencilerimize yerinde, sürdürülebilir ve profesyonel süreç yönetimi sunulmaktadır.</p>
          </div>
        </div>
      </section>

      <section id="programlar" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 tracking-[5px] font-black text-sm">PROGRAMLAR</p>
          <h2 className="text-5xl font-black mt-4 mb-12">Bölüm ve Program Seçenekleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs.map((p) => (
              <div key={p} className="bg-gradient-to-br from-blue-700 to-sky-400 text-white rounded-[32px] p-7 shadow-2xl hover:-translate-y-2 transition">
                <div className="w-14 h-14 rounded-2xl bg-white/20 mb-6" />
                <h3 className="text-2xl font-black">{p}</h3>
                <p className="mt-4 text-white/90 leading-relaxed text-sm">
                  YÖK denkliği, Bologna süreci, mavi diploma ve uluslararası eğitim avantajları.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="universiteler" className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-blue-600 tracking-[5px] font-black text-sm">ÜNİVERSİTELER</p>
        <h2 className="text-5xl font-black mt-4 mb-12">Partner Üniversitelerimiz</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universities.map((u) => (
            <div key={u} className="bg-white rounded-[36px] p-8 shadow-xl border border-blue-100 hover:-translate-y-2 transition">
              <div className="h-40 rounded-3xl bg-gradient-to-br from-blue-700 to-sky-400 mb-7 flex items-center justify-center text-white font-black text-2xl text-center px-4">Campus</div>
              <h3 className="text-2xl font-black">{u}</h3>
              <p className="mt-5 text-slate-600 leading-relaxed">Belgrad’da Avrupa standartlarında akademik eğitim fırsatı.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="surec" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 tracking-[5px] font-black text-sm">TÜRKİYE’DEN BELGRAD’A</p>
          <h2 className="text-5xl font-black mt-4 mb-12">Başvuru Süreci</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4">
            {["Ön Görüşme", "Bölüm Seçimi", "Başvuru", "Kabul", "Vize/Oturum", "Yerleşim", "Kayıt"].map((s, i) => (
              <div key={s} className="bg-[#f6fbff] border border-blue-100 rounded-3xl p-5 shadow">
                <div className="text-blue-700 font-black text-3xl mb-3">{i + 1}</div>
                <p className="font-black">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sss" className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-blue-600 tracking-[5px] font-black text-sm">SIKÇA SORULAN SORULAR</p>
          <h2 className="text-center text-5xl font-black mt-4 mb-12">Merak Edilenler</h2>
          {faqs.map(([q, a]) => (
            <details key={q} className="bg-white rounded-3xl p-6 mb-5 shadow border border-blue-100">
              <summary className="cursor-pointer font-black text-xl">{q}</summary>
              <p className="mt-5 text-slate-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[44px] bg-gradient-to-r from-blue-800 to-sky-500 p-12 lg:p-20 text-white text-center shadow-2xl">
          <h2 className="text-5xl font-black">Geleceğini Bugün Planla</h2>
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
            Belgrad’da üniversite eğitimi, oturum süreci ve başvuru danışmanlığı için hemen bizimle iletişime geç.
          </p>
          <a href={whatsapp} className="inline-block mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl font-black shadow-xl">
            WhatsApp Üzerinden Başvur
          </a>
        </div>
      </section>

      <footer id="iletisim" className="bg-[#021440] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-4xl font-black">İSTASYON AKADEMİ</h3>
            <p className="mt-6 text-white/70">Belgrad’da Avrupa standartlarında eğitim danışmanlığı.</p>
          </div>
          <div>
            <h4 className="font-black mb-5">Programlar</h4>
            <p>Lisans</p><p>Yüksek Lisans</p><p>Doktora</p><p>Yaz Okulu</p>
          </div>
          <div>
            <h4 className="font-black mb-5">Yasal</h4>
            <a className="block" href="/kvkk">KVKK</a>
            <a className="block" href="/gizlilik-politikasi">Gizlilik Politikası</a>
            <a className="block" href="/cerez-politikasi">Çerez Politikası</a>
            <a className="block" href="/kullanim-kosullari">Kullanım Koşulları</a>
          </div>
          <div>
            <h4 className="font-black mb-5">İletişim</h4>
            <p className="text-2xl font-black whitespace-nowrap">+381 63 1673885</p>
            <a href={whatsapp} className="inline-block mt-6 bg-green-500 px-8 py-4 rounded-2xl font-black">WhatsApp Yaz</a>
          </div>
        </div>
      </footer>

      <a href={whatsapp} className="fixed bottom-7 right-7 bg-green-500 text-white px-7 py-4 rounded-full font-black shadow-2xl z-50">
        WhatsApp
      </a>
    </main>
  );
}
