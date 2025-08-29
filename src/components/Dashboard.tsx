import React, { useState } from 'react';
import { User, Film, Play, Star, Clock, Calendar, Search, Menu, X, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import VideoCard from './VideoCard';
import { getMockData } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const mockData = getMockData();

  const categories = [
    { title: 'Continue Watching', data: mockData.continueWatching, showProgress: true },
    { title: 'New Releases', data: mockData.newReleases },
    { title: 'Recently Watched', data: mockData.recentlyWatched },
    { title: 'Award Winners', data: mockData.awardWinners },
    { title: 'Documentaries', data: mockData.documentaries },
    { title: 'International Cinema', data: mockData.international },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold">IndieLens</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">Browse</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">My List</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Originals</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search films..."
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all w-64"
              />
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-sm text-gray-400">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:block">Sign Out</span>
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">Browse</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">My List</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Originals</a>
              <div className="pt-4 border-t border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search films..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Featured film"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Midnight in the Garden</h1>
            <p className="text-lg text-gray-200 mb-6">
              A haunting exploration of urban solitude and human connection in the digital age. 
              Director Sofia Chen crafts a visually stunning narrative that challenges our 
              understanding of modern relationships.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>4.8</span>
              </div>
              <span>2024</span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold">New</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Now</span>
              </button>
              <button className="px-8 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white font-semibold rounded-lg transition-all duration-200">
                + My List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <CategoryRow
              key={index}
              title={category.title}
              videos={category.data}
              showProgress={category.showProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CategoryRowProps {
  title: string;
  videos: any[];
  showProgress?: boolean;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ title, videos, showProgress = false }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
    
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, index) => (
          <VideoCard 
            key={index} 
            video={video} 
            showProgress={showProgress} 
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;