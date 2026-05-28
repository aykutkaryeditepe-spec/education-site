const phone = "381631673885";

const whatsappMessage =
  "Merhaba, Belgrad'da eğitim hakkında bilgi almak istiyorum.";

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
  {
    title: "University of Belgrade",
    desc: "Sırbistan’ın en köklü ve prestijli üniversitelerinden biri.",
  },
  {
    title: "Medika College",
    desc: "Sağlık bilimleri alanında modern Avrupa standartlarında eğitim.",
  },
  {
    title: "FBE Entrepreneurship",
    desc: "İşletme, ekonomi ve girişimcilik odaklı akademik yapı.",
  },
  {
    title: "MSS Modern Business School",
    desc: "Modern iş dünyasına yönelik çağdaş programlar.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f5fbff] text-[#061b49] overflow-hidden">

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-black text-blue-700">
              İSTASYON
            </h1>
            <p className="text-xs tracking-[6px] text-sky-500 font-bold">
              AKADEMİ
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 font-bold text-sm">
            <a href="#">Anasayfa</a>
            <a href="#universiteler">Üniversiteler</a>
            <a href="#programlar">Programlar</a>
            <a href="#sss">SSS</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-4 rounded-2xl font-black shadow-2xl"
          >
            Başvuru Yap
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-sky-100 via-white to-blue-100">

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-2xl italic text-sky-500 mb-6">
              Hayallerine İstasyon Belgrad!
            </p>

            <h2 className="text-6xl lg:text-7xl leading-tight font-black">
              GELECEĞİN İÇİN
              <span className="block text-blue-700">
                BELGRAD’DA
              </span>
              YENİ BİR BAŞLANGIÇ!
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
              Avrupa standartlarında eğitim, YÖK denkliği,
              oturum avantajları ve profesyonel danışmanlık.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-9 py-5 rounded-2xl font-black shadow-2xl"
              >
                WhatsApp ile Danış
              </a>

              <a
                href="#universiteler"
                className="bg-white border border-blue-200 hover:border-blue-400 transition text-blue-700 px-9 py-5 rounded-2xl font-black shadow-xl"
              >
                Üniversiteleri İncele
              </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[40px] p-8 shadow-2xl">

            <div className="h-[420px] rounded-[32px] bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white text-7xl font-black shadow-inner">
              BELGRAD
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <Mini title="YÖK Denkliği" />
              <Mini title="Mavi Diploma" />
              <Mini title="Oturum İzni" />
              <Mini title="Avrupa Eğitimi" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl border border-blue-100 p-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-5">

            {benefits.map((item) => (
              <div
                key={item}
                className="text-center border-r border-blue-100 last:border-r-0 px-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 mx-auto mb-5 flex items-center justify-center text-2xl font-black">
                  ✓
                </div>

                <p className="font-black text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600 mt-10 leading-relaxed">
            * Eğitim süreçleri boyunca Sırbistan’da uluslararası ve
            Sırbistan Ticaret ve Eğitim Bakanlığı garantörlüğünde
            ofisimiz bulunduğundan tam destek verilecektir.
          </p>
        </div>
      </section>

      <section
        id="universiteler"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <p className="text-blue-600 font-black tracking-[5px] text-sm">
          PARTNER ÜNİVERSİTELER
        </p>

        <h3 className="text-5xl font-black mt-4 mb-12">
          Güçlü Akademik Partnerler
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {universities.map((u) => (
            <div
              key={u.title}
              className="bg-white rounded-[32px] p-8 shadow-2xl border border-blue-100 hover:-translate-y-3 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 mb-6"></div>

              <h4 className="text-2xl font-black leading-tight">
                {u.title}
              </h4>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {u.desc}
              </p>

              <button className="mt-7 text-blue-700 font-black">
                Detaylı İncele →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        id="programlar"
        className="bg-white py-28"
      >
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-blue-600 font-black tracking-[5px] text-sm">
            PROGRAMLAR
          </p>

          <h3 className="text-5xl font-black mt-4 mb-12">
            Eğitim Programlarımız
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Program title="Lisans Programları" />
            <Program title="Yüksek Lisans Programları" />
            <Program title="Doktora Programları" />
            <Program title="Yaz Okulu" />
          </div>
        </div>
      </section>

      <section
        id="sss"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        <p className="text-center text-blue-600 font-black tracking-[5px] text-sm">
          SIKÇA SORULAN SORULAR
        </p>

        <h3 className="text-center text-5xl font-black mt-4 mb-12">
          Merak Edilenler
        </h3>

        {[
          "YÖK denkliği mevcut mu?",
          "Oturum izni alınabiliyor mu?",
          "Başvuru için hangi belgeler gerekli?",
          "Ücretler yıllık artıyor mu?",
          "Eğitim dili nedir?",
        ].map((item) => (
          <details
            key={item}
            className="bg-white rounded-3xl p-6 mb-5 shadow-xl border border-blue-100"
          >
            <summary className="cursor-pointer font-black text-lg">
              {item}
            </summary>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Öğrencinin tercih ettiği üniversite ve programa göre
              süreç değişiklik gösterebilir. Detaylı bilgi için
              danışmanlık ekibimizle iletişime geçebilirsiniz.
            </p>
          </details>
        ))}
      </section>

      <footer
        id="iletisim"
        className="bg-[#031744] text-white pt-20 pb-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-3xl font-black">
              İSTASYON AKADEMİ
            </h3>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Belgrad’da Avrupa standartlarında eğitim danışmanlığı.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-5">
              Programlar
            </h4>

            <div className="space-y-3 text-blue-100">
              <p>Lisans</p>
              <p>Yüksek Lisans</p>
              <p>Doktora</p>
              <p>Yaz Okulu</p>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-5">
              Yasal
            </h4>

            <div className="space-y-3 text-blue-100">
              <p>KVKK</p>
              <p>Gizlilik Politikası</p>
              <p>Çerez Politikası</p>
              <p>Kullanım Koşulları</p>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-5">
              İletişim
            </h4>

            <p className="text-2xl font-black">
              +381 63 1673885
            </p>

            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-black"
            >
              WhatsApp Yaz
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 mt-12 pt-8 text-blue-100 text-sm">
          © 2026 İstasyon Akademi. Tüm hakları saklıdır.
        </div>
      </footer>

      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition text-white px-6 py-4 rounded-full shadow-2xl font-black"
      >
        WhatsApp
      </a>
    </main>
  );
}

function Mini({ title }: { title: string }) {
  return (
    <div className="bg-sky-50 rounded-2xl p-5 text-center font-black text-blue-800">
      {title}
    </div>
  );
}

function Program({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-sky-400 text-white rounded-[32px] p-8 shadow-2xl hover:-translate-y-3 transition">
      <div className="w-16 h-16 rounded-2xl bg-white/20 mb-6"></div>

      <h4 className="text-3xl font-black leading-tight">
        {title}
      </h4>

      <p className="mt-5 text-white/90 leading-relaxed">
        Avrupa standartlarında eğitim programları ve profesyonel süreç yönetimi.
      </p>
    </div>
  );
}
