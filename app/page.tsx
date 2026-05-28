```tsx
"use client";

import {
  GraduationCap,
  Globe,
  ShieldCheck,
  Plane,
  MessageCircle,
  Building2,
  BookOpen,
  Award,
  Clock3,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white text-[#0b1c48] overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white w-7 h-7" />
            </div>

            <div>
              <h1 className="font-black text-2xl tracking-tight">
                İSTASYON
              </h1>
              <p className="text-blue-500 text-sm tracking-[4px] font-semibold">
                AKADEMİ
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-medium">
            <a href="#">Anasayfa</a>
            <a href="#">Hakkımızda</a>
            <a href="#">Lisans</a>
            <a href="#">Yüksek Lisans</a>
            <a href="#">Doktora</a>
            <a href="#">Yaz Okulu</a>
            <a href="#">Üniversiteler</a>
            <a href="#">SSS</a>
            <a href="#">İletişim</a>
          </nav>

          <a
            href="https://wa.me/381631673885"
            target="_blank"
            className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 py-3 rounded-2xl shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Başvuru Yap
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-500 text-2xl italic mb-5">
              Hayallerine İstasyon Belgrad!
            </p>

            <h2 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              GELECEĞİN İÇİN
              <span className="block text-blue-600">
                BELGRAD’DA
              </span>
              YENİ BİR BAŞLANGIÇ!
            </h2>

            <p className="mt-8 text-xl text-slate-700 leading-relaxed max-w-2xl">
              YÖK denkliği bulunan üniversitelerde Avrupa standartlarında
              eğitim fırsatı seni bekliyor.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="https://wa.me/381631673885"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
              >
                Ücretsiz Danışmanlık
              </a>

              <a
                href="https://wa.me/381631673885"
                target="_blank"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all px-8 py-4 rounded-2xl text-lg font-semibold"
              >
                WhatsApp ile Danış
              </a>
            </div>
          </div>

          {/* GLASS CARD */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[40px] p-10 max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Globe className="text-blue-600 w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-bold text-2xl">Belgrad</h3>
                  <p className="text-slate-500">Sırbistan</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Tarihi, kültürü ve modern yaşamıyla öğrenciler için eşsiz bir
                eğitim merkezi.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <FeatureMini icon={<ShieldCheck />} title="Güvenli" />
                <FeatureMini icon={<Award />} title="Uluslararası" />
                <FeatureMini icon={<Building2 />} title="Modern" />
                <FeatureMini icon={<BookOpen />} title="Akademik" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="relative -mt-24 z-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl border border-blue-100 p-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Advantage
              icon={<Award />}
              title="Bologna Süreci Onaylı Mavi Diploma"
            />

            <Advantage
              icon={<Globe />}
              title="Uluslararası Geçerlilik"
            />

            <Advantage
              icon={<ShieldCheck />}
              title="YÖK Denkliği"
            />

            <Advantage
              icon={<Plane />}
              title="Schengen Ülkelerine Kolaylıkla Gidiş İmkanı"
            />

            <Advantage
              icon={<Clock3 />}
              title="Yıllara Göre Artmayan ve Uygun Fiyatlı Ücretler"
            />

            <Advantage
              icon={<Building2 />}
              title="Oturum ve Çalışma İzinleri"
            />

            <Advantage
              icon={<MessageCircle />}
              title="Eğitim Süresince Tam Destek"
            />

            <Advantage
              icon={<GraduationCap />}
              title="Avrupa Standartlarında Eğitim"
            />
          </div>

          <div className="mt-10 text-center text-slate-600 leading-relaxed max-w-4xl mx-auto">
            * Eğitim süreçleri boyunca Sırbistan’da uluslararası ve Sırbistan
            Ticaret ve Eğitim Bakanlığı garantörlüğünde destek sağlanacaktır.
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="py-28 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-blue-500 font-semibold">
              Güçlü Üniversiteler
            </p>

            <h2 className="text-5xl font-black mt-3">
              Partner Üniversitelerimiz
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <UniversityCard
              title="University of Belgrade"
              image="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1200&auto=format&fit=crop"
            />

            <UniversityCard
              title="Medika"
              image="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"
            />

            <UniversityCard
              title="Faculty of Business Economics"
              image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
            />

            <UniversityCard
              title="MSS Modern Business School"
              image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="uppercase tracking-[4px] text-blue-500 font-semibold">
              Programlarımız
            </p>

            <h2 className="text-5xl font-black mt-3">
              Eğitim Seçenekleri
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <ProgramCard title="Lisans Programları" />
            <ProgramCard title="Yüksek Lisans Programları" />
            <ProgramCard title="Doktora Programları" />
            <ProgramCard title="Yaz Okulu" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[50px] overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#001d5c]/90 to-[#0055ff]/70" />

            <div className="relative z-10 p-16 lg:p-24 text-white">
              <p className="text-2xl italic text-blue-200">
                Hayalini Erteleme
              </p>

              <h2 className="text-6xl font-black mt-5 leading-tight">
                DÜNYAYA
                <br />
                AÇIL!
              </h2>

              <a
                href="https://wa.me/381631673885"
                target="_blank"
                className="inline-flex items-center gap-3 mt-10 bg-white text-blue-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
              >
                Hemen Başvur
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#03163f] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-black">İSTASYON AKADEMİ</h3>

              <p className="mt-6 text-blue-100 leading-relaxed">
                Avrupa standartlarında eğitim fırsatları ve profesyonel
                danışmanlık hizmeti.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-5">Hızlı Linkler</h4>

              <ul className="space-y-3 text-blue-100">
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>Lisans Programları</li>
                <li>Yüksek Lisans</li>
                <li>Doktora</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-5">Yasal</h4>

              <ul className="space-y-3 text-blue-100">
                <li>KVKK Aydınlatma Metni</li>
                <li>Gizlilik Politikası</li>
                <li>Çerez Politikası</li>
                <li>Kullanım Koşulları</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-5">İletişim</h4>

              <div className="space-y-4">
                <a
                  href="https://wa.me/381631673885"
                  target="_blank"
                  className="flex items-center gap-3 text-blue-100"
                >
                  <Phone />
                  +381 63 1673885
                </a>

                <a
                  href="https://wa.me/381631673885"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 transition-all px-6 py-4 rounded-2xl font-bold mt-4"
                >
                  <MessageCircle />
                  WhatsApp ile Yazın
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 text-center text-blue-200">
            © 2026 İstasyon Akademi. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureMini({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md border border-blue-50">
      <div className="text-blue-600 mb-3">{icon}</div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}

function Advantage({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto mb-5 text-blue-600">
        {icon}
      </div>

      <h3 className="font-bold leading-relaxed">{title}</h3>
    </div>
  );
}

function UniversityCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden border border-blue-100 shadow-xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-7">
        <h3 className="text-2xl font-black">{title}</h3>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Avrupa standartlarında güçlü akademik eğitim.
        </p>

        <button className="mt-6 text-blue-600 font-bold flex items-center gap-2">
          Detaylı İncele
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function ProgramCard({ title }: { title: string }) {
  return (
    <div className="bg-white border border-blue-100 rounded-[30px] p-10 shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
        <GraduationCap size={40} />
      </div>

      <h3 className="text-2xl font-black">{title}</h3>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Avrupa standartlarında akademik eğitim seçenekleri.
      </p>

      <button className="mt-6 text-blue-600 font-bold flex items-center gap-2">
        Programları Gör
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
```
