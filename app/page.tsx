export default function HomePage() {
  const universities = [
    {
      name: "University of Belgrade",
      desc: "Sırbistan’ın en köklü ve prestijli devlet üniversitelerinden biri.",
    },
    {
      name: "Medika College",
      desc: "Sağlık bilimleri ve uygulamalı eğitim alanında modern yaklaşım.",
    },
    {
      name: "FBE",
      desc: "İşletme, ekonomi ve girişimcilik alanlarında güçlü akademik yapı.",
    },
    {
      name: "MSS Modern Business School",
      desc: "Modern iş dünyasına yönelik uygulamalı eğitim programları.",
    },
  ];

  const features = [
    "Yıllara göre artmayan ve uygun fiyatlı ücretler",
    "Bologna süreci onaylanmış mavi diploma",
    "Uluslararası geçerlilik",
    "YÖK denkliği",
    "Oturum ve çalışma izinleri",
    "Schengen ülkelerine kolaylıkla gidiş imkanı",
    "Eğitim süresinde tam destek",
  ];

  const programs = [
    "Lisans Programları",
    "Yüksek Lisans Programları",
    "Doktora Programları",
    "Yaz Okulu",
  ];

  const faqs = [
    {
      q: "Ücretler yıllık artıyor mu?",
      a: "Program ücretleri yıllık olarak sabitlenmekte olup öğrencilere süreç başında detaylı bilgilendirme yapılmaktadır.",
    },
    {
      q: "Eğitim dili nedir?",
      a: "Programlara göre İngilizce ve Sırpça seçenekleri bulunmaktadır.",
    },
    {
      q: "YÖK denkliği mevcut mu?",
      a: "Belirli üniversite ve programlarda YÖK kriterlerine uygun denklik süreçleri bulunmaktadır.",
    },
    {
      q: "Konaklama desteği sağlanıyor mu?",
      a: "Belgrad’da konaklama, oturum ve öğrenci yaşamı konusunda danışmanlık sağlanmaktadır.",
    },
  ];

  return (
    <main className="bg-[#eef5fc] text-[#06154a] overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-blue-700">
              İSTASYON
            </h1>
            <p className="text-sm tracking-[6px] text-sky-500 font-semibold">
              AKADEMİ
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-10 font-semibold">
            <a href="#">Anasayfa</a>
            <a href="#">Hakkımızda</a>
            <a href="#">Üniversiteler</a>
            <a href="#">Programlar</a>
            <a href="#">SSS</a>
            <a href="#">İletişim</a>
          </nav>

          <a
            href="https://wa.me/381631673885"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-3xl font-bold shadow-xl"
          >
            Başvuru Yap
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-44 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sky-500 italic text-4xl mb-8">
              Hayallerine İstasyon Belgrad!
            </p>

            <h2 className="text-[78px] leading-[0.95] font-black tracking-tight">
              GELECEĞİN
              <br />
              İÇİN
              <br />
              <span className="text-blue-600">BELGRAD’DA</span>
              <br />
              YENİ BİR
              <br />
              BAŞLANGIÇ!
            </h2>

            <p className="mt-10 text-2xl text-slate-600 leading-relaxed max-w-xl">
              Avrupa standartlarında eğitim, uluslararası geçerliliğe sahip
              diplomalar ve Belgrad’da profesyonel danışmanlık desteği.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="https://wa.me/381631673885"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-9 py-5 rounded-3xl font-bold text-lg shadow-2xl"
              >
                WhatsApp ile Danış
              </a>

              <button className="border-2 border-blue-600 text-blue-700 px-9 py-5 rounded-3xl font-bold hover:bg-blue-50 transition">
                Üniversiteleri İncele
              </button>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-20 rounded-full" />

            <div className="relative bg-white rounded-[40px] p-8 shadow-2xl border border-blue-100">
              <div className="bg-gradient-to-br from-blue-600 to-sky-400 rounded-[35px] p-14 text-center text-white">
                <div className="text-7xl font-black">BELGRAD</div>

                <div className="mt-10 grid grid-cols-2 gap-4 text-left">
                  <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5">
                    <h4 className="font-bold text-xl">Mavi Diploma</h4>
                    <p className="text-white/80 mt-2">
                      Avrupa standartlarında eğitim sistemi.
                    </p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5">
                    <h4 className="font-bold text-xl">YÖK Denkliği</h4>
                    <p className="text-white/80 mt-2">
                      Uluslararası geçerliliğe sahip programlar.
                    </p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5">
                    <h4 className="font-bold text-xl">Oturum İzni</h4>
                    <p className="text-white/80 mt-2">
                      Eğitim sürecinde resmi destek.
                    </p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5">
                    <h4 className="font-bold text-xl">Schengen Avantajı</h4>
                    <p className="text-white/80 mt-2">
                      Avrupa’ya kolay ulaşım imkanı.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl border border-blue-100 p-10">
            <div className="grid lg:grid-cols-7 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="text-center border-r last:border-none border-blue-100 px-4"
                >
                  <div className="w-20 h-20 rounded-3xl bg-blue-100 mx-auto flex items-center justify-center text-4xl text-blue-600 font-black">
                    ✓
                  </div>

                  <p className="mt-5 font-bold text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-slate-500 text-lg">
              * Eğitim süreçleri boyunca Sırbistan’da uluslararası ve Sırbistan
              Ticaret ve Eğitim Bakanlığı garantörlüğünde ofisimiz
              bulunduğundan tam destek verilecektir.
            </p>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[8px] text-blue-500 font-bold">
            Partner Üniversiteler
          </p>

          <h3 className="text-6xl font-black mt-5">
            Güçlü Akademik Partnerler
          </h3>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">
            {universities.map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-[35px] p-8 shadow-xl border border-blue-100 hover:-translate-y-2 transition"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 mb-8" />

                <h4 className="text-3xl font-black leading-tight">
                  {uni.name}
                </h4>

                <p className="text-slate-600 mt-5 leading-relaxed text-lg">
                  {uni.desc}
                </p>

                <button className="mt-8 text-blue-600 font-bold text-lg">
                  Detaylı İncele →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-600 to-sky-400 rounded-[40px] p-10 text-white shadow-2xl hover:scale-[1.02] transition"
              >
                <div className="w-20 h-20 bg-white/15 rounded-3xl mb-10" />

                <h3 className="text-5xl font-black leading-tight">
                  {program}
                </h3>

                <p className="mt-8 text-white/90 text-xl leading-relaxed">
                  Avrupa standartlarında eğitim programları ve profesyonel süreç
                  yönetimi.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[8px] text-blue-500 font-bold text-center">
            Sıkça Sorulan Sorular
          </p>

          <h3 className="text-6xl font-black mt-5 text-center">
            Merak Edilenler
          </h3>

          <div className="mt-14 space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-[30px] p-8 shadow-xl border border-blue-100"
              >
                <summary className="cursor-pointer text-2xl font-black">
                  {faq.q}
                </summary>

                <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[45px] bg-gradient-to-r from-blue-700 to-sky-500 p-16 text-white text-center shadow-2xl">
            <h3 className="text-6xl font-black leading-tight">
              Geleceğini Bugün Planla
            </h3>

            <p className="mt-8 text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Belgrad’da üniversite eğitimi, oturum süreci ve başvuru
              danışmanlığı için hemen bizimle iletişime geç.
            </p>

            <a
              href="https://wa.me/381631673885"
              target="_blank"
              className="inline-block mt-10 bg-white text-blue-700 px-10 py-5 rounded-3xl font-black text-xl shadow-2xl"
            >
              WhatsApp Üzerinden Başvur
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#02154d] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-14">
          <div>
            <h3 className="text-5xl font-black">İSTASYON AKADEMİ</h3>

            <p className="mt-8 text-white/80 text-xl leading-relaxed">
              Belgrad’da Avrupa standartlarında eğitim danışmanlığı.
            </p>
          </div>

          <div>
            <h4 className="font-black text-2xl mb-8">Programlar</h4>

            <ul className="space-y-5 text-white/80 text-lg">
              <li>Lisans</li>
              <li>Yüksek Lisans</li>
              <li>Doktora</li>
              <li>Yaz Okulu</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-2xl mb-8">Yasal</h4>

            <ul className="space-y-5 text-white/80 text-lg">
              <li>KVKK</li>
              <li>Gizlilik Politikası</li>
              <li>Çerez Politikası</li>
              <li>Kullanım Koşulları</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-2xl mb-8">İletişim</h4>

            <div className="text-5xl font-black">
              +381 63 1673885
            </div>

            <a
              href="https://wa.me/381631673885"
              target="_blank"
              className="inline-block mt-8 bg-[#10d95c] text-white px-8 py-5 rounded-3xl font-black text-xl"
            >
              WhatsApp Yaz
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-white/10 pt-10 text-white/50">
          © 2026 İstasyon Akademi. Tüm hakları saklıdır.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/381631673885"
        target="_blank"
        className="fixed bottom-8 right-8 bg-[#10d95c] text-white px-8 py-5 rounded-full font-black shadow-2xl z-50"
      >
        WhatsApp
      </a>
    </main>
  );
}
