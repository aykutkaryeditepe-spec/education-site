const phone = "381631673885";

const message =
  "Merhaba, Belgrad’da eğitim hakkında bilgi almak istiyorum.";

const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const benefits = [
  "YÖK Denkliği",
  "Mavi Diploma",
  "Bologna Süreci",
  "Sabit Eğitim Ücretleri",
  "Taksitli Ödeme",
  "Schengen Avantajı",
  "Oturum Desteği",
  "Tam Danışmanlık",
];

const programs = [
  "Tıp",
  "Diş Hekimliği",
  "Yazılım",
  "Psikoloji",
  "İşletme",
  "Mimarlık",
  "Türkoloji",
  "MBA",
];

const universities = [
  {
    name: "University of Belgrade",
    image: "/images/ub-campus.png",
    logo: "/images/ub-logo.png",
    desc: "Avrupa’nın köklü üniversitelerinden biri olan University of Belgrade, uluslararası akademik yapısı ve güçlü eğitim sistemiyle öne çıkmaktadır.",
  },

  {
    name: "Medika College of Vocational Health Studies",
    image: "/images/medika-campus.png",
    logo: "/images/medika-logo.png",
    desc: "Sağlık bilimleri alanında uygulamalı eğitim, modern laboratuvarlar ve Avrupa standartlarında akademik süreçler sunmaktadır.",
  },

  {
    name: "Faculty of Business Economics and Entrepreneurship",
    image: "/images/fbe-campus.png",
    logo: "/images/fbe-logo.png",
    desc: "İşletme, ekonomi ve girişimcilik alanlarında uluslararası geçerliliğe sahip modern akademik eğitim fırsatları sunmaktadır.",
  },

  {
    name: "Modern Business School",
    image: "/images/mbs-campus.png",
    logo: "/images/mbs-logo.png",
    desc: "Uluslararası işletme, yönetim ve modern ekonomi alanlarında Avrupa standartlarında akademik eğitim fırsatı sunmaktadır.",
  },
];

