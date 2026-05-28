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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#071b45]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black text-blue-800">İSTASYON</div>
            <div className="text-xs tracking-[6px] text-sky-500 font-bold">AKADEMİ</div>
          </div>

          <nav className="hidden lg:flex gap-7 text-sm font-bold">
            <a href="#">Anasayfa</a>
            <a href="#universiteler">Üniversiteler</a>
            <a href="#programlar">Programlar</a>
            <a href="#sss">SSS</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a href={`https://wa.me/${phone}`} className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-black shadow-lg">
            Başvuru Yap
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-sky-100 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-2xl italic text-sky-500 mb-5">Hayallerine İstasyon Belgrad!</p>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              GELECEĞİN İÇİN <span className="block text-blue-700">BELGRAD’DA</span>
              YENİ BİR BAŞLANGIÇ!
            </h1>
            <p className="mt-7 text-lg text-slate-600 max-w-xl">
              Sırbistan Belgrad’da Avrupa standartlarında eğitim, mavi diploma,
              YÖK denkliği ve eğitim boyunca profesyonel destek.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={`https://wa.me/${phone}`} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl">
                Ücretsiz Danışmanlık
              </a>
              <a href="#programlar" className="bg-white border border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-black shadow-lg">
                Programları İncele
              </a>
            </div>
          </div>

          <div className="bg-white/80 border border-white rounded-[40px] p-7 shadow-2xl">
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

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-[36px] shadow-2xl border border-blue-100 p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-5">
            {benefits.map((item) => (
              <div key={item} className="text-center border-r last:border-r-0 border-blue-100 px-3">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-sky-100 text-blue-700 flex items-center justify-center font-black text-xl">✓</div>
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
        <p className="text-blue-600 font-black tracking-[4px] text-sm">GÜÇLÜ ÜNİVERSİTELER</p>
        <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-10">Partner Üniversitelerimiz</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          <Card title="University of Belgrade" text="Belgrad’ın köklü akademik kurumlarından biri." />
          <Card title="Medika College" text="Sağlık bilimleri alanında modern eğitim." />
          <Card title="Faculty of Business Economics and Entrepreneurship" text="İşletme, ekonomi ve girişimcilik odaklı akademik yapı." />
          <Card title="MSS Modern Business School" text="Modern iş dünyasına uygun program seçenekleri." />
        </div>
      </section>

      <section id="programlar" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 font-black tracking-[4px] text-sm">GELECEĞİNE YATIRIM YAP</p>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-10">Programlarımız</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            <Card title="Lisans Programları" text="Fakülte ve bölüm tercihlerini birlikte planlayalım." />
            <Card title="Yüksek Lisans Programları" text="Kariyer hedeflerinize uygun yüksek lisans seçenekleri." />
            <Card title="Doktora Programları" text="Akademik kariyer için doktora programları." />
            <Card title="Yaz Okulu" text="Yaz döneminde dil ve akademik gelişim fırsatları." />
          </div>
        </div>
      </section>

      <section id="sss" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-center text-blue-600 font-black tracking-[4px] text-sm">MERAK EDİLENLER</p>
        <h2 className="text-center text-4xl lg:text-5xl font-black mt-3 mb-10">Sıkça Sorulan Sorular</h2>
        {[
          "Sırbistan’da eğitim almak için gerekli şartlar nelerdir?",
          "YÖK denkliği var mı?",
          "Oturum ve çalışma izinleri nasıl ilerliyor?",
          "Eğitim dili nedir?",
          "Başvuru sürecinde hangi belgeler gerekir?",
        ].map((q) => (
          <details key={q} className="bg-white border border-blue-100 rounded-2xl p-5 mb-4 shadow">
            <summary className="font-black cursor-pointer">{q}</summary>
            <p className="mt-4 text-slate-600">
              Süreç öğrencinin eğitim seviyesine ve tercih edilen programa göre değerlendirilir. Detaylı bilgi için danışmanlık ekibimizle iletişime geçebilirsiniz.
            </p>
          </details>
        ))}
      </section>

      <footer id="iletisim" className="bg-[#031a4a] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-black">İSTASYON AKADEMİ</h3>
            <p className="mt-4 text-blue-100">Avrupa standartlarında eğitim fırsatları ve profesyonel danışmanlık hizmeti.</p>
          </div>
          <div>
            <h4 className="font-black mb-4">Hızlı Linkler</h4>
            <p>Anasayfa</p><p>Lisans Programları</p><p>Yüksek Lisans Programları</p><p>Doktora Programları</p><p>Yaz Okulu</p>
          </div>
          <div>
            <h4 className="font-black mb-4">Yasal</h4>
            <p>KVKK Aydınlatma Metni</p><p>Gizlilik Politikası</p><p>Çerez Politikası</p><p>Kullanım Koşulları</p>
          </div>
          <div>
            <h4 className="font-black mb-4">İletişim</h4>
            <p className="text-xl font-black">+381 63 1673885</p>
            <a href={`https://wa.me/${phone}`} className="inline-block mt-5 bg-green-500 px-7 py-4 rounded-2xl font-black">
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-blue-100 text-sm">
          © 2026 İstasyon Akademi. Tüm hakları saklıdır.
        </div>
      </footer>

      <a
        href={`https://wa.me/${phone}`}
        className="fixed right-6 bottom-6 z-50 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-black"
      >
        WhatsApp
      </a>
    </main>
  );
}

function SmallCard({ title }: { title: string }) {
  return <div className="bg-sky-50 rounded-2xl p-4 text-center font-black text-blue-800">{title}</div>;
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-[30px] p-7 border border-blue-100 shadow-xl hover:-translate-y-2 transition">
      <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-black mb-6">✦</div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
      <button className="mt-6 text-blue-700 font-black">Detaylı İncele →</button>
    </div>
  );
}
