function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-950 dark:bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI-Powered Satellite Image Analysis
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Detect land cover, monitor environmental
          changes, generate reports, and compare
          satellite imagery using AI.
        </p>

        <div className="flex justify-center gap-4">

          <button
            className="
            bg-green-500
            hover:bg-green-600
            px-6 py-3
            rounded-lg
            transition
            duration-300
            hover:scale-105
            shadow-lg
            "
          >
            Analyze Image
          </button>

          <button
            className="
            border border-white
            px-6 py-3
            rounded-lg
            transition
            duration-300
            hover:bg-white
            hover:text-black
            "
          >
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;