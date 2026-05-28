export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl font-black text-blue-800">
            İSTASYON AKADEMİ
          </h1>
          <p className="mt-6 text-2xl text-slate-700">
            Geleceğin için Belgrad’da yeni bir başlangıç.
          </p>
          <a
            href="https://wa.me/381631673885"
            className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold"
          >
            WhatsApp ile Danış
          </a>
        </div>
      </section>
    </main>
  );
}
