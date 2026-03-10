export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-amber-700 bg-amber-50 rounded-full">
          Bienvenido a tu nuevo proyecto
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-6">
          Construye algo
          <span className="text-amber-600"> increible</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
          La plantilla perfecta para lanzar tu idea al mundo. Rapido, moderno y
          listo para personalizar a tu gusto.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors text-center"
          >
            Empezar ahora
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 border border-stone-300 text-stone-700 font-medium rounded-full hover:border-amber-300 hover:text-amber-600 transition-colors text-center"
          >
            Ver mas
          </a>
        </div>
      </div>
    </section>
  );
}
