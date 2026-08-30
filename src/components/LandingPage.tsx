import { Film } from 'lucide-react';

const APP_URL = 'https://app.indielens.tv';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold">IndieLens</span>
          </div>
          <a
            href={APP_URL}
            className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Watch in the browser
          </a>
        </div>
      </nav>

      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Independent-film
            <span className="text-yellow-400 block">streaming</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            IndieLens is an independent-film streaming product. The live app
            runs in your browser — that is where watching happens.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Watch in the browser
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Opens{' '}
            <span className="text-gray-400">app.indielens.tv</span>
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-4">What this is</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This site is the public front door. It does not sign you in, play
              films, or simulate a catalog. Those things live in the browser
              app at{' '}
              <a
                href={APP_URL}
                className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2"
              >
                app.indielens.tv
              </a>
              .
            </p>
            <p className="text-gray-300 leading-relaxed">
              The direction is a small public-domain and rights-free library —
              not a claim about what is live today, and not a title count.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <Film className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-white">IndieLens</span>
          </div>
          <p className="text-sm">&copy; 2026 IndieLens</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