const faqs = [
  {
    q: "Sırbistan’da alınan diplomalar Türkiye’de geçerli mi?",
    a: "Evet. Üniversite ve programın YÖK kriterlerine uygun olması durumunda denklik süreçleri yürütülebilmektedir. Partner üniversitelerimiz Bologna sürecine dahil olup uluslararası akademik standartlara uygundur.",
  },

  {
    q: "Mavi diploma veriliyor mu?",
    a: "Evet. Üniversiteler Avrupa standartlarında eğitim verdiğinden dolayı mezuniyet sonrası mavi diploma sistemi bulunmaktadır.",
  },

  {
    q: "Eğitim ücretleri yıllık olarak artıyor mu?",
    a: "Birçok programda eğitim ücretleri öğrencinin kayıt olduğu yıl üzerinden sabitlenmektedir. Böylece öğrenciler eğitim süreçlerini daha güvenli şekilde planlayabilmektedir.",
  },

  {
    q: "Taksitli ödeme imkanı bulunuyor mu?",
    a: "Evet. Üniversite ve programa göre dönemlik veya taksitli ödeme seçenekleri sunulabilmektedir.",
  },

  {
    q: "Türkçe programlar mevcut mu?",
    a: "Evet. Özellikle Türkoloji bölümü tamamen Türkçe eğitim vermektedir. Ayrıca bu bölümün yüksek lisans ve doktora programları da bulunmaktadır.",
  },

  {
    q: "Eğitim dili nedir?",
    a: "Programlara göre eğitim dili İngilizce, Sırpça veya Türkçe olabilmektedir. Uluslararası öğrenciler için İngilizce program seçenekleri geniştir.",
  },

  {
    q: "Schengen ülkelerine seyahat avantajı bulunuyor mu?",
    a: "Evet. Yasal öğrenci statüsünde bulunan öğrenciler gerekli prosedürleri tamamladıktan sonra Schengen vizesine başvurabilmektedir. Çoğu durumda yalnızca öğrenci belgesi ile başvuru yapılabilmektedir.",
  },

  {
    q: "Schengen vize süreci ne kadar sürüyor?",
    a: "Başvurular çoğu durumda yaklaşık 7 gün içerisinde sonuçlanmaktadır. Danışmanlık hizmetimiz kapsamında süreçler ücretsiz şekilde takip edilmektedir.",
  },

  {
    q: "Oturum izni alabiliyor muyum?",
    a: "Evet. Üniversite kabulü sonrası öğrenciler için yasal oturum izni süreçleri başlatılmaktadır. Tüm süreç danışmanlık desteğimiz kapsamında takip edilmektedir.",
  },

  {
    q: "Eğitim sırasında çalışma izni var mı?",
    a: "Sırbistan’daki yasal düzenlemeler kapsamında belirli koşullar altında çalışma izni süreçleri yürütülebilmektedir.",
  },

  {
    q: "Askerlik tecil işlemleri yapılabiliyor mu?",
    a: "Evet. Türkiye Cumhuriyeti mevzuatına uygun şekilde öğrencilik durumuna bağlı resmi süreçlerde danışmanlık desteği sağlanmaktadır.",
  },

  {
    q: "Üniversiteye giriş için YKS zorunlu mu?",
    a: "Hayır. Birçok bölümde yalnızca YKS sonucu ile değil, lise diploması ve üniversite başvuru süreci ile kayıt yapılabilmektedir.",
  },

  {
    q: "Firmanız Sırbistan Hükümeti tarafından tanınıyor mu?",
    a: "Evet. Yaptığımız anlaşmalar doğrultusunda Sırbistan Ticaret ve Eğitim Bakanlığı ile çeşitli ortak çalışmalar yürütülmektedir. Ayrıca Belgrad’da fiziksel ofisimiz bulunmaktadır.",
  },

  {
    q: "Eğitim sürecinde destek veriliyor mu?",
    a: "Evet. Öğrencilerimize başvuru, kabul, kayıt, oturum, konaklama ve eğitim süreçleri boyunca ücretsiz danışmanlık desteği sağlanmaktadır.",
  },

  {
    q: "Konaklama konusunda yardımcı oluyor musunuz?",
    a: "Evet. Öğrencilere bütçe ve lokasyona uygun konaklama seçenekleri konusunda destek verilmektedir.",
  },

  {
    q: "Başvuru süreci nasıl ilerliyor?",
    a: "Ön başvuru sonrası öğrenciye uygun bölüm ve üniversite seçenekleri belirlenir. Ardından evrak süreci, kabul işlemleri, kayıt ve oturum süreçleri profesyonel şekilde takip edilir.",
  },

  {
    q: "Başvuru için hangi belgeler gerekiyor?",
    a: "Genellikle pasaport, lise diploması, transkript ve bazı programlarda ek akademik belgeler talep edilmektedir.",
  },

  {
    q: "Sırbistan’da yaşam maliyetleri uygun mu?",
    a: "Evet. Avrupa’daki birçok ülkeye kıyasla Sırbistan’da yaşam ve eğitim maliyetleri daha uygundur.",
  },

  {
    q: "Eğitim sonrası Avrupa’da kariyer avantajı bulunuyor mu?",
    a: "Evet. Avrupa standartlarında alınan eğitim ve uluslararası diploma sayesinde öğrenciler farklı ülkelerde kariyer fırsatlarına ulaşabilmektedir.",
  },
];
 

