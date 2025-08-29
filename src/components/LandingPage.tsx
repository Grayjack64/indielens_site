import React, { useState } from 'react';
import { Play, Star, Award, Film, Eye, Calendar, Menu, X } from 'lucide-react';

interface LandingPageProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredFilms = [
    {
      title: "Midnight in the Garden",
      director: "Sofia Chen",
      year: 2024,
      rating: 4.8,
      genre: "Drama",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "The Last Bookstore",
      director: "Marcus Webb",
      year: 2024,
      rating: 4.6,
      genre: "Documentary",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Urban Echoes",
      director: "Elena Rodriguez",
      year: 2023,
      rating: 4.9,
      genre: "Drama",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold">IndieLens</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
            <a href="#catalog" className="hover:text-yellow-400 transition-colors">Catalog</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2 text-white hover:text-yellow-400 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Start Watching
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
              <a href="#catalog" className="hover:text-yellow-400 transition-colors">Catalog</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-4 py-2 text-left hover:text-yellow-400 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200"
                >
                  Start Watching
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover the
                <span className="text-yellow-400 block">Independent</span>
                Cinema Revolution
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Immerse yourself in extraordinary stories from visionary filmmakers around the world. 
                IndieLens curates the finest independent films and documentaries that challenge, 
                inspire, and transform perspectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Your Journey</span>
                </button>
                <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg transition-all duration-200">
                  Watch Trailer
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Featured independent film"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Midnight in the Garden</h3>
                  <p className="text-gray-300 mb-3">A haunting tale of love and loss in urban landscapes</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">4.8</span>
                    </div>
                    <span className="text-sm text-gray-400">2024</span>
                    <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded">Featured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose IndieLens?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Film className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Curated Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Every film is handpicked by our team of cinema experts, ensuring you discover 
                hidden gems and award-winning masterpieces from independent filmmakers worldwide.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Exclusive Originals</h3>
              <p className="text-gray-300 leading-relaxed">
                Starting 2026, enjoy exclusive original productions by IndieLens, featuring 
                groundbreaking stories and innovative filmmaking techniques.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Eye className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Personal Discovery</h3>
              <p className="text-gray-300 leading-relaxed">
                Our intelligent recommendation system learns your preferences to suggest 
                films that match your taste and introduce you to new cinematic experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFilms.map((film, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-300">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white bg-yellow-500 rounded-full p-4" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold mb-2">{film.title}</h3>
                    <p className="text-gray-300 mb-3">Directed by {film.director}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{film.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400">{film.year}</span>
                      </div>
                      <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">{film.genre}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Art of Independent Cinema</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Independent films represent the purest form of cinematic expression—where creative vision 
            takes precedence over commercial considerations. These are stories told with passion, 
            authenticity, and artistic integrity, offering perspectives often overlooked by mainstream media.
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Authentic Storytelling</h3>
              <p className="text-gray-300 leading-relaxed">
                Independent filmmakers bring raw, unfiltered stories to life, exploring complex themes 
                and diverse perspectives that reflect the true human experience. Every frame is crafted 
                with intention and artistic purpose.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Global Perspectives</h3>
              <p className="text-gray-300 leading-relaxed">
                Our collection spans continents and cultures, showcasing voices from emerging and 
                established filmmakers who dare to challenge conventions and expand the boundaries 
                of cinematic storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Discover Your Next Favorite Film?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of film enthusiasts who trust IndieLens to deliver extraordinary 
            cinematic experiences. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button
              onClick={() => onOpenAuth('login')}
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Film className="w-6 h-6 text-yellow-400" />
                <span className="text-xl font-bold">IndieLens</span>
              </div>
              <p className="text-gray-400">
                Celebrating independent cinema and the artists who create it.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-gray-400">
                <p>Films</p>
                <p>Documentaries</p>
                <p>Originals (2026)</p>
                <p>Collections</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Community</p>
                <p>Press Kit</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Policy</p>
                <p>Accessibility</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 IndieLens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;