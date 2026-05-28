const phone = "381631673885";

const benefits = [
  "Yıllara göre artmayan ve uygun fiyatlı ücretler",
  "Bologna süreci onaylanmış mavi diploma",
  "Uluslararası geçerlilik",
  "YÖK denkliği",
  "Oturum ve çalışma izinleri",
  "Schengen ülkelerine kolaylıkla gidiş imkanı",
  "Eğitim süresince tam destek",
];

const universities = [
  "University of Belgrade",
  "Medika College",
  "Faculty of Business Economics and Entrepreneurship",
  "MSS Modern Business School",
];

const programs = [
  "Lisans Programları",
  "Yüksek Lisans Programları",
  "Doktora Programları",
  "Yaz Okulu",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#071b45]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black tracking-tight text-blue-800">
              İSTASYON
            </div>
            <div className="text-xs tracking-[6px] text-sky-500 font-bold">
              AKADEMİ
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold">
            <a href="#">Anasayfa</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#programlar">Lisans Programları</a>
            <a href="#programlar">Yüksek Lisans Programları</a>
            <a href="#programlar">Doktora Programları</a>
            <a href="#programlar">Yaz Okulu</a>
            <a href="#universiteler">Üniversiteler</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-black shadow-lg hover:bg-blue-700 transition"
          >
            Başvuru Yap
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-blue-100" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-200/40 rounded-bl-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-2xl italic text-sky-500 mb-5">
              Hayallerine İstasyon Belgrad!
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              GELECEĞİN İÇİN
              <span className="block text-blue-700">BELGRAD’DA</span>
              YENİ BİR BAŞLANGIÇ!
            </h1>

            <p className="mt-7 text-lg text-slate-600 max-w-xl leading-relaxed">
              Sırbistan Belgrad’da Avrupa standartlarında eğitim, mavi diploma,
              YÖK denkliği, oturum süreçleri ve eğitim boyunca profesyonel
              destek.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${phone}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition"
              >
                Ücretsiz Danışmanlık
              </a>
              <a
                href="#programlar"
                className="bg-white border border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition"
              >
                Programları İncele
              </a>
            </div>
          </div>

          <div className="bg-white/75 backdrop-blur-2xl border border-white rounded-[40px] p-7 shadow-2xl">
            <div className="h-80 rounded-[32px] bg-gradient-to-br from-blue-600 to-sky-300 flex items-center justify-center text-white text-6xl font-black">
              BELGRAD
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <SmallCard title="Güvenli" />
              <SmallCard title="Uygun Maliyetli" />
              <SmallCard title="Uluslararası" />
              <SmallCard title="Eğitim Dostu" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[36px] shadow-2xl border border-blue-100 p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-5">
            {benefits.map((item) => (
              <div key={item} className="text-center border-r last:border-r-0 border-blue-100 px-3">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-sky-100 text-blue-700 flex items-center justify-center font-black text-xl">
                  ✓
                </div>
                <p className="font-black text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-600 mt-8 font-semibold">
            * Eğitim süreçleri boyunca Sırbistan’da uluslararası ve Sırbistan Ticaret ve Eğitim Bakanlığı garantörlüğünde ofisimiz bulunduğundan tam destek verilecektir.
          </p>
        </div>
      </section>

      <section id="universiteler" className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-blue-600 font-black tracking-[4px] text-sm">
          GÜÇLÜ ÜNİVERSİTELER
        </p>
        <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-10">
          Partner Üniversitelerimiz
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {universities.map((u) => (
            <Card key={u} title={u} text="Belgrad’da Avrupa standartlarında güçlü akademik eğitim imkanı." />
          ))}
        </div>
      </section>

      <section id="programlar" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 font-black tracking-[4px] text-sm">
            GELECEĞİNE YATIRIM YAP
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-10">
            Programlarımız
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {programs.map((p) => (
              <Card key={p} title={p} text="Akademik hedeflerinize uygun program seçeneklerini birlikte planlayalım." />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-sky-500 p-10 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <p className="text-2xl italic text-sky-100">Hayalini erteleme</p>
            <h2 className="text-5xl font-black mt-3">DÜNYAYA AÇIL!</h2>
            <p className="mt-4 text-blue-50">
              Belgrad’da eğitim yolculuğunu bugün birlikte başlatalım.
            </p>
          </div>
          <a
            href={`https://wa.me/${phone}`}
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black shadow-xl"
          >
            WhatsApp ile Başvur
          </a>
        </div>
      </section>

      <footer id="iletisim" className="bg-[#031a4a] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-black">İSTASYON AKADEMİ</h3>
            <p className="mt-4 text-blue-100">
              Avrupa standartlarında eğitim fırsatları ve profesyonel danışmanlık hizmeti.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-4">Hızlı Linkler</h4>
            <p>Anasayfa</p>
            <p>Hakkımızda</p>
            <p>Lisans Programları</p>
            <p>Yüksek Lisans Programları</p>
            <p>Doktora Programları</p>
          </div>

          <div>
            <h4 className="font-black mb-4">Yasal</h4>
            <p>KVKK Aydınlatma Metni</p>
            <p>Gizlilik Politikası</p>
            <p>Çerez Politikası</p>
            <p>Kullanım Koşulları</p>
          </div>

          <div>
            <h4 className="font-black mb-4">İletişim</h4>
            <p className="text-xl font-black">+381 63 1673885</p>
            <a
              href={`https://wa.me/${phone}`}
              className="inline-block mt-5 bg-green-500 px-7 py-4 rounded-2xl font-black"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-blue-100 text-sm">
          © 2026 İstasyon Akademi. Tüm hakları saklıdır.
        </div>
      </footer>
    </main>
  );
}

function SmallCard({ title }: { title: string }) {
  return (
    <div className="bg-sky-50 rounded-2xl p-4 text-center font-black text-blue-800">
      {title}
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-[30px] p-7 border border-blue-100 shadow-xl hover:-translate-y-2 transition">
      <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-black mb-6">
        ✦
      </div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
      <button className="mt-6 text-blue-700 font-black">
        Detaylı İncele →
      </button>
    </div>
  );
}