export default function Home() {
  return (
    <main className="bg-[#eef7ff] text-[#061946] overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-start justify-between">

          <div>
            <img
              src="/images/logo-horizontal.png"
              alt="İstasyon Akademi"
              className="h-14 md:h-16 w-auto"
            />
          </div>

          <nav className="hidden lg:flex gap-8 font-bold text-sm">
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#programlar">Programlar</a>
            <a href="#universiteler">Üniversiteler</a>
            <a href="#sss">SSS</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a
            href={whatsapp}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-2xl font-black shadow-xl"
          >
            Başvuru Yap
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="relative min-h-[760px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_35%]"
          style={{ backgroundImage: "url('/images/belgrad-hero-premium.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021440]/78 via-[#021440]/35 to-[#021440]/10" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-32 grid lg:grid-cols-1 gap-16 items-start">
          <div className="text-white">
            <p className="text-2xl italic text-sky-300 mb-8">
              Üniversite için tek yol yalnızca YKS değil.
            </p>

            <h2 className="text-6xl lg:text-[96px] font-black leading-[0.95] drop-shadow-2xl">
              Belgrad’da
              <br />
              Geleceğini
              <br />
              İnşa Et
            </h2>

            <p className="mt-8 text-xl text-white/90 leading-relaxed max-w-xl">
              Avrupa standartlarında eğitim, YÖK denkliği,
              mavi diploma, Schengen avantajları ve
              profesyonel danışmanlık desteği.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href={whatsapp}
                className="bg-blue-500 hover:bg-blue-600 transition px-8 py-5 rounded-2xl font-black text-white shadow-2xl"
              >
                WhatsApp ile Başvur
              </a>

              <a
                href="#programlar"
                className="bg-[#061946]/60 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition px-8 py-5 rounded-2xl font-black text-white"
              >
                Programları İncele →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="relative z-30 -mt-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[32px] shadow-2xl p-8 grid md:grid-cols-4 gap-6 border border-blue-100">
          {[
            ["🏛️", "Avrupa Standartlarında Eğitim", "Kaliteli ve uluslararası eğitim imkânları"],
            ["🎖️", "YÖK Denkliği", "Türkiye’de geçerli üniversite diploması"],
            ["✈️", "Schengen Avantajları", "Avrupa’ya yakın konum avantajı"],
            ["🎧", "7/24 Danışmanlık Desteği", "Başvuru sürecinde yanınızdayız"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-start justify-center text-3xl">
                {icon}
              </div>
              <div>
                <h3 className="font-black text-[#061946]">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="hakkimizda"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>

            <p className="text-blue-600 tracking-[6px] text-sm font-black">
              HAKKIMIZDA
            </p>

            <h2 className="text-6xl font-black mt-5 leading-tight">
              İstanbul ve
              <br />
              Belgrad’da
              <br />
              Yanınızdayız
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">

            <p>
              İstasyon Akademi, öğrencilerin Avrupa
              standartlarında eğitim fırsatlarına güvenli
              şekilde ulaşabilmesi amacıyla kurulmuştur.
            </p>

            <p>
              İstanbul’daki ana merkezimiz ve Belgrad’daki
              ofisimiz ile öğrencilerimize başvuru,
              kabul, oturum, konaklama ve eğitim
              süreçleri boyunca profesyonel destek
              sağlanmaktadır.
            </p>

            <p>
              Sırbistan Ticaret ve Eğitim Bakanlığı ile
              yürütülen iş birlikleri sayesinde
              sürdürülebilir danışmanlık hizmeti
              sunulmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMLAR */}

      <section id="programlar" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-black tracking-[0.35em] uppercase mb-4">
              PROGRAMLAR
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#021440] mb-6 leading-tight">
              Geleceğin Meslekleri
            </h2>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              En çok tercih edilen bölümler ve kariyer programları.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "🩺", title: "Tıp" },
              { icon: "🦷", title: "Diş Hekimliği" },
              { icon: "💊", title: "Eczacılık" },
              { icon: "🧬", title: "Fizyoterapi" },
              { icon: "🩹", title: "Hemşirelik" },
              { icon: "💻", title: "Yazılım" },
              { icon: "🤖", title: "Yapay Zekâ" },
              { icon: "🛡️", title: "Siber Güvenlik" },
              { icon: "🧠", title: "Psikoloji" },
              { icon: "📈", title: "MBA" },
              { icon: "💼", title: "İşletme" },
              { icon: "🌍", title: "Uluslararası İlişkiler" },
              { icon: "⚖️", title: "Hukuk" },
              { icon: "🏛️", title: "Mimarlık" },
              { icon: "🏗️", title: "İnşaat Mühendisliği" },
              { icon: "⚙️", title: "Makine Mühendisliği" },
              { icon: "🔌", title: "Elektrik-Elektronik" },
              { icon: "📚", title: "Türk Dili ve Edebiyatı" },
              { icon: "🏺", title: "Tarih" },
              { icon: "🗣️", title: "Türkoloji" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 rounded-[2rem] p-7 text-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-start justify-center text-4xl mb-7 shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black leading-tight mb-4">
                  {item.title}
                </h3>

                <div className="flex items-start text-sm text-white/80">
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#iletisim"
              className="inline-flex items-start bg-[#021440] text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Tüm Programları İncele
            </a>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}

      <section
        id="universiteler"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <p className="text-blue-600 tracking-[6px] text-sm font-black">
          ÜNİVERSİTELER
        </p>

        <h2 className="text-6xl font-black mt-5 mb-14">
          Partner Üniversiteler
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {universities.map((uni) => (

            <div
              key={uni.name}
              className="bg-white rounded-[36px] overflow-hidden shadow-2xl border border-blue-100 hover:-translate-y-2 transition"
            >

              <div className="relative">

                <img
                  src={uni.image}
                  alt={uni.name}
                  className="h-64 w-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-xl">

                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-black">
                  {uni.name}
                </h3>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  {uni.desc}
                </p>

                <button className="mt-6 text-blue-700 font-black">
                  Detaylı İncele →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}

      <section
        id="sss"
        className="bg-white py-32"
      >

        <div className="max-w-5xl mx-auto px-6">

          <p className="text-center text-blue-600 tracking-[6px] text-sm font-black">
            SIKÇA SORULAN SORULAR
          </p>

          <h2 className="text-center text-6xl font-black mt-5 mb-14">
            Merak Edilenler
          </h2>

          <div className="space-y-5">

            {faqs.map((faq) => (

              <details
                key={faq.q}
                className="bg-[#f8fbff] rounded-3xl p-7 border border-blue-100 shadow"
              >

                <summary className="cursor-pointer text-xl font-black">
                  {faq.q}
                </summary>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="bg-gradient-to-r from-blue-800 to-sky-500 rounded-[44px] p-16 text-center text-white shadow-2xl">

          <h2 className="text-6xl font-black">
            Geleceğini Bugün Planla
          </h2>

          <p className="mt-8 text-xl text-white/90 max-w-3xl mx-auto">
            Belgrad’da üniversite eğitimi, başvuru
            süreçleri ve profesyonel danışmanlık için
            hemen bizimle iletişime geç.
          </p>

          <a
            href={whatsapp}
            className="inline-block mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl font-black shadow-2xl"
          >
            WhatsApp Üzerinden Başvur
          </a>
        </div>
      </section>

      {/* FOOTER */}

      
      <footer id="iletisim" className="bg-[#021440] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10 items-start">
          <div>
            <img
              src="/images/logo-white.png"
              alt="İstasyon Akademi"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 text-white/70 leading-relaxed max-w-xs">
              İstanbul ana merkezimiz ve Belgrad ofisimizle Avrupa standartlarında eğitim danışmanlığı.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-5 text-lg">Programlar</h4>
            <div className="space-y-3 text-white/70">
              <a href="#programlar" className="block hover:text-white transition">Lisans Programları</a>
              <a href="#programlar" className="block hover:text-white transition">Yüksek Lisans Programları</a>
              <a href="#programlar" className="block hover:text-white transition">Doktora Programları</a>
              <a href="#programlar" className="block hover:text-white transition">Yaz Okulu</a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-5 text-lg">Yasal</h4>
            <div className="space-y-3 text-white/70">
              <a href="/kvkk" className="block hover:text-white transition">KVKK</a>
              <a href="/gizlilik-politikasi" className="block hover:text-white transition">Gizlilik Politikası</a>
              <a href="/cerez-politikasi" className="block hover:text-white transition">Çerez Politikası</a>
              <a href="/kullanim-kosullari" className="block hover:text-white transition">Kullanım Koşulları</a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-5 text-lg">İletişim</h4>
            <a
              href="tel:+381631673885"
              className="block text-2xl xl:text-3xl font-black whitespace-nowrap"
            >
              +381 63 1673885
            </a>
            <a
              href="https://wa.me/381631673885"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-black shadow-xl"
            >
              WhatsApp Yaz
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-white/50 text-sm">
          <p>© 2026 İstasyon Akademi. Tüm hakları saklıdır.</p>
          




<p>Belgrad’da Geleceğini İnşa Et.</p>

        </div>
      </footer>

{/* FLOATING BUTTON */}

      <a
        href={whatsapp}
        className="fixed bottom-7 right-7 bg-green-500 text-white px-7 py-4 rounded-full font-black shadow-2xl z-50"
      >
        WhatsApp
      </a>
    </main>
  );
}
