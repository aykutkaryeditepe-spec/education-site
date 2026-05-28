export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6 text-center">
        Yurtdışı Eğitim
      </h1>

      <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
        Avrupa’da üniversite, oturum izni ve eğitim danışmanlığı.
        Geleceğini birlikte planlayalım.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Başvur
        </button>

        <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
          İletişim
        </button>
      </div>
    </main>
  );
}
